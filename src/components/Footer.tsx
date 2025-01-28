import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-light py-3">
      <div className="container">
        <p className="text-center mb-0">© 2025 MehendiDesigns. All rights reserved.</p>
        <p className="text-center">
          Follow us on{' '}
          <a href="https://www.google.com/" className="text-light">
            Instagram
          </a>
          and{' '}
          <a href="https://www.google.com/" className="text-light">
            Facebook
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;