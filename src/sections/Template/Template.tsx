import React from 'react';
import {
  Image,
  TemplateSection,
} from './Template.styled';
import { H3 } from '../../styles/Global.styled';

const templates = [
  ['/images/order-template-01.webp', 'Template 01'],
  ['/images/order-template-02.webp', 'Template 02'],
  ['/images/order-template-03.webp', 'Template 03'],
  ['/images/order-template-04.webp', 'Template 04'],
  ['/images/order-template-05.webp', 'Template 05'],
  ['/images/order-template-06.webp', 'Template 06'],
  ['/images/order-template-07.webp', 'Template 07'],
];

const Templates: React.FC = () => {
  return (
    <>
      {templates.map(template => (
        <TemplateSection>
          <H3>{template[1]}</H3>
          <Image src={template[0]} />
        </TemplateSection>
      ))}
    </>
  );
};

export default Templates;
