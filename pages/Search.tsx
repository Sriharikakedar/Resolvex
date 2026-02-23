
import React, { useState } from 'react';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');

  const reports = [
    { title: 'Payment Gateway Timeout', date: '2025-10-12', severity: 'Critical' },
    { title: 'Redis Cache Eviction Spikes', date: '2025-10-11', severity: 'High' },
    { title: 'Frontend JS Bundle 404', date: '2025-10-10', severity: 'Medium' },
    { title: 'Auth Service Latency', date: '2025-10-08', severity: 'High' },
    { title: 'S3 Bucket Permission Error', date: '2025-10-05', severity: 'Low' },
  ];

  const filteredReports = reports.filter(r => r.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="max-w-5xl mx-auto px-12 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-black mb-8">Search Reports</h1>
        <div className="relative group">
          <i className="fas fa-search absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-purple-500 transition-colors"></i>
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-16 py-6 text-lg focus:outline-none focus:border-purple-600 transition-all shadow-xl"
            placeholder="Search by title, system, or incident ID..."
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredReports.length > 0 ? (
          filteredReports.map((report, i) => (
            <div key={i} className="flex items-center justify-between p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-purple-600/50 transition-all cursor-pointer group">
              <div className="flex items-center gap-6">
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg bg-zinc-950 border border-zinc-800 group-hover:bg-zinc-800 transition-colors`}>
                  <i className="fas fa-file-alt text-zinc-500"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold">{report.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1">
                    <span>{report.date}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                    <span className={report.severity === 'Critical' ? 'text-red-500' : 'text-yellow-500'}>{report.severity}</span>
                  </div>
                </div>
              </div>
              <button className="text-zinc-500 group-hover:text-purple-500 transition-colors">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-zinc-900/50 rounded-2xl border border-zinc-800 border-dashed">
            <i className="fas fa-search text-4xl text-zinc-800 mb-4"></i>
            <p className="text-zinc-500">No reports found matching your query.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
