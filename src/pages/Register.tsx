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
      setSuccess(response.message); // Use the success message from response
    } catch (error: any) {
      setError(error.message || 'An error occurred during registration.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" >
      <div
        className="card shadow-lg border-0 p-4 text-center"
        style={{
          width: '100%',
          borderRadius: '20px',
          maxWidth: '600px',
        }}
      >
        <h3 className="text-primary fw-bold mb-3">Create Account</h3>
        {error && <div className="alert alert-danger py-2">{error}</div>}
        {success && <div className="alert alert-success py-2">{success}</div>}
        <form onSubmit={handleSubmit}>
          {/* Full Name Field */}
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control border-light shadow-sm"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control border-light shadow-sm"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control border-light shadow-sm"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Phone Field */}
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control border-light shadow-sm"
              placeholder="Phone (optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn btn-primary w-100 py-2 rounded-pill fw-bold shadow-sm"
            disabled={loading}
            style={{
              transition: '0.3s ease-in-out',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              border: 'none',
            }}
          >
            {loading ? (
              <span className="spinner-border spinner-border-sm"></span>
            ) : (
              'Register'
            )}
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-3">
          <small className="text-black">
            Already have an account?{' '}
            <a href="/login" className="text-decoration-none text-dark fw-bold">
              Login
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Register;
