import React from 'react';

export default function Admin() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 rounded-3xl text-white mb-8">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <p className="text-emerald-100 mt-2">Control your NairaEarn Pro bot</p>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-zinc-900 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-white">Bot Configuration</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Bot Name</label>
              <input type="text" defaultValue="NairaEarn Pro" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white" />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Referral Reward (₦)</label>
              <input type="number" defaultValue="500" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white" />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Daily Bonus (₦)</label>
              <input type="number" defaultValue="200" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-white">Withdrawal Settings</h2>
          <div className="flex items-center justify-between">
            <span>Flutterwave Auto Payout</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
