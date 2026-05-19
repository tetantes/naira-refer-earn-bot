import { create } from 'zustand';

interface User {
  id: number;
  username?: string;
  balance: number;
  referrerId?: number;
}

interface Settings {
  botName: string;
  referralReward: number;
  taskReward: number;
  minWithdrawal: number;
  flutterwaveEnabled: boolean;
}

interface AppState {
  user: User | null;
  settings: Settings;
  setUser: (user: User) => void;
  updateBalance: (amount: number) => void;
  updateSettings: (newSettings: Partial<Settings>) => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  settings: {
    botName: "NairaEarn Pro",
    referralReward: 500,
    taskReward: 200,
    minWithdrawal: 1000,
    flutterwaveEnabled: true,
  },
  setUser: (user) => set({ user }),
  updateBalance: (amount) => set((state) => ({ 
    user: state.user ? { ...state.user, balance: state.user.balance + amount } : null 
  })),
  updateSettings: (newSettings) => set((state) => ({
    settings: { ...state.settings, ...newSettings }
  })),
}));