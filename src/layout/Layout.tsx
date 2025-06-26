import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../sections';
import { LayoutWrapper, Main } from './Layout.styled';
import { Toast } from '../components';

const Layout = () => (
  <LayoutWrapper>
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
    <Toast />
  </LayoutWrapper>
);

export default Layout;