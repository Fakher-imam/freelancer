import React, { useState, useEffect } from 'react';

export default function Settings() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUserData(storedUser);
    }
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem('user', JSON.stringify(userData));
    alert('✅ Profile updated successfully!');
  };

  return (
    <div className="container py-5 bg-light min-vh-100">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center text-primary mb-4 fw-bold">Settings</h3>

              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <button
                onClick={handleSave}
                className="btn btn-primary w-100"
              >
                💾 Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
