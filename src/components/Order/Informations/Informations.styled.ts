import styled from 'styled-components';
import { P } from '../../../styles/Global.styled';

export const InformationsWraper = styled.div`
  padding: 30px 60px;
  text-align: left;
  font-style: italic;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.structural};
`;

interface InformationsProps {
  $reference?: number;
}

export const InformationsValue = styled(P) <InformationsProps>`
  position: relative;
  padding-left: ${({$reference}) => $reference ? `${$reference * 6 + 5}px` : 0 };
  &:not(:first-of-type) {
    margin-top: 5px;
  }

   &::before {
      ${({$reference}) => $reference ? `content: "${"*".repeat($reference)}";` : ""}
      position: absolute;
      left: 0;
      top: 0;
    }
`;

export const Reference = styled.div`
  margin-bottom: 30px;
`