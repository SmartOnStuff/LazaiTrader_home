import React, { useState, useEffect } from 'react';

const CampaignPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup when component mounts
    setIsVisible(true);
  }, []);

  const closeModal = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
      <div className="bg-gray-800 rounded-2xl p-6 m-4 max-w-md w-full max-h-[90vh] overflow-y-auto border border-cyan-400">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-cyan-400">🏆 Current Spotlight Campaign</h3>
          <button 
            onClick={closeModal}
            className="text-gray-400 hover:text-white text-2xl leading-none"
          >
            ×
          </button>
        </div>
        <div className="space-y-4">
          <p className="text-gray-300">
            Prize Pool: <span className="text-cyan-400 font-bold">$100</span> (increases to <span className="text-cyan-400 font-bold">$500</span> if we win HyperHack!)
          </p>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>🥇 1st Place: $50 → $100</li>
            <li>🥈 2nd Place: $25 → $50</li>
            <li>🥉 3rd Place: $25 → $50</li>
            <li>💰 Plus 10 additional $30 winners if we win!</li>
          </ul>
          <div className="pt-4">
            <a 
              href="https://t.me/LazaiTrader_bot" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block text-center py-3 px-6 bg-gradient-to-r from-cyan-400 to-blue-500 font-medium text-gray-900 rounded-lg hover:opacity-90 transition-opacity"
            >
              Join Campaign
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPopup;
