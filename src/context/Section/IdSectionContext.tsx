import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface IdSectionContextType {
  activeIdSection: string | null;
  setActiveIdSection: (id: string) => void;
  scrollToSection: (id: string) => void;
}

const IdSectionContext = createContext<IdSectionContextType>({
  activeIdSection: null,
  setActiveIdSection: () => {},
  scrollToSection: () => {},
});

export const useIdSection = () => useContext(IdSectionContext);

export const IdSectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeIdSection, setActiveIdSection] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    navigate(`${id}`);
    setActiveIdSection(id);
  };

  useEffect(() => {
    const currentUrl = location.pathname + location.hash;
    const onReload = () => setActiveIdSection(currentUrl);

    window.addEventListener('load', onReload);

    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    setActiveIdSection(currentUrl)

    return () => window.removeEventListener('load', onReload);
  }, [location]);

  return (
    <IdSectionContext.Provider value={{ activeIdSection, setActiveIdSection, scrollToSection }}>
      {children}
    </IdSectionContext.Provider>
  );
};
