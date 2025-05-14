import React from 'react';
import { Informations, InformationsWraper, Reference } from './Informations.styled';

const OrderForm: React.FC = () => {
  const handleSubmit = () => {
    window.alert('Zamówienie złożone');
  };

  return (
    <InformationsWraper>
      <Reference>
        <Informations>
          * Całkowity koszt zamówienia zawiera w sobie opłatę przewozową w wysokości 20 zł.
        </Informations>
      </Reference>
      <Informations>
        Do ceny mogą być doliczone koszta za dostawę poza rejonem, jak również rabaty dla stałych
        klientów lub dużych zamówień.
      </Informations>
      <Informations>
        Ostateczna cena zostanie przesłana drogą mailową wraz z potwierdzeniem zamówienia.
      </Informations>
    </InformationsWraper>
  );
};

export default OrderForm;
