import React from "react";
import { SummaryItem, SummaryWraper } from "./ProductsSummary.styled";
import { useOrder } from "../../../context/Order/OrderContext";
import { P } from "../../../styles";

const ProductsSummary: React.FC = () => {
    const { order } = useOrder();
    
    return (
        <SummaryWraper>
            <SummaryItem>
                <P>Cena butli:</P>
                <P>{order.summary.productsCost.toFixed(2)} PLN</P>
            </SummaryItem>
            <SummaryItem>
                <P>Koszt dostawy:</P>
                <P>{order.summary.deliveryCost.toFixed(2)} PLN</P>
            </SummaryItem>
            <SummaryItem>
                <P>Do zapłaty:</P>
                <P>{order.summary.summaryCost.toFixed(2)} PLN *</P>
            </SummaryItem>
        </SummaryWraper>
    )
};

export default ProductsSummary;