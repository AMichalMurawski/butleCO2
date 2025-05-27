import styled from 'styled-components';
import { Field } from 'formik';

export const InputStyled = styled(Field)``;

export const FormWraper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-items: start;
  align-items: start;
`;

interface ButtonWraperProps {
  $disabled?: boolean;
}

export const ButtonWraper = styled.div<ButtonWraperProps>`
  align-self: end;
  pointer-events: ${({$disabled}) => $disabled ? 'none' : ''};
`