import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Admin() {
  const [botName, setBotName] = useState('Naira Earn');
  const [referReward, setReferReward] = useState(500);
  const [minWithdraw, setMinWithdraw] = useState(1000);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">⚙️ Admin Panel</h1>
      
      <div className="space-y-6">
        <div className="bg-zinc-900 p-6 rounded-3xl">
          <label className="block text-sm mb-2">Bot Name</label>
          <input
            type="text"
            value={botName}
            onChange={(e) => setBotName(e.target.value)}
            className="w-full bg-zinc-800 p-4 rounded-2xl text-lg"
          />
        </div>

        <div className="bg-zinc-900 p-6 rounded-3xl">
          <label className="block text-sm mb-2">Referral Reward (₦)</label>
          <input
            type="number"
            value={referReward}
            onChange={(e) => setReferReward(Number(e.target.value))}
            className="w-full bg-zinc-800 p-4 rounded-2xl text-lg"
          />
        </div>

        <div className="bg-zinc-900 p-6 rounded-3xl">
          <label className="block text-sm mb-2">Minimum Withdrawal (₦)</label>
          <input
            type="number"
            value={minWithdraw}
            onChange={(e) => setMinWithdraw(Number(e.target.value))}
            className="w-full bg-zinc-800 p-4 rounded-2xl text-lg"
          />
        </div>
      </div>
    </div>
  );
}