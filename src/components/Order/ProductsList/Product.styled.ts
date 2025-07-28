import styled from "styled-components";

export const ProductWraper = styled.li`
    position: relative;
    list-style-type: none;
    padding: 1rem;
    width: 12rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    border-radius: 1rem;
    background: linear-gradient(-5deg, ${({theme}) => theme.color.structuralTrans} -70%, ${({theme}) => theme.color.hightlightTrans} 50%, ${({theme}) => theme.color.hightlightTrans} 100%);

    ${({ theme }) => theme.media.m} {
        width: 20rem;   
        height: 10rem;
        flex-direction: row;
    }
`

export const ProductImage = styled.div`
    width: 6rem;
    
    & > svg {
        translate: -1rem;
    }
`

export const ProductDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 8rem;
    height: 100%;

    & > p:first-of-type {
        position: relative;
    }

    & > p:first-of-type::before {
        content: 'wymiana';
        position: absolute;
        top: 1.2rem;
        right: 0;
        font-size: 0.75rem;
        font-weight: 400;
    }

    & > p:last-of-type{
        background-color: ${({ theme }) => theme.color.remarkable};
        border-radius: 2rem;
        padding: 0.2rem;
    }
`
export const DeleteProduct = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 1rem;
    height: 1rem;
    border: none;
    border-radius: 1rem;
    background: none;
    cursor: pointer;
    ${({theme}) => theme.css.transition('scale')}

    &:hover {
        scale: 1.2;
    }
`
export const AddProduct = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 4rem;
    height: 4rem;
    padding: 1rem;
    rotate: 45deg;
    border: none;
    border-radius: 2rem;
    background: ${({theme}) => theme.color.accent};
    cursor: pointer;
    ${({ theme }) => theme.css.transition('scale')}

    &:hover {
        scale: 1.2;
    }
`