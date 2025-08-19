import { createContext, useContext, useEffect, useState } from 'react';
import type { Config } from './types';

const initialConfig: Config = {
  name: '',
  street: '',
  nr: '',
  postalCode: '',
  city: '',
  NIP: '',
  phone: [['', '']],
  email: '',
  openHours: [''],
  facebookURL: '',
  instagramURL: '',
  minCost: 0,
  deliveryCost: 0,
};
const ConfigContext = createContext<Config>(initialConfig);

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<Config>(initialConfig);

  useEffect(() => {
    fetch('/config.json')
      .then(res => res.json())
      .then((data: Config) => setConfig(data))
      .catch(err => console.error('Błąd wczytywania config.json', err));
  }, []);

  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
}

export function useConfig() {
  return useContext(ConfigContext);
}
