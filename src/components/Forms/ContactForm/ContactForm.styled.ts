import styled from 'styled-components';

export const FormWraper = styled.div`
  margin-inline: auto;
  width: min(max(75%, 500px), 100%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-items: start;
  align-items: start;
`;

interface ButtonWraperProps {
  $disabled: boolean;
}

export const ButtonWraper = styled.div<ButtonWraperProps>`
  align-self: end;
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : '')};
`;
