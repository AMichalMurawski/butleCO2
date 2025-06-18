import React from 'react';
import { InformationsValue, InformationsWraper, Reference } from './Informations.styled';

const Informations: React.FC = () => {

  return (
    <InformationsWraper>
      <Reference>
        <InformationsValue $reference={1}>
          Minimalna wartość zamówienia wynosi 100 zł + opłata przewozowa.
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
