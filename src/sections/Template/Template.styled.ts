import styled from 'styled-components';
import { Section } from '../../styles/Global.styled';

export const TemplateSection = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const Image = styled.img`
  width: 100%;
  height: 600px;
  object-fit: contain;
`;
