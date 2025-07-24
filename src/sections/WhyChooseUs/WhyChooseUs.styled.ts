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
  padding: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

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

  ${({ theme }) => theme.media.t} {
    align-self: ${({ $direction }) => ($direction === 'left' ? 'end' : 'start')};
    flex-direction: ${({ $direction }) => ($direction === 'left' ? 'row' : 'row-reverse')};
    padding: 3.5rem 1rem;
  }

  ${({ theme }) => theme.media.d} {
    padding: 3.5rem;
  }
`;

export const ContentWraper = styled.div`
  flex: 1;
  max-width: 24rem;
`