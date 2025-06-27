import styled from 'styled-components';
import { Link } from '../../styles';

export const HeaderWraper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
  background-color: #1f2a38aa;
`;

export const HeaderBox = styled.div`
  height: 120px;
  width: 100%;
  position: relative;
  padding-inline: 25px;
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarWraper = styled.nav`
  padding: 15px 30px;
  width: fit-content;
  display: flex;
  flex-direction: row;
  gap: 30px;
  border-radius: 100px;
`;

export const LogoWraper = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 1000px;
  cursor: pointer;

  & > div{
    rotate: 0deg;

    transition: rotate cubic-bezier(0, -0.5, 1, -0.5) 500ms;
    &:hover {
      rotate: 360deg;
    }
  }
`;

export const ContactsWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

export const LinkWraper = styled(Link)`
  width: max-content;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
