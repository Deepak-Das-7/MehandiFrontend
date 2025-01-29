import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { MehendiDesign } from '../utils/types';
import { fetchAllDesigns } from '../api/mehendiDesigns'; // API call function to fetch designs

interface DesignContextType {
  designs: MehendiDesign[];
  loading: boolean;
  error: string | null;
  fetchDesigns: () => void;
}

const DesignContext = createContext<DesignContextType | undefined>(undefined);

export const DesignProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [designs, setDesigns] = useState<MehendiDesign[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDesigns = async () => {
    setLoading(true);
    try {
      const data = await fetchAllDesigns();
      setDesigns(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDesigns();
  }, []);

  return (
    <DesignContext.Provider value={{ designs, loading, error, fetchDesigns }}>
      {children}
    </DesignContext.Provider>
  );
};

// Custom hook to use the DesignContext
export const useDesignContext = () => {
  const context = useContext(DesignContext);
  if (!context) {
    throw new Error('useDesignContext must be used within a DesignProvider');
  }
  return context;
};
