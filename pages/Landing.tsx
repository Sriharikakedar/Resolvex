import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[100vh] flex items-center px-12 relative overflow-hidden bg-black">
        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
              From Incident to Insight — <span className="text-purple-500">Instantly.</span>
            </h1>
            <p className="text-lg text-gray-400 font-medium max-w-lg uppercase tracking-widest leading-relaxed">
              AI-driven incident analysis for faster resolution and smarter prevention.
            </p>

            {/* ✅ ONLY GET STARTED BUTTON REMAINS */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/register')}
                className="px-8 py-4 bg-white text-black font-bold rounded-md hover:bg-gray-200 transition-all text-sm uppercase"
              >
                Get Started
              </button>
            </div>

          </div>

          <div className="flex justify-end">
            <div className="w-full max-w-md bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl shadow-2xl backdrop-blur-xl group hover:border-purple-500/50 transition-all duration-500">
              <div className="inline-block px-3 py-1 bg-purple-600 text-[10px] font-bold rounded-full mb-6 tracking-widest text-white shadow-lg shadow-purple-900/20 uppercase">
                AI CORE ACTIVE
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                Automated Synthesis
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                ResolveX correlates telemetry data and logs to draft blameless reviews in seconds, identifying patterns that humans might miss in the heat of an outage.
              </p>
              <div className="mt-8 pt-8 border-t border-zinc-800 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-zinc-700 border border-zinc-900 flex items-center justify-center text-[10px]">
                    <i className="fas fa-server"></i>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-zinc-600 border border-zinc-900 flex items-center justify-center text-[10px]">
                    <i className="fas fa-database"></i>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-zinc-500 border border-zinc-900 flex items-center justify-center text-[10px]">
                    <i className="fas fa-cloud"></i>
                  </div>
                </div>
                <span className="text-purple-500 text-xs font-bold uppercase tracking-widest">
                  Active Monitoring
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Section */}
      <section className="py-32 px-12 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold">The Intelligence Behind the Resolve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-purple-600/50 transition-all">
              <i className="fas fa-bolt text-3xl text-purple-500 mb-6"></i>
              <h4 className="text-xl font-bold mb-2">Instant Drafting</h4>
              <p className="text-gray-500 text-sm">
                Draft postmortems in real-time as the incident unfolds, capturing every critical detail.
              </p>
            </div>
            <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-purple-600/50 transition-all">
              <i className="fas fa-brain text-3xl text-purple-500 mb-6"></i>
              <h4 className="text-xl font-bold mb-2">Sentiment Analysis</h4>
              <p className="text-gray-500 text-sm">
                Monitor team comms to identify fatigue and ensure a blameless, healthy culture.
              </p>
            </div>
            <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-purple-600/50 transition-all">
              <i className="fas fa-shield-alt text-3xl text-purple-500 mb-6"></i>
              <h4 className="text-xl font-bold mb-2">Predictive Safety</h4>
              <p className="text-gray-500 text-sm">
                AI correlates past incidents to predict potential failures before they happen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;