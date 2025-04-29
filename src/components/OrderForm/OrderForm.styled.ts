import styled from 'styled-components';
import { P } from '../../styles/Global.styled';

export const InvoiceWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: ${({ theme }) => theme.color.text};
  color: ${({ theme }) => theme.color.structural};
`;

export const SubmitButtonWraper = styled.div`
  margin-left: auto;
  padding-inline: 60px;
`;

export const InformationsWraper = styled.div`
  padding: 30px 60px;
  text-align: left;
  font-style: italic;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.structural};
`;

export const Informations = styled(P)``;
