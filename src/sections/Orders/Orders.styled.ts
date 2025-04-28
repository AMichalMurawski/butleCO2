import styled from 'styled-components';
import { Section } from '../../styles/Global.styled';

export const OrderSection = styled(Section)``;

export const InvoiceWraper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.structural};
  color: ${({ theme }) => theme.color.text};
`;
