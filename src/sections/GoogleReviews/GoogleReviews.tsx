import React, { useEffect } from 'react';
import { H2, Section } from '../../styles/Global.styled';

const GoogleReviews: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.onload = () => {};
    document.body.appendChild(script);
  });

  return (
    <Section>
      <H2>Opinie naszych klientów</H2>
      <div
        className="elfsight-app-202b3f18-4694-46fa-b129-e2b07cead9ba"
        data-elfsight-app-lazy
      ></div>
    </Section>
  );
};

export default GoogleReviews;
