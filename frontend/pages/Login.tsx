
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

interface LoginProps {
  setIsAuthenticated: (val: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-8 py-12">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="hidden lg:block space-y-6">
          <h1 className="text-6xl font-black leading-tight tracking-tighter">Access the AI Engine.</h1>
          <p className="text-gray-500 text-lg max-w-md">Login to view active incidents, generate reports, and analyze system health with ResolveX AI.</p>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-10 rounded-2xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-8">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Username / Email</label>
                <input 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-600 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-600 transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded bg-zinc-950 border-zinc-800 text-purple-600 focus:ring-purple-600" />
                  Remember me
                </label>
                <Link to="#" className="text-sm text-purple-500 hover:text-purple-400 font-bold">Forgot password?</Link>
              </div>
              <button 
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-purple-900/20"
              >
                Login
              </button>
              
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-800"></div></div>
                <div className="relative flex justify-center text-xs uppercase"><span className="bg-zinc-900 px-2 text-gray-500">Or continue with</span></div>
              </div>

              <button 
                type="button"
                className="w-full bg-white text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-all"
              >
                <i className="fab fa-google"></i> Google
              </button>

              <p className="text-center text-gray-500 text-sm mt-8">
                Don't have an account? <Link to="/register" className="text-white font-bold hover:underline">Register now</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
