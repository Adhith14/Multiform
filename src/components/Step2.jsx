import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const Step2 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: 'Learning specific skills to advance my career', icon: '📈' },
    { label: 'Exploring new topics I am interested in', icon: '🌍' },
    { label: 'Refreshing my math foundations', icon: '➗' },
    { label: 'Exercising my brain to stay sharp', icon: '🎯' },
    { label: 'Something else', icon: '👷' },
  ];

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    
      <div className="max-w-md mx-auto text-center">
      <ProgressBar value={16.67} />
        <h2 className="text-2xl font-bold mb-4">Which are you most interested in?</h2>
        <p className="text-gray-600 mb-8">
          Choose just one. This will help us get you started (but won't limit your experience).
        </p>
        <div className="grid grid-cols-1 gap-4">
          {options.map(({ label, icon }, index) => (
            <button
              key={index}
              className={`flex items-center justify-start py-4 px-6 rounded-md transition-colors duration-300 shadow ${
                selectedOption === index ? 'bg-green-600' : 'bg-white hover:bg-gray-100'
              }`}
              onClick={() => handleOptionClick(index)}
            >
              <span className="mr-2">{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
         
          <div className="flex justify-between mt-8"> 
          <button className="bg-black text-white py-2 px-4 rounded-md"><Link to={'/'} style={{ textDecoration: 'none' }}>Back</Link></button>
          <button className="bg-black text-white py-2 px-4 rounded-md"><Link to={'/step3'} style={{ textDecoration: 'none' }}>Continue</Link></button>
        </div>
        </div>
    </div>
  );
};

export default Step2;
