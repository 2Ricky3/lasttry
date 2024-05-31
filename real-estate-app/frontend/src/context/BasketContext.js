import React, { createContext, useContext, useState } from 'react';

// Create a new context instance
const BasketContext = createContext();

// Custom hook to use the basket context
export const useBasket = () => useContext(BasketContext);

// Provider component for the basket context
export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  // Function to add an item to the basket
  const addToBasket = (item) => {
    setBasket([...basket, item]);
  };

  // Function to remove an item from the basket
  const removeFromBasket = (itemId) => {
    const updatedBasket = basket.filter((item) => item.id !== itemId);
    setBasket(updatedBasket);
  };

  // Value object to be provided by the context
  const value = {
    basket,
    addToBasket,
    removeFromBasket,
  };

  return (
    <BasketContext.Provider value={value}>
      {children}
    </BasketContext.Provider>
  );
};
