import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { Modal, Button } from 'react-bootstrap';

const Login = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      // Perform login logic here
      // For demonstration, assuming login succeeds
      setShowSuccessModal(true);
      setSuccessMessage('Login successful!'); // Customize success message as needed
    } catch (error) {
      setShowErrorModal(true);
      setErrorMessage('Login failed. Please check your credentials.'); // Customize error message as needed
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>

      {/* Success Modal */}
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>{successMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSuccessModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Error Modal */}
      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login Failed</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
