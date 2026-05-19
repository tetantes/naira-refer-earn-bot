import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import BottomNav from '../components/BottomNav';

export default function Wallet() {
  const { user, settings } = useAppStore();
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState<'flutterwave' | 'manual'>('flutterwave');

  const handleWithdraw = () => {
    const numAmount = parseInt(amount);
    if (numAmount < settings.minWithdrawal) {
      alert(`Minimum withdrawal is ₦${settings.minWithdrawal}`);
      return;
    }
    alert(`Withdrawal request of ₦${numAmount} via ${method} submitted!`);
    // TODO: Backend integration
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Wallet</h1>
      <div className="bg-zinc-900 p-8 rounded-3xl text-center mb-8">
        <p className="text-zinc-400">Balance</p>
        <p className="text-6xl font-bold text-emerald-400">₦{user?.balance || 0}</p>
      </div>

      <div className="space-y-4">
        <select value={method} onChange={(e) => setMethod(e.target.value as any)} className="w-full bg-zinc-900 p-4 rounded-2xl">
          <option value="flutterwave">Automated (Flutterwave)</option>
          <option value="manual">Manual (Admin Approval)</option>
        </select>

        <input
          type="number"
          placeholder="Amount (₦)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full bg-zinc-900 p-4 rounded-2xl"
        />

        <button onClick={handleWithdraw} className="w-full bg-emerald-600 py-4 rounded-2xl text-xl font-semibold">
          Withdraw Now
        </button>
      </div>
      <BottomNav />
    </div>
  );
}