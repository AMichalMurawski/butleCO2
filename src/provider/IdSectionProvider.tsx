import React, { createContext, useContext, useEffect, useState } from 'react';

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

  const handleHashChange = (hash?: string) => {
    const currentHash = hash || window.location.hash.replace('#', '');
    setActiveIdSection(currentHash);
  };
    
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, '', `#${id}`);
    setActiveIdSection(id);
  };

  useEffect(() => {
    const onHashChange = () => handleHashChange();
    window.addEventListener('hashchange', onHashChange);

    handleHashChange();

    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <IdSectionContext.Provider value={{ activeIdSection, setActiveIdSection, scrollToSection }}>
      {children}
    </IdSectionContext.Provider>
  );
};
