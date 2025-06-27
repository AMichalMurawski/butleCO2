import styled from "styled-components";
import { ToastType } from "../../context/Toast/ToastContext";

export const ToastWraper = styled.div`
    position: fixed;
    top: 4rem;
    right: 4rem;
    width: fit-context;
    height: fit-context;
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 999;
`

interface ToastMessageProps {
    $color: string;
}

export const ToastMessage = styled.div<ToastMessageProps>`
    width: 360px;
    padding: 5px 15px;
    height: fit-context;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    color: black;
    background-color: ${({ theme }) => theme.color.text};
    border: 5px solid ${({ $color }) => $color};
    border-radius: 3000px;
`

