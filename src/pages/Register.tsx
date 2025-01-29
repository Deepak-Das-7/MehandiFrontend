import React, { useState } from 'react';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Registration successful!');
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="card mx-auto shadow-lg border-0" style={{ maxWidth: '450px' }}>
        <h2 className="card-header bg-primary text-white text-center py-3">
          <strong>Register</strong>
        </h2>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fs-5">
                Full Name
              </label>
              <input
                type="text"
                className="form-control py-2"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fs-5">
                Email address
              </label>
              <input
                type="email"
                className="form-control py-2"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fs-5">
                Password
              </label>
              <input
                type="password"
                className="form-control py-2"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2 rounded-pill mt-3 shadow-sm">
              Register
            </button>
          </form>
          <div className="text-center mt-3">
            <p className="mb-0">Already have an account? <a href="/login" className="text-decoration-none text-primary">Login</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
