import styled from 'styled-components';
import { Section } from '../../styles';

export const LegalDocumentWraper = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin-inline: auto;
`;

interface DocumentSectionProps {
  $hideSection: boolean;
}

export const DocumentSection = styled.div<DocumentSectionProps>`
  padding: 2rem;
  cursor: ${({$hideSection}) => $hideSection ? 'pointer' : null};

  &:nth-child(even) {
    background-color: ${({theme}) => theme.color.structuralTrans};
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const List = styled.ul`
  padding-left: 2.75rem;
  text-align: left;
  font-size: 0.75rem;
`;

export const Item = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 0.75rem;
  }

  &::marker {
    content: '*   ';
  }
`;
