import styled from "styled-components";
import { H3, P } from "../../../styles/Global.styled";

export const AddProductWraper = styled.div`
    height: 75vh;
    display: flex;
    flex-direction: column;
`

export const TransactionToggle = styled.div`
    padding: 15px;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: center;
`

export const ProductsList = styled.div`
    padding: 15px 5px;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    gap: 30px;
    justify-content: center;
    overflow-y: scroll;
`

export const ProductWraper = styled.div`
    position: relative;
    width: 120px;
    height: 180px;
    display: flex:
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    &:hover svg {
        fill: ${({theme}) => theme.color.structural}
    }
`

export const IconSvgWraper = styled.div`
    width: 100%;
    height: 100%;
    translate: -30px;
`

export const DescriptionWraper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Description = styled(P)`
    color: ${({theme}) => theme.color.text}
`
