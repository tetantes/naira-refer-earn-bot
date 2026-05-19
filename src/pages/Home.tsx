import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import WebApp from '@twa-dev/sdk';

export default function Home() {
  const balance = 0;

  const claimBonus = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
    // TODO: Add API call later
    alert('Daily Bonus Claimed! +₦500');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Mydarads</h1>
          <p className="text-emerald-400 text-sm">Good Morning 🌞</p>
        </div>
        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
          👑
        </div>
      </div>

      {/* Main Balance Card */}
      <div className="bg-zinc-900 rounded-3xl p-6 mb-6 border border-zinc-800">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-zinc-400 text-sm">DRD Balance</p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold">1,253</span>
              <span className="text-2xl text-yellow-400">DRD</span>
            </div>
            <p className="text-emerald-400 text-lg">≈ ₦313.25</p>
          </div>
          <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center text-4xl">
            🏛️
          </div>
        </div>
      </div>

      {/* Wallet & Status */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-zinc-900 rounded-3xl p-5">
          <p className="text-zinc-400 text-sm">Wallet Balance</p>
          <p className="text-3xl font-semibold mt-1">₦0</p>
        </div>
        <div className="bg-zinc-900 rounded-3xl p-5">
          <p className="text-zinc-400 text-sm">Status</p>
          <p className="text-orange-400 text-2xl font-semibold mt-1">Inactive</p>
        </div>
      </div>

      {/* Withdraw Button */}
      <button
        onClick={() => WebApp.showPopup({message: 'Withdrawal page coming soon'})}
        className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 rounded-2xl text-lg mb-8 flex items-center justify-center gap-2 active:scale-95 transition-transform"
      >
        ↓ Withdraw
      </button>

      {/* Earning Section */}
      <div className="bg-zinc-900 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-yellow-500/20 rounded-xl flex items-center justify-center text-xl">↑</div>
          <div>
            <p className="font-semibold">Withdrawal Level</p>
            <p className="text-sm text-zinc-400">Next: ₦5,000 (20,000 DRD)</p>
          </div>
        </div>

        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden mb-6">
          <div className="h-full w-3/4 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-500 py-3.5 rounded-2xl font-semibold flex items-center justify-center gap-2">
          🎯 Spin to Win
        </button>
      </div>
    </div>
  );
}
