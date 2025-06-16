import React from 'react';
import { dataProtectionPolicy, faq, privacyPolicy, termsOfService } from '../../utils';
import { LegalDocument } from '../../sections';

export enum DocumentType {
  PrivacyPolicy = 'privacy policy',
  TermsOfService = 'terms of service',
  DataProtectionPolicy = 'data protection policy',
  FAQ = 'faq',
}

interface LegalDocumentPageProps {
  document: DocumentType;
}

const documentsList = {
  [DocumentType.PrivacyPolicy]: privacyPolicy,
  [DocumentType.TermsOfService]: termsOfService,
  [DocumentType.DataProtectionPolicy]: dataProtectionPolicy,
  [DocumentType.FAQ]: faq,
};

const LegalDocumentPage: React.FC<LegalDocumentPageProps> = ({ document }) => {
  const documentData = documentsList[document];

  if (!documentData) return null;

  return <LegalDocument documentData={documentData} />;
};

export default LegalDocumentPage;
