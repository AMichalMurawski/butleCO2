import styled from "styled-components";

export const ProductsListWraper = styled.div`
    width: 100%;
    padding-inline: 1rem;

    ${({ theme }) => theme.media.t} {
        padding-inline: 3rem;
    }
`

export const ProductsListBox = styled.ul`
    width: 10rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-inline: auto;

    @media screen and (min-width: 26rem) {
        width: 26rem;
    }

    @media screen and (min-width: 37rem) {
        width: 42rem;
    }
`