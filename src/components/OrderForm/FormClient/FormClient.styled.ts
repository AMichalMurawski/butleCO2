import styled from 'styled-components';
import { H3, P } from '../../../styles/Global.styled';

export const InvoiceClient = styled.div`
  padding: 60px;
  display: flex;
  flex-direction: row;
  gap: 60px;
  // justify-content: space-between;
`;

export const ClientWraper = styled.div`
  width: max(40%, 250px);
  margin-inline: auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 15px;
  // box-shadow: 0 0 1px 1px red;
`;

export const Subtitle = styled(H3)`
  margin-bottom: 15px;
`;

export const ClientData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ClientName = styled(P)``;

// only for visualization before create fields
export const ViualText = styled(P)`
  margin-left: 30px;
  font-style: italic;
  text-decoration: underline dotted;
`;
