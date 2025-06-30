import styled from 'styled-components';
import { Section } from '../../styles';

export const TemplateSection = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 600px;
  object-fit: contain;
`;
