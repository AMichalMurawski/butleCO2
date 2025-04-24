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

  const handleHashChange = (hash?: string) => {
    const currentHash = hash || window.location.hash.replace('#', '');
    setActiveIdSection(currentHash);
  };
    
  const scrollToSection = (id: string) => {
    navigate(`/${id}`)
    setActiveIdSection(id);
  };

  useEffect(() => {
    const onHashChange = () => handleHashChange();
    window.addEventListener('hashchange', onHashChange);

    handleHashChange(window.location.hash);

    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <IdSectionContext.Provider value={{ activeIdSection, setActiveIdSection, scrollToSection }}>
      {children}
    </IdSectionContext.Provider>
  );
};
