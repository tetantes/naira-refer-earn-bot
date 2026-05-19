import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useAppStore } from '../store/useAppStore';
import BottomNav from '../components/BottomNav';

export default function Home() {
  const { user, settings, updateBalance } = useAppStore();

  const claimDaily = () => {
    updateBalance(100);
    confetti({ particleCount: 150, spread: 70 });
  };

  return (
    <div className="p-4">
      <div className="text-center py-8">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-6xl mb-4 inline-block"
        >
          💰
        </motion.div>
        <h1 className="text-4xl font-bold mb-2">{settings.botName}</h1>
        <p className="text-emerald-400 text-xl">₦{user?.balance || 0}</p>
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={claimDaily}
        className="w-full bg-emerald-600 hover:bg-emerald-500 py-4 rounded-2xl text-xl font-semibold mb-8"
      >
        Claim Daily Bonus
      </motion.button>

      <BottomNav />
    </div>
  );
}