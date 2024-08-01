import React from 'react';

const UpdatesAndEvents: React.FC = () => {
  return (
    <div className="bg-black text-white p-4 sm:p-6 md:p-8 min-h-screen">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">UPDATES & EVENTS</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-10">
        {[1, 2, 3].map((box) => (
          <div
            key={box}
            className="w-full sm:w-64 md:w-80 h-64 sm:h-64 md:h-80 bg-gray-900 rounded-lg border-2 border-gray-700 shadow-lg flex items-center justify-center mb-4 sm:mb-0"
            style={{
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.05)',
            }}
          >
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdatesAndEvents;