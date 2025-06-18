import React, { useState } from 'react';
import { DocumentProps, DocumentTextType } from '../../utils/documentProps';
import {
  Content,
  DocumentSection,
  Item,
  LegalDocumentWraper,
  List,
} from './LegalDocument.styled';
import { H2, H3, P } from '../../styles/Global.styled';

interface LegalDocumentProps {
  documentData: DocumentProps;
  hideSection?: boolean;
}

const LegalDocument: React.FC<LegalDocumentProps> = ({ documentData }) => {
  const [visibleSections, setVisibleSections] = useState<Record<number, boolean>>({});

  const toggleSection = (index: number) => {
    setVisibleSections(prev => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const handleSection = (section: any, i1: number) => {
    return section.map((data:any, i2: number) => {
      switch (data[0]) {
        case DocumentTextType.Paragraph:
          return <P $textAlign='justify' $textIndent='25px' key={`s${i1}-c${i2}`}>{data[1]}</P>
        case DocumentTextType.List:
          return <List key={`s${i1}-c${i2}`}>
            {data[1].map((li: string, i3: number) => (
              <Item key={`s${i1}-c${i2}-i${i3}`}>{li}</Item>
            ))}
          </List>
        default:
          return null;
      }
    })
  }

  const handleContent = (contents: any, hideSection: boolean) => {
    return contents.map((content: any, i1: number) => {
      const isVisible = hideSection ? !!visibleSections[i1] : true;

      return <DocumentSection key={`s${i1}`} $hideSection={hideSection} onClick={hideSection ? () => toggleSection(i1) : undefined}>
        {content.subtitle && <H3>{content.subtitle}</H3>}
        {isVisible ? <Content>{handleSection(content.section, i1)}</Content> : <Content>...</Content>}
      </DocumentSection>
    })
  } 

  return (
    <LegalDocumentWraper>
      <H2>{documentData.title}</H2>
      {handleContent(documentData.contents, documentData.hideSection)}
    </LegalDocumentWraper>
  );
};

export default LegalDocument;
