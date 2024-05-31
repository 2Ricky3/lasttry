// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import PropertyDetails from './Pages/PropertyDetails';
import Basket from './Pages/Basket';
import Navbar from './components/Navbar';
import { BasketProvider } from './context/BasketContext';

const App = () => {
  return (
    <BasketProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </BasketProvider>
  );
};

export default App;
