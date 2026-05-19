import React, { useState } from 'react';
// Removed unused motion import

export default function Admin() {
  const [botName, setBotName] = useState('Naira Earn Bot');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      <div className="space-y-6">
        <div>
          <label className="block text-sm mb-2">Bot Name</label>
          <input 
            type="text" 
            value={botName}
            onChange={(e) => setBotName(e.target.value)}
            className="w-full p-3 bg-zinc-800 rounded-xl"
          />
        </div>
        {/* More settings will be added here */}
      </div>
    </div>
  );
}