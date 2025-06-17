import styled from 'styled-components';
import { P } from '../../styles/Global.styled';

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
  width: 60px;
  height: 60px;
  background-color: transparent;
  border: none;
  border-radius: 1000px;
  cursor: pointer;
`;

export const ContactsWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

export const Link = styled.a`
  position: relative;
  width: max-content;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  color: inherit;
  text-decoration: none;
  transition: text-shadow 300ms ease;

  &:hover p {
    text-shadow: 0 0 5px cyan;
    cursor: pointer;

    &::before {
      width: 100%;
    }
  }
`;

export const IconWraper = styled.div`
  width: 16px;
  height: 16px;
  translate: 0 -2px;
  border-radius: 1000px;
`;

export const LinkText = styled(P)`
  position: relative;

  &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      width: 0;
      height: 100%;
      border-bottom: 1px solid cyan;
      transform: translate(-50%, 0);
      transition: width 300ms ease;
    }
`;
