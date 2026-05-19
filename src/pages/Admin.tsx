import React from 'react';

export default function Admin() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">👑 Admin Panel</h1>
        <p className="text-zinc-400 mb-8">Control everything from here</p>

        <div className="space-y-6">
          <div className="bg-zinc-900 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Bot Configuration</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-zinc-400 mb-1">Bot Name</label>
                <input type="text" className="w-full bg-zinc-800 rounded-xl px-4 py-3" placeholder="Naira Earn Bot" />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-1">Referral Reward (₦)</label>
                <input type="number" className="w-full bg-zinc-800 rounded-xl px-4 py-3" placeholder="500" />
              </div>
            </div>
          </div>

          <button className="w-full bg-emerald-600 hover:bg-emerald-500 transition py-4 rounded-2xl font-semibold text-lg">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
