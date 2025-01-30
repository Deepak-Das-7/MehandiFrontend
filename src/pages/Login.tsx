import React, { useState } from 'react';
import { loginUser } from '../api/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Reset error message
    setLoading(true);

    try {
      const { token, user } = await loginUser(email, password); // Call the login API
      localStorage.setItem('token', token); // Store token in local storage
      localStorage.setItem('user', JSON.stringify(user)); // Store user info

      // Redirect to the homepage/dashboard or any other action after successful login
      alert('Login successful!');
    } catch (err: any) {
      setError(err.message); // Display error message if login fails
    } finally {
      setLoading(false); // Set loading to false once the API request is complete
    }
  };

  return (
    <div className="container mt-5 mb-5 d-flex justify-content-center">
      <div className="card shadow-lg rounded-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="card-header text-center bg-primary text-white rounded-top py-3">
          Login
        </h2>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Error Message */}
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Login Button */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <button type="submit" className="btn btn-primary w-100 py-2" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>

            {/* Link to Register */}
            <div className="text-center">
              <small className="text-muted">
                Don't have an account? <a href="/register">Sign up</a>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
