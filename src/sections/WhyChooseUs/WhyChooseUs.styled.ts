import styled from 'styled-components';

export const AdvantagesList = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

interface AdvantagesWraperProps {
  $direction: 'left' | 'right';
};

export const AdvantageWraper = styled.div<AdvantagesWraperProps>`
  position: relative;
  padding: 60px;
  width: 100%;
  align-self: ${({ $direction }) => ($direction === 'left' ? 'end' : 'start')};
  display: flex;
  flex-direction: ${({ $direction }) => ($direction === 'left' ? 'row' : 'row-reverse')};
  align-items: center;
  gap: 30px;

  &::after {
    content: '';
    position: absolute;
    width: 125%;
    height: 100%;
    top: 0;
    left: -12.5%;
    z-index: -1;
  }

  &:nth-child(odd)::after {
    background-color: ${({ $direction, theme }) =>
      $direction === 'left' ? theme.color.structural : 'null'};
    }
`;

export const ContentWraper = styled.div`
  flex: 1;
`