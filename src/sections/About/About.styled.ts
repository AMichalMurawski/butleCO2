import styled from 'styled-components';
import { H2, Section } from '../../styles';

export const AboutSection = styled(Section)`
  display: flex;
  gap: 2rem;
`;

interface ContentBlockProps {
  $gap?: string;
}

export const ContentBlock = styled.div<ContentBlockProps>`
  flex-basis: calc((100% - 2rem) / 2);
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap || null};
`;

export const Title = styled(H2)`
  &:not(:first-child) {
    margin-top: 3.5rem;
  }
`;

export const AdvantagesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
  max-height: min-content;
`;

export const Advantage = styled.div`
  position: relative;
  flex-basis: calc((100% - 2 * 2rem) / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  & div {
    ${({theme}) => theme.css.transition('background-color')}
  }
  & svg {
    ${({theme}) => theme.css.transition('fill')}
  }
  & p {
    ${({theme}) => theme.css.transition('color')}
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
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1000px;

  & svg{
    position: absolute;
    top: 0:
    left: 0;
    translate: -50% 0.75rem;
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
  gap: 0.75rem;
`;
