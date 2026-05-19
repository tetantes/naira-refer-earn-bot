import { useEffect, useState } from 'react';
import { Copy, Users } from 'lucide-react';
import { getUser } from '../lib/telegram';
import BottomNav from '../components/BottomNav';

export default function Refer() {
  const [referralLink, setReferralLink] = useState('');
  const user = getUser();

  useEffect(() => {
    if (user) {
      const link = `https://t.me/yourbot/app?startapp=${user.id}`;
      setReferralLink(link);
    }
  }, [user]);

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    alert('✅ Referral link copied!');
  };

  return (
    <div className="p-4">
      <div className="text-center py-8">
        <Users className="mx-auto text-6xl mb-4 text-emerald-400" />
        <h1 className="text-3xl font-bold">Invite Friends</h1>
        <p className="text-zinc-400 mt-2">Earn ₦500 per referral</p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-3xl">
        <p className="text-sm text-zinc-400 mb-2">Your Referral Link</p>
        <div className="flex gap-2">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="flex-1 bg-zinc-800 p-4 rounded-2xl text-sm"
          />
          <button onClick={copyLink} className="bg-white text-black px-6 rounded-2xl">
            <Copy size={20} />
          </button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}