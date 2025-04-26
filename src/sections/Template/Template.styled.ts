import styled from 'styled-components';
import { H3, P, Section } from '../../styles/Global.styled';

export const TemplateSection = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const FormTemplate = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 90px;
`;

export const FormWraper = styled.div``;

export const TemplateWraper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(H3)``;

export const Description = styled(P)`
  text-align: left;
`;

export const Image = styled.img`
  width: 100%;
  height: 600px;
  object-fit: contain;
`;
