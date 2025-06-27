import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function SignupPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [enteredCode, setEnteredCode] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (name && email && password.length >= 6) {
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedCode(code);
      alert(`Your verification code is: ${code}`);
      setStep('verify');
    } else {
      alert('Please fill all fields correctly.');
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (enteredCode === generatedCode) {
      const userData = { name, email, password };
      localStorage.setItem('user', JSON.stringify(userData));
      alert('Account created successfully!');
      navigate('/login');
    } else {
      alert('Invalid verification code.');
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
          src="/signup.png"
          alt="Signup Illustration"
          className="img-fluid p-4"
          style={{ maxHeight: '400px' }}
        />
      </motion.div>

      {/* Right Form */}
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
            style={{
              
              color: '#121020'
             
            }}
          >
            {step === 'form' ? 'Create Your Account' : 'Email Verification'}
          </h2>

          {step === 'form' ? (
            <form onSubmit={handleSignup}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control shadow-sm"
                  placeholder="John Doe"
                  required
                  style={{ borderRadius: '10px' }}
                />
              </div>
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
                  placeholder="At least 6 characters"
                  required
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: '#121020',
                  color: '#fff',
                  borderRadius: '10px',
                }}
              >
                Sign Up
              </motion.button>
              <p className="text-center text-muted mt-3">
                Already have an account?{' '}
                <Link to="/login" style={{ color: '#ff007a', textDecoration: 'none' }}>
                  Login
                </Link>
              </p>
            </form>
          ) : (
            <form onSubmit={handleVerify}>
              <p className="text-muted mb-3">
                A 6-digit code was sent to <strong>{email}</strong>
              </p>
              <div className="mb-4">
                <label className="form-label">Verification Code</label>
                <input
                  type="text"
                  value={enteredCode}
                  onChange={(e) => setEnteredCode(e.target.value)}
                  className="form-control shadow-sm"
                  placeholder="Enter code"
                  maxLength="6"
                  required
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: '#121020',
                  color: '#fff',
                  borderRadius: '10px',
                }}
              >
                Verify & Create Account
              </motion.button>
              <button
                type="button"
                onClick={() => setStep('form')}
                className="btn btn-link text-danger mt-3 w-100"
              >
                Edit Info
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
