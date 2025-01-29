import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-3">
            <p className="mb-0">&copy; 2025 MehendiDesigns. All rights reserved.</p>
          </div>
          <div className="col-12 text-center">
            <p className="mb-0">
              Follow us on{' '}
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                Instagram
              </a>{' '}
              and{' '}
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
                Facebook
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
