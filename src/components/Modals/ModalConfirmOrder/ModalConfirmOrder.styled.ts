import styled from 'styled-components';
import { H3, H4, P } from '../../../styles';

export const Title = styled(H3)`
  margin: 0;
`;

export const InvoiceWraper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
`;

export const SegmentWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
`;

export const TextLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem;
  border-bottom: 1px dotted black;
`;

export const Subtitle = styled(H4)`
  margin: 0;
`;
