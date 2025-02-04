import React, { useState } from 'react';
import { loginUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { token, user } = await loginUser(email, password);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      // Refresh the page after successful login
      navigate('/');
      window.location.reload();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="card shadow-lg border-0 p-4 text-center"
        style={{
          maxWidth: '600px',
          width: '100%',
          borderRadius: '20px',
        }}
      >
        <h3 className="text-primary fw-bold mb-3">Welcome Back</h3>
        {error && <div className="alert alert-danger py-2">{error}</div>}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control border-light shadow-sm"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
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
              'Login'
            )}
          </button>
        </form>

        {/* Signup Link */}
        <div className="text-center mt-3">
          <small className="text-black">
            Don't have an account?{' '}
            <a href="/register" className="text-decoration-none text-dark fw-bold">
              Sign up
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
