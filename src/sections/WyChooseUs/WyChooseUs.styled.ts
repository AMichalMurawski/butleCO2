import styled from 'styled-components';
import { H2, H3, P, Section } from '../../styles/Global.styled';

export const WyChooseUsSection = styled(Section)``;

export const Title = styled(H2)``;

export const AdvantagesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

interface AdvantagesWraperProps {
  direction: 'left' | 'right';
}

export const AdvantageWraper = styled.div<AdvantagesWraperProps>`
  position: relative;
  padding: 60px;
  width: 80%;
  align-self: ${({ direction }) => (direction === 'left' ? 'end' : 'start')};
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'left' ? 'row' : 'row-reverse')};
  align-items: center;
  gap: 30px;

  &::after {
    content: '';
    position: absolute;
    width: calc((100 / 80) * (100 / 80) * 100%);
    height: 100%;
    top: 0;
    ${({ direction }) => (direction === 'left' ? 'right: calc((79 / 100) * (-20%));' : 'left: 0;')};
    background-color: ${({ direction, theme }) =>
      direction === 'left' ? theme.color.structural : 'null'};
    z-index: -1;
  }
`;

export const IconWraper = styled.div`
  box-sizing: border-box;
  width: 90px;
  height: 90px;
`;

export const AdvantageContent = styled.div``;

export const Subtitle = styled(H3)``;

export const Description = styled(P)``;
