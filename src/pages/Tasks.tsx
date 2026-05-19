import { motion } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import confetti from 'canvas-confetti';
import BottomNav from '../components/BottomNav';

export default function Tasks() {
  const { updateBalance } = useAppStore();

  const completeTask = (reward: number) => {
    updateBalance(reward);
    confetti({ particleCount: 100 });
  };

  const tasks = [
    { id: 1, title: 'Join Telegram Channel', reward: 300 },
    { id: 2, title: 'Follow on X', reward: 200 },
    { id: 3, title: 'Daily Login', reward: 150 },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Tasks</h1>
      {tasks.map(task => (
        <motion.div
          key={task.id}
          whileHover={{ scale: 1.02 }}
          className="bg-zinc-900 p-5 rounded-2xl mb-4 flex justify-between items-center"
        >
          <div>
            <p className="font-medium">{task.title}</p>
            <p className="text-emerald-400">+₦{task.reward}</p>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => completeTask(task.reward)}
            className="bg-emerald-600 px-6 py-2 rounded-xl"
          >
            Claim
          </motion.button>
        </motion.div>
      ))}
      <BottomNav />
    </div>
  );
}