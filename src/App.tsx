import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebApp from '@twa-dev/sdk';
import { initTelegram, getUser, getStartParam } from './lib/telegram';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Refer from './pages/Refer';
import Wallet from './pages/Wallet';
import Admin from './pages/Admin';
import { useAppStore } from './store/useAppStore';

function App() {
  const { setUser } = useAppStore();

  useEffect(() => {
    initTelegram();
    const user = getUser();
    if (user) {
      setUser({
        id: user.id,
        username: user.username,
        balance: 0,
        referrerId: undefined
      });
    }

    // Handle referral
    const startParam = getStartParam();
    if (startParam && user) {
      console.log('Referral code:', startParam);
      // TODO: Call backend to process referral
      WebApp.showPopup({ message: `🎉 Welcome! Referral bonus processing...` });
    }
  }, [setUser]);

  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 text-white pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/refer" element={<Refer />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;