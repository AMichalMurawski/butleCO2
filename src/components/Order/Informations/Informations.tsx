import React from 'react';
import { InformationsValue, InformationsWraper, Reference } from './Informations.styled';
import { useConfig } from '../../../context/Config/ConfigContext';

const Informations: React.FC = () => {
  const config = useConfig();

  return (
    <InformationsWraper>
      <Reference>
        <InformationsValue $reference={1}>
          Minimalna wartość zamówienia wynosi {config.minCost.toFixed(2)} zł + opłata przewozowa{' '}
          {config.deliveryCost.toFixed(2)} zł.
        </InformationsValue>
      </Reference>
      <InformationsValue>
        Do ceny mogą być doliczone koszta za dostawę poza rejonem, jak również rabaty dla stałych
        klientów lub dużych zamówień.
      </InformationsValue>
      <InformationsValue>
        Ostateczna cena zostanie przesłana drogą mailową wraz z potwierdzeniem zamówienia.
      </InformationsValue>
    </InformationsWraper>
  );
};

export default Informations;
