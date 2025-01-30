import React, { useState } from 'react';
import { registerUser } from '../api/auth'; // Adjust the import path accordingly

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await registerUser(name, email, password, phone);

      // Destructuring response if needed
      const { message, user, token } = response;

      setSuccess(message); // Use the success message from response
      localStorage.setItem('token', token); // Store token (or handle as needed)
      
      // You can log or process user data here if needed

    } catch (error: any) {
      setError(error.message || 'An error occurred during registration.');
    } finally {
      setLoading(false);
    }
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
            <div className="mb-3">
              <label htmlFor="phone" className="form-label fs-5">
                Phone (optional)
              </label>
              <input
                type="text"
                className="form-control py-2"
                id="phone"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary w-100 py-2 rounded-pill mt-3 shadow-sm"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>

          {error && <div className="mt-3 alert alert-danger">{error}</div>}
          {success && <div className="mt-3 alert alert-success">{success}</div>}

          <div className="text-center mt-3">
            <p className="mb-0">Already have an account? <a href="/login" className="text-decoration-none text-primary">Login</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
