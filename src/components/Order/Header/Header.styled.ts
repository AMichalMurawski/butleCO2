import styled from 'styled-components';
import { H2, P } from '../../../styles';

export const HeaderWraper = styled.div`
  display: flex;
  height: 8.5rem;
  width: 100%;
  overflow: hidden;
`;

export const HeaderTitle = styled.div`
  position: relative;
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  padding: 1rem 4rem;
  width: 100%;
  z-index: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0%;
    left: 0%;
    width: calc(100% + 2rem);
    height: 100%;
    background-color: ${({ theme }) => theme.color.remarkable};
  }

  &::before {
    clip-path: polygon(
      calc(100% - 5rem) 0%,
      100% 0,
      calc(100% - 5rem) 100%,
      calc(100% - 10rem) 100%
    );
  }

  &::after {
    clip-path: polygon(0% 100%, 0 70%, calc(100% - 5rem) 70%, calc(100% - 5rem) 100%);
  }
`;

export const Title = styled(H2)`
  position: absolute;
  top: 2.75rem;
  left: 4rem;
  text-align: left;
  color: ${({ theme }) => theme.color.text};

  &::before {
    content: '';
    position: absolute;
    top: -75%;
    left: -100%;
    width: 1200px;
    height: 300%;
    background-color: ${({ theme }) => theme.color.structural};
    z-index: -1;
  }
`;

export const OrderNumber = styled(P)`
  position: absolute;
  left: 6.5rem;
  bottom: 0.5rem;
  translate: -50%;
  color: ${({ theme }) => theme.color.structural};
  z-index: 1;
`;

export const InvoiceAddress = styled.div`
  position: relative;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.color.structural};
  text-align: left;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -1rem;
    width: calc(100% + 2rem);
    height: 100%;
    background-color: ${({ theme }) => theme.color.remarkable};
    clip-path: polygon(5rem 0%, 100% 0%, 100% 100%, 0 100%);
    z-index: -1;
  }
`;
