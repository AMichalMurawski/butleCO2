import styled from "styled-components";
import { H3, P } from "../../styles/Global.styled";

export const AddProductWraper = styled.div`
    padding: 15px;
    height: 75vh;
    overflow-y: scroll;
`

export const Title = styled(H3)``

export const ProductsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
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
