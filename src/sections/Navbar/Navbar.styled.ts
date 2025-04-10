import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top:0;
  width: 100%;
  display: flex;
  justify-content: center
`;

export const HeaderBox = styled.div`
  position: relative;
  padding: 30px;
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const NavbarWraper = styled.nav`
  padding: 15px 30px;
  width: fit-content;
  display: flex;
  flex-direction: row;
  gap: 30px;
  background-color: #1f2a3866;
  border-radius: 100px;
`;

export const LogoWraper = styled.div`
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  background-color: blue;
`;
