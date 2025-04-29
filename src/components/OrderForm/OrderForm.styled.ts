import styled from 'styled-components';
import { P, Section } from '../../styles/Global.styled';

export const OrderSection = styled(Section)``;

export const InvoiceWraper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.text};
  color: ${({ theme }) => theme.color.structural};
`;

export const SubmitButtonWraper = styled.div`
  margin-left: auto;
  padding: 30px 60px;
`;

export const InformationsWraper = styled.div`
  padding: 30px 60px;
  text-align: left;
  font-style: italic;
`;

export const Informations = styled(P)``;
