import React, { useEffect, useRef } from 'react';
import { H2, Section } from '../../styles';

const GoogleReviews: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const script = document.createElement('script');
            script.src = 'https://static.elfsight.com/platform/platform.js';
            script.async = true;
            document.body.appendChild(script);

            observerInstance.disconnect();
          }
        });
      },
      {
        root: null,     
        threshold: 0.1, 
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Section ref={containerRef}>
      <H2>Opinie naszych klientów</H2>
      <div
        className="elfsight-app-202b3f18-4694-46fa-b129-e2b07cead9ba"
        data-elfsight-app-lazy
      ></div>
    </Section>
  );
};

export default GoogleReviews;
