import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import { HomePage, OrdersPage } from './pages';


const App = () => {
  return <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="orders" element={<OrdersPage />} />
      </Route>
    </Routes>
};

export default App;
