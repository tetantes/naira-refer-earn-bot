import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebApp from '@twa-dev/sdk';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Refer from './pages/Refer';
import Wallet from './pages/Wallet';
import Admin from './pages/Admin';
import BottomNav from './components/BottomNav';

function App() {
  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
  }, []);

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
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;