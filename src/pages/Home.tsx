import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, TrendingUp, Users, Award, ArrowDown, Gift, Zap, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';
import WebApp from '@twa-dev/sdk';

const Home = () => {
  const [balance, setBalance] = useState(1253);
  const [displayBalance, setDisplayBalance] = useState(1253);
  const [dailyEarnings] = useState(87);

  // Animated counter
  useEffect(() => {
    let start = displayBalance;
    const end = balance;
    const duration = 800;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(start + (end - start) * progress);
      setDisplayBalance(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [balance]);

  const handleClaimBonus = () => {
    WebApp.HapticFeedback.impactOccurred('medium');
    setBalance(prev => prev + 500);
    
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const colors = {
    emerald: "text-emerald-400",
    violet: "text-violet-400",
    amber: "text-amber-400",
  } as const;

  const stats = [
    { label: "Today's Earn", value: `₦${dailyEarnings}`, icon: TrendingUp, color: "emerald" as const },
    { label: "Referrals", value: "18", icon: Users, color: "violet" as const },
    { label: "Tasks Done", value: "47", icon: Award, color: "amber" as const },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pb-24 overflow-hidden relative">
      {/* Floating Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#10b98110_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_bottom_left,#8b5cf610_0%,transparent_50%)]" />

      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 via-teal-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <span className="text-2xl font-bold">₦</span>
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tighter">NairaEarn Pro</h1>
            <p className="text-xs text-emerald-500 flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5" /> Elite Tier
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-3xl border border-white/10">
          <div className="w-7 h-7 bg-gradient-to-br from-white/20 to-white/5 rounded-full" />
          <span className="text-sm font-medium">@username</span>
        </div>
      </div>

      {/* Main Balance Card */}
      <div className="px-5 pt-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card relative overflow-hidden rounded-3xl p-7 border border-white/10 shadow-2xl shadow-black/50"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-white/60 tracking-wide">TOTAL BALANCE</p>
              <p className="text-5xl font-semibold tracking-[-2px] mt-3 font-mono">
                ₦{displayBalance.toLocaleString()}
              </p>
              <p className="text-emerald-400/80 text-sm mt-1">≈ $0.78 USD</p>
            </div>
            <div className="text-7xl opacity-90">💰</div>
          </div>

          <div className="mt-8 flex gap-3">
            <motion.button 
              whileTap={{ scale: 0.96 }}
              onClick={handleClaimBonus}
              className="flex-1 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 transition-all font-semibold py-3.5 rounded-2xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/40"
            >
              <Gift className="w-4 h-4" />
              Claim Daily Bonus
            </motion.button>

            <motion.button 
              whileTap={{ scale: 0.96 }}
              className="flex-1 bg-white/5 hover:bg-white/10 border border-white/20 transition-all font-semibold py-3.5 rounded-2xl text-sm flex items-center justify-center gap-2"
            >
              <ArrowDown className="w-4 h-4" />
              Withdraw
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Quick Stats */}
      <div className="px-5 mt-6 grid grid-cols-3 gap-3">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass-card bg-zinc-900/70 border border-white/10 rounded-2xl p-4 text-center hover:border-white/20 hover:shadow-xl hover:shadow-white/5 transition-all"
          >
            <stat.icon className={`w-6 h-6 mx-auto mb-3 ${colors[stat.color]}`} />
            <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
            <p className="text-[10px] text-white/50 mt-1 tracking-wider">{stat.label.toUpperCase()}</p>
          </motion.div>
        ))}
      </div>

      {/* Withdrawal Level Progress */}
      <div className="px-5 mt-7">
        <div className="glass-card bg-zinc-900/70 border border-white/10 rounded-3xl p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              <span className="font-medium">Withdrawal Level 8</span>
            </div>
            <span className="text-emerald-400 text-sm">Next: ₦5,000</span>
          </div>
          
          <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "65%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Spin to Win */}
      <div className="px-5 mt-6">
        <motion.button 
          whileTap={{ scale: 0.97 }}
          className="w-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 py-4 rounded-3xl font-semibold text-base flex items-center justify-center gap-3 shadow-2xl shadow-violet-500/40 active:scale-[0.985] transition-all"
        >
          <Zap className="w-5 h-5" />
          SPIN TO WIN ₦2,000
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
