import React from 'react';

export default function Admin() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      <p className="text-zinc-400">Configure your bot settings here.</p>
      
      <div className="mt-8 space-y-6">
        <div className="bg-zinc-900 p-4 rounded-xl">
          <h2 className="text-lg font-semibold mb-3">Bot Settings</h2>
          <p>Bot Name, Rewards, Tasks will be configurable here.</p>
        </div>
      </div>
    </div>
  );
}
