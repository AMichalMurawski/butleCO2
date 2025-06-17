import styled from 'styled-components';
import { H2, P, Section } from '../../styles/Global.styled';

export const AboutSection = styled(Section)`
  display: flex;
  gap: 30px;
`;

interface ContentBlockProps {
  $gap?: string;
}

export const ContentBlock = styled.div<ContentBlockProps>`
  flex-basis: calc((100% - 30px) / 2);
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap || null};
`;

export const Title = styled(H2)`
  &:not(:first-child) {
    margin-top: 60px;
  }
`;

export const AdvantagesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 45px 30px;
  max-height: min-content;
`;

export const Advanatage = styled.div`
  flex-basis: calc((100% - 2 * 30px) / 3);
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ButtonsWraper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const ButtonWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
