import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import { HomePage, OrdersPage } from './pages';


const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="zamowienia" element={<OrdersPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
};

export default App;
