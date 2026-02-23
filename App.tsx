import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NewReport from './pages/NewReport';
import Search from './pages/Search';
import Analytics from './pages/Analytics';

interface NavbarProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (val: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div>
        <Link
          to="/"
          className="text-4xl font-black text-white tracking-tight hover:text-purple-500 transition-colors"
        >
          ResolveX
        </Link>
      </div>

      <div className="flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-gray-400">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>

        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
            <Link to="/new-report" className="hover:text-white transition-colors">New Report</Link>
            <Link to="/search" className="hover:text-white transition-colors">Search</Link>
            <Link to="/analytics" className="hover:text-white transition-colors">Analytics</Link>

            <button
              onClick={handleLogout}
              className="hover:text-white transition-colors uppercase tracking-widest"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-white transition-colors">Login</Link>
            <button
              onClick={() => navigate('/register')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all"
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

/* ✅ Protected Route */
const ProtectedRoute = ({
  isAuthenticated,
  children,
}: {
  isAuthenticated: boolean;
  children: React.ReactNode;
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

/* ✅ Perfectly Aligned Footer */
const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-20 px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Column 1 */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">ResolveX</h2>
          <p className="text-gray-500 text-sm">
            © 2026 Resolve X. All rights reserved.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
            Features
          </h3>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
            <li><Link to="/new-report" className="hover:text-white transition-colors">Create Reports</Link></li>
            <li><Link to="/search" className="hover:text-white transition-colors">Search Reports</Link></li>
            <li><Link to="/analytics" className="hover:text-white transition-colors">Analytics</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
            Connect With Us
          </h3>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>Google</li>
            <li>LinkedIn</li>
            <li>Email</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />

      <main className="flex-grow pt-24">
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />

          <Route
            path="/register"
            element={<Register setIsAuthenticated={setIsAuthenticated} />}
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/new-report" element={<NewReport />} />
          <Route path="/search" element={<Search />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;