// frontend/src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useBasket } from '../context/BasketContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { basket } = useBasket();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Real Estate</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {userInfo ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/basket">Basket ({basket.length})</Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={logoutHandler}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
