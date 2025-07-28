import styled from "styled-components";

export const SummaryWraper = styled.ul`
    width: fit-content;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-left: auto;
    & p {
        width: 10rem;
        padding: 0.5rem;
        font-weight: 700;
        box-shadow: 0 0 1px 1px ${({ theme }) => theme.color.structural};
        text-align: left;
    }
`

export const SummaryItem = styled.li`
    list-style-type: none;
    display: flex;
    flex-direction: row;
`

