import { useAppStore } from '../store/useAppStore';
import { motion } from 'framer-motion';

export default function Admin() {
  const { settings, updateSettings } = useAppStore();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <div className="space-y-6 bg-zinc-900 p-6 rounded-3xl">
        <div>
          <label>Bot Name</label>
          <input
            type="text"
            value={settings.botName}
            onChange={(e) => updateSettings({ botName: e.target.value })}
            className="w-full mt-1 bg-zinc-800 p-3 rounded-xl"
          />
        </div>

        <div>
          <label>Referral Reward (₦)</label>
          <input
            type="number"
            value={settings.referralReward}
            onChange={(e) => updateSettings({ referralReward: parseInt(e.target.value) })}
            className="w-full mt-1 bg-zinc-800 p-3 rounded-xl"
          />
        </div>

        <div>
          <label>Flutterwave Enabled</label>
          <input
            type="checkbox"
            checked={settings.flutterwaveEnabled}
            onChange={(e) => updateSettings({ flutterwaveEnabled: e.target.checked })}
            className="ml-2"
          />
        </div>
      </div>
      <p className="text-center text-zinc-500 mt-8">Everything is configurable here</p>
    </div>
  );
}