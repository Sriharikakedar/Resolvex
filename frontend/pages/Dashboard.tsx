
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const StatCard = ({ title, value, color, icon }: { title: string, value: string, color: string, icon: string }) => (
  <div className={`p-8 bg-zinc-900 border border-zinc-800 rounded-2xl relative overflow-hidden group hover:border-${color}-500/50 transition-all`}>
    <div className={`absolute -right-4 -bottom-4 text-6xl opacity-5 group-hover:opacity-10 text-${color}-500 transition-all`}>
      <i className={`fas ${icon}`}></i>
    </div>
    <div className="relative z-10">
      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{title}</h3>
      <div className={`text-4xl font-black text-${color}-500`}>{value}</div>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-12 py-12">
      <div className="flex items-center justify-between mb-12 pb-8 border-b border-zinc-800">
        <h1 className="text-4xl font-black">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StatCard title="Total Incidents" value="128" color="blue" icon="fa-chart-line" />
        <StatCard title="Critical Incidents" value="14" color="red" icon="fa-skull" />
        <StatCard title="High Priority" value="42" color="yellow" icon="fa-exclamation-triangle" />
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
          <h2 className="text-xl font-bold">Recent Reports</h2>
          <button className="text-sm text-purple-500 font-bold hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-zinc-950 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <th className="px-6 py-4">Incident Title</th>
                <th className="px-6 py-4">Severity</th>
                <th className="px-6 py-4">Detection Time</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {[
                { title: 'Payment Gateway Timeout', severity: 'Critical', time: 'Oct 12, 14:32', status: 'Resolved' },
                { title: 'Redis Cache Eviction Spikes', severity: 'High', time: 'Oct 11, 09:15', status: 'Resolved' },
                { title: 'Frontend JS Bundle 404', severity: 'Medium', time: 'Oct 10, 18:45', status: 'Drafting' },
                { title: 'Auth Service Latency', severity: 'High', time: 'Oct 08, 22:10', status: 'Resolved' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-zinc-800/50 transition-colors text-sm">
                  <td className="px-6 py-4 font-medium">{row.title}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${
                      row.severity === 'Critical' ? 'bg-red-900/40 text-red-500' : 'bg-yellow-900/40 text-yellow-500'
                    }`}>
                      {row.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{row.time}</td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${row.status === 'Resolved' ? 'bg-green-500' : 'bg-purple-500'}`}></span>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-zinc-500 hover:text-white px-2"><i className="fas fa-edit"></i></button>
                    <button className="text-zinc-500 hover:text-white px-2"><i className="fas fa-external-link-alt"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
