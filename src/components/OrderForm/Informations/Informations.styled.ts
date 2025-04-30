import styled from 'styled-components';
import { P } from '../../../styles/Global.styled';

export const InformationsWraper = styled.div`
  padding: 30px 60px;
  text-align: left;
  font-style: italic;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.structural};
`;

export const Informations = styled(P)`
  &:not(:first-of-type) {
    margin-top: 5px;
  }
`;
