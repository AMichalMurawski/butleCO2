import styled from 'styled-components';

export const HeaderWraper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
  background-color: ${({ theme }) => theme.color.structuralTrans};
`;

export const HeaderBox = styled.div`
  height: 7rem;
  width: 100%;
  position: relative;
  padding-inline: 25px;
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWraper = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 1000px;
  cursor: pointer;

  & > div {
    rotate: 0deg;

    transition: rotate cubic-bezier(0, -0.5, 1, -0.5) 500ms;
    &:hover {
      rotate: 360deg;
    }
  }
`;

export const NavbarConteiner = styled.div`
  display: none;

  ${({ theme }) => theme.media.d} {
    display: block;
  }
`

export const HamburgerWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 2.5rem;
  height: 2rem;
  cursor: pointer;
  ${({ theme }) => theme.css.transition('scale')}
  
  &:hover{
    scale: 1.2;
  }

  ${({ theme }) => theme.media.d} {
    display: none;
  }
` 

export const HamburgerLine = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.text};
`