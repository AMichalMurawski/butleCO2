import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../sections';
import { LayoutWrapper, Main } from './Layout.styled';
import { Toast } from '../components';
import { GlobalStyle } from '../styles';

const Layout = () => (
  <LayoutWrapper>
    <GlobalStyle />
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
    <Toast />
  </LayoutWrapper>
);

export default Layout;