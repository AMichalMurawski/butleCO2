import styled from "styled-components";

export const ToastWraper = styled.div`
    position: fixed;
    top: 4rem;
    right: 4rem;
    width: fit-context;
    height: fit-context;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    z-index: 999;
`

interface ToastMessageProps {
    $color: string;
}

export const ToastMessage = styled.div<ToastMessageProps>`
    width: 20rem;
    padding: 0.3rem 1rem;
    height: fit-context;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    color: black;
    background-color: ${({ theme }) => theme.color.text};
    border: 0.3rem solid ${({ $color }) => $color};
    border-radius: 2rem;
`

