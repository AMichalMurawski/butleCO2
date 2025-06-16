import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import { HomePage, LegalDocumentPage, OrdersPage } from './pages';
import TemplatePage from './pages/TemplatePage/TemplatePage';
import { DocumentType } from './pages/LegalDocumentPage/LegalDocumentPage';

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
