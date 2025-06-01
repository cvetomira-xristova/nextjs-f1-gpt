import React from 'react';

const LoadingIndicator = () => {
  return (
    <div className="flex items-center space-x-2 animate-pulse">
      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
    </div>
  );
};

export default LoadingIndicator;
