// components/Toast.tsx
import React from 'react';
import { ToastProps, useToast } from '../../context/Toast/ToastContext';
import { ToastMessage, ToastWraper } from './Toast.styled';
import { P } from '../../styles/Global.styled';
import IconSvg from '../Icons/IconSvg/IconSvg';
import { useTheme } from 'styled-components';

const Toast: React.FC = () => {
    const { toasts } = useToast();
    const theme = useTheme();

    return (
        <ToastWraper className="toast-container">
            {toasts.map(({ id, message, type }: ToastProps) => {
                let color = ''
                let icon = 'bubbles'

                switch (type) {
                    case 'error':
                        color = theme.color.danger;
                        icon = 'cross';
                        break;
                    case 'success':
                        color = theme.color.accent;
                        icon = 'checkmark';
                        break;
                    default:
                        color = theme.color.remarkable;
                        icon = 'bubbles'
                }

                return (
                    <ToastMessage key={id} $color={color}>
                        <IconSvg name={icon} fill={color} size='20px' />
                        <P $textAlign='left'>{message}</P>
                    </ToastMessage>
                );
            })}
        </ToastWraper>
    );
};

export default Toast;
