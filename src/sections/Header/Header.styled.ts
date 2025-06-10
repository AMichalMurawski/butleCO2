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
  background-color: #1f2a38aa;
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
  width: max-content;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  color: inherit;
  text-decoration: none;

  &:hover p {
    text-shadow: 0 0 5px cyan;
    border-bottom: 1px solid cyan;
    cursor: pointer;
  }
`;

export const IconWraper = styled.div`
  width: 24px;
  height: 24px;
  translate: 0 -3px;
  border-radius: 1000px;
`;

export const LinkText = styled(P)``;
