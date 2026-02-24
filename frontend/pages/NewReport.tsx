
import React from 'react';

const NewReport: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-12 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-black mb-2">Create New Report</h1>
        <p className="text-gray-500">Provide the incident details and upload logs for AI synthesis.</p>
      </div>

      <form className="space-y-10 bg-zinc-900 border border-zinc-800 p-10 rounded-2xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-2">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Incident Title</label>
            <input 
              type="text" 
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-600 transition-colors"
              placeholder="e.g., Database Connection Pool Exhaustion"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Incident Date</label>
            <input type="date" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-600 transition-colors" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Severity</label>
            <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-600 transition-colors appearance-none">
              <option>P0 - Critical</option>
              <option>P1 - High</option>
              <option>P2 - Medium</option>
              <option>P3 - Low</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Detection Time</label>
            <input type="time" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-600 transition-colors" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Resolution Time</label>
            <input type="time" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-600 transition-colors" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Affected Systems</label>
          <input 
            type="text" 
            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-600 transition-colors"
            placeholder="e.g., Frontend API, Payment Service, Redis"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Impact Description</label>
          <textarea 
            rows={3}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-600 transition-colors"
            placeholder="Describe who was affected and the extent of the outage..."
          ></textarea>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Timeline of Events</label>
          <textarea 
            rows={5}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-600 transition-colors"
            placeholder="T+0: Detection... T+10: Mitigation..."
          ></textarea>
        </div>

        <div className="border-t border-zinc-800 pt-8">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Logs Entry Upload</label>
          <div className="relative border-2 border-dashed border-zinc-800 hover:border-purple-500 rounded-xl p-12 transition-all group text-center bg-zinc-950">
            <input 
              type="file" 
              accept=".csv,.txt,.json,.log"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="space-y-4">
              <i className="fas fa-cloud-upload-alt text-4xl text-zinc-700 group-hover:text-purple-500 transition-colors"></i>
              <p className="text-gray-500 font-medium">Click or drag log files here to analyze</p>
              <p className="text-[10px] text-gray-600 uppercase tracking-widest">Accepted: .csv, .txt, .json, .log</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <button type="button" className="px-8 py-4 border border-zinc-800 rounded-lg font-bold hover:bg-zinc-800 transition-all text-sm uppercase tracking-widest">
            Save Draft
          </button>
          <button type="submit" className="px-8 py-4 bg-purple-600 rounded-lg font-bold hover:bg-purple-700 transition-all text-sm uppercase tracking-widest shadow-lg shadow-purple-900/20">
            Generate Postmortem
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewReport;
