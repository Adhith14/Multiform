import React from 'react';

const ProgressBar = ({ value }) => {
  const progressValue = typeof value === 'number' ? Math.max(0, Math.min(100, value)) : 0;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div
          className="bg-green-600 h-2.5 rounded-full"
          style={{ width: `${progressValue}%` }}
        ></div>
      </div>
      
    </div>
  );
};

export default ProgressBar;



