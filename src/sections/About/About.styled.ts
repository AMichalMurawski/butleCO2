import styled from 'styled-components';
import { H2, P, Section } from '../../styles';

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

export const Advantage = styled.div`
  position: relative;
  flex-basis: calc((100% - 2 * 30px) / 3);
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  cursor: pointer;

  & div {
    transition: background-color 300ms ease;
  }
  & svg {
    transition: fill 300ms ease;
  }
  & p {
    transition: color 300ms ease;
  }

  &:hover div {
    background-color: ${({theme}) => theme.color.hightlight};
  }

  &:hover svg {
    fill: ${({theme}) => theme.color.main};
  }

  &:hover p {
    color: ${({theme}) => theme.color.hightlight};
  }
`;

export const IconWraper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 1000px;

  & svg{
    position: absolute;
    top: 0:
    left: 0;
    translate: -50% 11px;
  }
`

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
