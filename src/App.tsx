import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import { DocumentType } from './pages/LegalDocumentPage/LegalDocumentPage';

const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const LegalDocumentPage = React.lazy(() => import('./pages/LegalDocumentPage/LegalDocumentPage'));
const OrdersPage = React.lazy(() => import('./pages/OrdersPage/OrdersPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="zamowienia" element={<OrdersPage />} />
        <Route
          path="polityka-prywatnosci"
          element={<LegalDocumentPage document={DocumentType.PrivacyPolicy} />}
        />
        <Route
          path="regulamin"
          element={<LegalDocumentPage document={DocumentType.TermsOfService} />}
        />
        <Route
          path="zasady-ochrony-danych-osobowych"
          element={<LegalDocumentPage document={DocumentType.DataProtectionPolicy} />}
        />
        <Route path="faq" element={<LegalDocumentPage document={DocumentType.FAQ} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
