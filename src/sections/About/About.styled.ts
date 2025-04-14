import styled from 'styled-components';
import { H2, P, Section } from '../../styles/Global.styled';

export const AboutSection = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const TextBlock = styled.div`
  flex-basis: calc((100% - 30px) / 2);
`

export const Title = styled(H2)``;

export const Description = styled(P)``;

export const AdvantagesList = styled.div`
  flex-basis: calc((100% - 30px) / 2);
  display: flex;
  flex-wrap: wrap;
  gap: 90px 30px;
`;

export const Advanatage = styled.div`
  flex-basis: calc((100% - 2 * 30px) / 3);
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AdvantageDescription = styled(P)``;

export const IconWraper = styled.div`
  width: 36px;
  height: 36px;
`;
