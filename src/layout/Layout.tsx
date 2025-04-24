import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../sections';
import { LayoutWrapper, Main } from './Layout.styled';

const Layout = () => (
  <LayoutWrapper>
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </LayoutWrapper>
);

export default Layout;