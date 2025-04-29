import styled from 'styled-components';
import { H3, P } from '../../../styles/Global.styled';

interface FormWraperProps {
  $autoMargin: 'left' | 'right';
}

export const FormWraper = styled.div<FormWraperProps>`
  padding: 30px 60px;
  ${({ $autoMargin }) => ($autoMargin === 'right' ? 'margin-right' : 'margin-left')}: auto;
  min-width: 50%;
  max-width: 75%;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Subtitle = styled(H3)`
  margin-bottom: 15px;
`;

export const DataWraper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

interface DataNameProps {
  $width: string;
}

export const DataName = styled(P)<DataNameProps>`
  color: ${({ theme }) => theme.color.structural};
  width: ${({ $width }) => $width};
  min-width: ${({ $width }) => $width};
`;

// only for visualization before create fields
export const DataValue = styled(P)`
  font-style: italic;
  text-decoration: underline dotted;
  color: ${({ theme }) => theme.color.main};
`;
