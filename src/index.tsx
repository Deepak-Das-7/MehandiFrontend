import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { DesignProvider } from './context/DesignContext';
import { BookingProvider } from './context/Bookings';
import { LoggedUserProvider } from './context/Auth';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <LoggedUserProvider>
      <BookingProvider>
        <DesignProvider>
          <App />
        </DesignProvider>
      </BookingProvider>
    </LoggedUserProvider>
  </React.StrictMode>
);
