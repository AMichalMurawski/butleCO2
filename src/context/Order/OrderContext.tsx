import React, { createContext, useContext, useState, PropsWithChildren, useEffect } from 'react';
import { initialValues } from './initialValues';
import { OrderProductProps, OrderProps } from './orderProps';
import { orderSchema } from './schema';
import { useToast } from '../Toast/ToastContext';
import { useConfig } from '../Config/ConfigContext';
import { sendEmail } from '../../utils/sendEmail';

const customTypeOrder = ['CO2', 'Argon', 'Argon + CO2', 'Azot', 'Azot + CO2', 'Propan'];

type OrderKeys = keyof OrderProps | 'confirm';

type updateInvoiceProps = <K extends 'client' | 'company'>(
  section: K,
  value: OrderProps[K]
) => void;

interface OrderContextProps {
  addProduct: (product: OrderProductProps) => void;
  deleteProduct: (index: number) => void;
  modals: Record<OrderKeys, boolean>;
  modalState: (modal: OrderKeys) => void;
  order: OrderProps;
  productAmountChange: (index: number, amount: number) => void;
  confirmOrder: () => void;
  submitOrder: () => void;
  updateInvoice: updateInvoiceProps;
}

const initialModals: Record<OrderKeys, boolean> = {
  client: false,
  company: false,
  products: false,
  summary: false,
  confirm: false,
};

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const OrderProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const config = useConfig();
  const [order, setOrder] = useState<OrderProps>(initialValues(config));
  const [modals, setModals] = useState<Record<OrderKeys, boolean>>(initialModals);
  const { addToast } = useToast();

  useEffect(() => {
    setOrder(initialValues(config));

    const clientData = localStorage.getItem('clientData');
    if (!!clientData) {
      updateInvoice('client', JSON.parse(clientData));
    }

    const companyData = localStorage.getItem('companyData');
    if (!!companyData) {
      updateInvoice('company', JSON.parse(companyData));
    }
  }, [config]);

  const modalState = (modal: OrderKeys) => {
    setModals(prev => ({ ...prev, [modal]: !prev[modal] }));
  };

  const updateInvoice: updateInvoiceProps = (section, value) => {
    setOrder(prev => ({ ...prev, [section]: value }));
  };

  const addProduct = (product: OrderProductProps) => {
    const isExist = order.products.some(
      p =>
        p.type === product.type &&
        p.weight === product.weight &&
        p.litr === product.litr &&
        p.transaction === product.transaction
    );

    if (isExist) return;

    const products = [...order.products, product];
    const sortedProducts = products
      .slice()
      .sort((a, b) => {
        const aValue = a.weight ?? a.litr ?? 0;
        const bValue = b.weight ?? b.litr ?? 0;
        return aValue - bValue;
      })
      .sort((a, b) => {
        const aIndex = customTypeOrder.indexOf(a.type);
        const bIndex = customTypeOrder.indexOf(b.type);
        return aIndex - bIndex;
      })
      .sort((a, b) => Number(a.transaction) - Number(b.transaction));

    changeProductsList(sortedProducts);
  };

  const productAmountChange = (index: number, amount: number) => {
    const products = [...order.products];
    products[index].amount = amount;
    products[index].price = amount * products[index].unitPrice;

    changeProductsList(products);
  };

  const deleteProduct = (index: number) => {
    const products = [...order.products];
    products.splice(index, 1);

    changeProductsList(products);
  };

  const changeProductsList = (products: OrderProductProps[]) => {
    console.log(order.products[0]);
    if (!products[0]) {
      setOrder(prev => ({
        ...prev,
        products,
        summary: { deliveryCost: 0, discount: 0, productsCost: 0, summaryCost: 0 },
      }));
      return;
    }

    let productsCost = products.reduce((sum, prod) => (sum = sum + prod.price), 0);
    const deliveryCost = config.deliveryCost;
    if (productsCost < config.minCost) productsCost = config.minCost;

    const summaryCost = productsCost + deliveryCost;
    const summary = { ...order.summary, productsCost, deliveryCost, summaryCost };

    setOrder(prev => ({ ...prev, products, summary }));
  };

  const confirmOrder = async () => {
    try {
      await orderSchema.validate(order, { abortEarly: false });

      const response = await sendEmail({
        userName: order.client.name,
        userEmail: order.client.email,
        message: `
          Zamawiający: ${order.client.name}
          Email: ${order.client.email}

          Produkt: ${order.products[0].type} ${order.products[0].weight || order.products[0].litr}
          Wymiana / zakup: ${order.products[0].transaction}
          Cena: ${order.products[0].unitPrice}
          Ilość: ${order.products[0].amount}
          Koszt: ${order.products[0].price}
        `,
        formType: 'order',
      });

      if (!response.success) {
        addToast('Nie udało się wysłać zamówienia', 'error');
        return;
      }

      addToast('Twoje zamówienie zostało wysłane', 'success');

      localStorage.setItem('clientData', JSON.stringify(order.client));
      localStorage.setItem('companyData', JSON.stringify(order.company));

      setOrder(initialValues(config));
    } catch (err: any) {
      if (err.inner) {
        err.inner.forEach((error: any) => addToast(error.message, 'error'));
      } else {
        window.alert(`Błąd walidacji: ${err.message}`);
        console.warn('Błąd walidacji:', err.message);
      }
    }
  };

  const submitOrder = () => {
    window.alert('Zamówienie wysłane');
  };

  return (
    <OrderContext.Provider
      value={{
        addProduct,
        deleteProduct,
        modals,
        modalState,
        order,
        productAmountChange,
        confirmOrder,
        submitOrder,
        updateInvoice,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) throw new Error('useOrder must be used within OrderProvider');
  return context;
};
