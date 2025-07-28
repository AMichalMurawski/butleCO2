import React from "react";
import { AddProduct, DeleteProduct, ProductDescription, ProductImage, ProductWraper } from "./Product.styled";
import { OrderProductProps } from "../../../context/Order/orderProps";
import IconSvg from "../../Icons/IconSvg/IconSvg";
import { useTheme } from "styled-components";
import { P } from "../../../styles";
import AmountCounter from "./AmountCounter";
import { useOrder } from "../../../context/Order/OrderContext";

interface ProductProps {
    product: OrderProductProps | '';
    position: number;
}

const Product: React.FC<ProductProps> = ({ product, position }) => {
    const { deleteProduct, order, productAmountChange, modalState } = useOrder()
    const theme = useTheme();

    const handleAmountChange = (newAmount: number, index: number) => {
        const products = [...order.products];
        products[index].amount = newAmount;
        products[index].price = newAmount * products[index].unitPrice;
        
        productAmountChange(index, newAmount);
    }

    return <ProductWraper>
        {product ? <>
            <ProductImage>
                <IconSvg name="gas-cylinder" fill={theme.color.structuralTrans} size="8rem"/>
            </ProductImage>
            <ProductDescription>
                <P $bold>{product.type} {product.litr ? (product.litr + ' l') : ''}{product.weight ? (product.weight + ' kg') : ''}</P>
                <AmountCounter min={1} max={60} value={product.amount} onChange={value => handleAmountChange(value, position)} />
                <P $bold>{product.price.toFixed(2)} PLN</P>
            </ProductDescription>
            <DeleteProduct type='button' onClick={() => deleteProduct(position)}>
                <IconSvg name='cross' fill={theme.color.danger} />
            </DeleteProduct>
        </> : <>
            <AddProduct type='button' onClick={() => modalState('products')}>
                <IconSvg name="cross" fill={theme.color.text} />
            </AddProduct>
        </>}
    </ProductWraper>
};

export default Product;