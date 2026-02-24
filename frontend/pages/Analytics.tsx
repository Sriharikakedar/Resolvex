
import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';

const data = [
  { name: 'Oct 01', incidents: 4, resolved: 4 },
  { name: 'Oct 03', incidents: 7, resolved: 6 },
  { name: 'Oct 05', incidents: 5, resolved: 5 },
  { name: 'Oct 07', incidents: 12, resolved: 11 },
  { name: 'Oct 09', incidents: 8, resolved: 8 },
  { name: 'Oct 11', incidents: 10, resolved: 9 },
  { name: 'Oct 13', incidents: 3, resolved: 3 },
];

const Analytics: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-12 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-black mb-2">Analytics</h1>
        <p className="text-gray-500">System health trends and incident response performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">Incident Trends</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorInc" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="incidents" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorInc)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">Resolution Rate</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px' }}
                />
                <Bar dataKey="resolved" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Incidents', value: '128', change: '+12%', pos: true },
          { label: 'Avg. Resolution Time', value: '42m', change: '-8%', pos: true },
          { label: 'Resolution Rate', value: '98.2%', change: '+0.5%', pos: true },
          { label: 'SLA Performance', value: '99.94%', change: '-0.02%', pos: false },
        ].map((metric, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">{metric.label}</p>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-black">{metric.value}</span>
              <span className={`text-[10px] font-bold ${metric.pos ? 'text-green-500' : 'text-red-500'}`}>
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
