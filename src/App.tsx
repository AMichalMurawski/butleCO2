import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import { DocumentType } from './pages/LegalDocumentPage/LegalDocumentPage';

const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'))
const LegalDocumentPage = React.lazy(() => import('./pages/LegalDocumentPage/LegalDocumentPage'))
const OrdersPage = React.lazy(() => import('./pages/OrdersPage/OrdersPage'))
const TemplatePage = React.lazy(() => import('./pages/TemplatePage/TemplatePage'))

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="template" element={<TemplatePage />} />
        <Route
          path="privacy-policy"
          element={<LegalDocumentPage document={DocumentType.PrivacyPolicy} />}
        />
        <Route
          path="terms-of-service"
          element={<LegalDocumentPage document={DocumentType.TermsOfService} />}
        />
        <Route
          path="data-protection-policy"
          element={<LegalDocumentPage document={DocumentType.DataProtectionPolicy} />}
        />
        <Route path="faq" element={<LegalDocumentPage document={DocumentType.FAQ} />} />
      </Route>
    </Routes>
  );
};

export default App;
