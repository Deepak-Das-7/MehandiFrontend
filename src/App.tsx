import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Designs from './pages/Design/Designs';
import Bookings from './pages/Bookings';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import DesignDetail from './pages/Design/DesignDetail';
import Admin from './pages/Admin';
import PrivateRoute from './components/auth/PrivateRoute';
import { useLoggedUserContext } from './context/Auth';
import MyBookings from './pages/MyBookings';
import Profile from './pages/Profile';

const App: React.FC = () => {
  const { isAdmin, isLoggedIn } = useLoggedUserContext();

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="container flex-grow-1 mt-4">
          <Routes>
            {/* Public Routes (Accessible to all) */}
            <Route path="/" element={<Home />} />
            <Route path="/designs" element={<Designs />} />
            <Route path="/designs/:id" element={<DesignDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes (Only accessible if logged in) */}
            {isLoggedIn ? (
              <>
                <Route path="/my-bookings" element={<PrivateRoute><MyBookings /></PrivateRoute>} />
                <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
              </>
            ) : null}

            {/* Admin Routes (Only accessible if admin) */}
            {isAdmin ? (
              <>
                <Route path="/bookings" element={<PrivateRoute><Bookings /></PrivateRoute>} />
                <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
              </>
            ) : null}
          </Routes>
        </main>

        {/* Footer (Sticky at Bottom) */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
