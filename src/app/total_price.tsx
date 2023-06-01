import {createContext, useState, useContext, ReactNode} from 'react';

interface TotalPriceContextData {
  totalPrice: number;
  addToTotal: (value: number) => void;
  resetTotal: () => void;
}

const TotalPriceContext = createContext<TotalPriceContextData | undefined>(undefined);

interface TotalPriceProviderProps {
  children: ReactNode;
}

export function TotalPriceProvider({children}: TotalPriceProviderProps) {
  const [totalPrice, setTotalPrice] = useState(0);

  const addToTotal = (value: number) => {
    setTotalPrice((prevTotal) => prevTotal + value);
  };

  const resetTotal = () => {
    setTotalPrice(0);
  };

  return (
      <TotalPriceContext.Provider value={{totalPrice, addToTotal, resetTotal}}>
        {children}
      </TotalPriceContext.Provider>
  );
}

export const useTotal = () => {
  const context = useContext(TotalPriceContext);
  if (context === undefined) {
    throw new Error('useTotal must be used within a TotalPriceProvider')
  }
  return context;
}
