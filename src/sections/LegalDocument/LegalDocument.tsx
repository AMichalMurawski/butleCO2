import React from 'react';
import { DocumentProps, DocumentTextType } from '../../utils/documentProps';
import {
  Item,
  LegalDocumentWraper,
  List,
  Paragraph,
  Subtitle,
  Title,
} from './LegalDocument.styled';

interface LegalDocumentProps {
  documentData: DocumentProps[];
}

const LegalDocument: React.FC<LegalDocumentProps> = ({ documentData }) => {
  return (
    <LegalDocumentWraper>
      {documentData.map(data => {
        switch (data[0]) {
          case DocumentTextType.Title:
            return <Title>{data[1]}</Title>;
          case DocumentTextType.Subtitle:
            return <Subtitle>{data[1]}</Subtitle>;
          case DocumentTextType.Paragraph:
            return <Paragraph>{data[1]}</Paragraph>;
          case DocumentTextType.List:
            return (
              <List>
                {data[1].map(d => (
                  <Item>{d}</Item>
                ))}
              </List>
            );
          default:
            return <></>;
        }
      })}
    </LegalDocumentWraper>
  );
};

export default LegalDocument;
