import styled from 'styled-components';

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

interface ClientInvoiceWraperProps {
  $isInvoice: boolean;
}

export const ClientInvoiceWraper = styled.div<ClientInvoiceWraperProps>`
  max-height: ${({ $isInvoice }) => $isInvoice ? '500px' : '0'};
  opacity: ${({ $isInvoice }) => $isInvoice ? '1' : '0'};
  overflow: hidden;
  transition: opacity 300ms ease-in-out, max-height 300ms ease-in-out;
`