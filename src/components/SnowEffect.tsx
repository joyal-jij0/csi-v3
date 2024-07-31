import React from 'react';

const SnowEffect: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0"> {/* Set z-index to 0 */}
      {Array.from({ length: 300 }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-fall"
          style={{
            width: Math.random() * 2 + 'px',
            height: Math.random() * 2 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: `${Math.random() * 3 + 2}s`, // Random duration between 2s and 5s
          }}
        ></div>
      ))}
    </div>
  );
};

export default SnowEffect;
