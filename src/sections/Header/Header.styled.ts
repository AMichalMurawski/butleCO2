import styled from 'styled-components';

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
  background-color: #1f2a38aa;
  border-radius: 100px;
`;

export const LogoWraper = styled.div`
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
`;
