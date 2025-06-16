import styled from 'styled-components';
import { H2, H3, P, Section } from '../../styles/Global.styled';

export const LegalDocumentWraper = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 800px;
  margin-inline: auto;
`;

export const Title = styled(H2)``;

export const Subtitle = styled(H3)`
  margin-bottom: 15px;

  &:not(:first-of-type) {
    margin-top: 30px;
  }
`;

export const Paragraph = styled(P)`
  text-align: justify;
  text-indent: 25px;
`;

export const List = styled.ul`
  padding-left: 50px;
  text-align: left;
  font-size: 14px;
`;

export const Item = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 15px;
  }

  &::marker {
    content: '*   ';
  }
`;
