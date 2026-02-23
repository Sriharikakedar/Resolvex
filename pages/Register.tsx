
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

interface RegisterProps {
  setIsAuthenticated: (val: boolean) => void;
}

const Register: React.FC<RegisterProps> = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-8 py-12">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-10 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold mb-8">Join ResolveX</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
            <input 
              type="text" 
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-600 transition-colors"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-600 transition-colors"
              placeholder="john@company.com"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Password</label>
            <input 
              type="password" 
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-600 transition-colors"
              placeholder="••••••••"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Confirm Password</label>
            <input 
              type="password" 
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-600 transition-colors"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="py-4">
            <button 
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-purple-900/20"
            >
              Register Account
            </button>
          </div>
          <p className="text-center text-gray-500 text-sm">
            Already have an account? <Link to="/login" className="text-white font-bold hover:underline">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
