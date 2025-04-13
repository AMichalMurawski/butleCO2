import styled from 'styled-components';
import { H2, P, Section } from '../../styles/Global.styled';

export const AboutSection = styled(Section)``;

export const Title = styled(H2)``;

export const Description = styled(P)``;

export const AdvantagesList = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Advanatage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 200px;
`;

export const AdvantageDescription = styled(P)``;

export const IconWraper = styled.div`
  width: 50px;
  height: 50px;
`;
