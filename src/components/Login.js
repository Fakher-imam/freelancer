import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const pendingTemplate = localStorage.getItem('pendingTemplate');

    if (
      storedUser &&
      email === storedUser.email &&
      password === storedUser.password
    ) {
      localStorage.setItem('user', JSON.stringify(storedUser));
      if (pendingTemplate) {
        localStorage.removeItem('pendingTemplate');
        navigate(`/editor/${pendingTemplate}`);
      } else {
        navigate('/dashboard');
      }
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="d-flex min-vh-100">
      {/* Left Illustration */}
      <motion.div
        className="d-none d-md-flex align-items-center justify-content-center flex-fill"
        style={{ backgroundColor: '#1c1c23' }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/login.png"
          alt="Login Illustration"
          className="img-fluid p-4"
          style={{ maxHeight: '400px' }}
        />
      </motion.div>

      {/* Right Login Form */}
      <div className="flex-fill d-flex align-items-center justify-content-center bg-white">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="p-4 w-100"
          style={{ maxWidth: '420px' }}
        >
          <h2
            className="text-center mb-4 fw-bold"
            style={{ color: '#121020' }}
          >
            Login to Your Portfolio
          </h2>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control shadow-sm"
                placeholder="you@example.com"
                required
                style={{ borderRadius: '10px' }}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control shadow-sm"
                placeholder="******"
                required
                style={{ borderRadius: '10px' }}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn w-100"
              style={{
                backgroundColor: '#121020',
                color: '#fff',
                borderRadius: '10px',
              }}
            >
              Login
            </motion.button>

            <p className="text-center text-muted mt-3">
              Don’t have an account?{' '}
              <Link to="/signup" style={{ color: '#ff007a', textDecoration: 'none' }}>
                Sign Up
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
