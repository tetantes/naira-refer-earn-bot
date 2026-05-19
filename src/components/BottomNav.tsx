import { Home, Award, Users, Wallet, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Award, label: 'Tasks', path: '/tasks' },
    { icon: Users, label: 'Refer', path: '/refer' },
    { icon: Wallet, label: 'Wallet', path: '/wallet' },
    { icon: Shield, label: 'Admin', path: '/admin' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 py-2">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.path} to={item.path} className={`flex flex-col items-center ${isActive ? 'text-emerald-400' : 'text-zinc-400'}`}>
              <Icon size={24} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}