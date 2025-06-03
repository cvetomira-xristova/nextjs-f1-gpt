import React from 'react';

const LoadingIndicator = ({ className }: { className: string }) => {
  return (
    <div className={`flex items-center space-x-2 animate-pulse ${className}`}>
      <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"></div>
    </div>
  );
};

export default LoadingIndicator;
