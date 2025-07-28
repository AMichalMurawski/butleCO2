import styled from 'styled-components';
import { H2, P } from '../../../styles';

export const HeaderWraper = styled.div`
  display: flex;
  flex-direction: column;
  height: 10em;
  width: 100%;
  overflow: hidden;

  ${({ theme }) => theme.media.t} {
    flex-direction: row;
    height: 8.5rem;
  }
`;

export const HeaderTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  padding: 1rem 1rem 0;
  width: 120%;
  z-index: 0;

  ${({theme}) => theme.media.t} {
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0%;
      left: 0%;
      width: calc(100% + 2rem);
      height: 105%;
      background-color: ${({ theme }) => theme.color.hightlight};
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
  }
`;

export const Title = styled(H2)`
  position: relative;
  text-align: left;
  align-self: start;
  color: ${({ theme }) => theme.color.text};
  padding: 0;
  margin-bottom: 0;

  &::before {
    content: '';
    position: absolute;
    top: -0.5rem;
    left: -600px;
    width: max(200vw, 1200px);
    height: 600%;
    background-color: ${({ theme }) => theme.color.structural};
    z-index: -1;
  }

  ${({ theme }) => theme.media.t} {
    position: absolute;
    top: 2.75rem;
    left: 4rem;

    &::before {
      top: -75%;
      left: -100%;
    height: 300%;
    }
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
  flex-basis: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-self: end;
  gap: 0;
  padding-inline: 1rem;
  width: max-content;
  color: ${({ theme }) => theme.color.text};
  text-align: left;
  z-index: 1;
  translate: 0 0.4rem;

  ${({ theme }) => theme.media.t} {
    color: ${({ theme }) => theme.color.structural};
    height: 100%;
    padding-inline: 4rem;
    justify-content: center;
    translate: 0 0;
  
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -1rem;
      width: calc(100% + 2rem);
      height: 105%;
      background-color: ${({ theme }) => theme.color.hightlight};
      clip-path: polygon(5rem 0%, 100% 0%, 100% 100%, 0 100%);
      z-index: -1;
    }
  }
`;
