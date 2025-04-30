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
