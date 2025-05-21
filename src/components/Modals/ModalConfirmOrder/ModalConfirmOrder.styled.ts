import styled from "styled-components";
import { H3, H4, P } from "../../../styles/Global.styled";

export const ConfirmOrderWraper = styled.div`
`

export const TitleWraper = styled.div`
    width: 100%;
    padding: 15px;
    background-color: ${({ theme }) => theme.color.main};
    color: ${({theme}) => theme.color.text};
`

export const Title = styled(H3)`
    margin: 0;
`

export const InvoiceWraper = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const SegmentWraper = styled.div`
    text-align: left;
`

export const TextLine = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    border-bottom: 1px dotted black;
`

export const TextTitle = styled(P)`
    flex-basis: 200px;
    font-style: italic;
`

export const TextValue = styled(P)`
    flex-basis: min(fit-content, calc(100% - 200px - 15px));
    font-weight: 700;
`

export const Subtitle = styled(H4)`
    margin: 0;
`