import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const Step1 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: 'Student or soon to be enrolled', icon: '👨‍🎓' },
    { label: 'Professional pursuing a career', icon: '👩‍💼' },
    { label: 'Parent of a school-age child', icon: '👦' },
    { label: 'Lifelong learner', icon: '👴' },
    { label: 'Teacher', icon: '👩‍🏫' },
    { label: 'Other', icon: '👷' },
  ];

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-md mx-auto text-center">
      <ProgressBar value={0.0} />

        <h2 className="text-2xl font-bold mb-4">Which describes you best?</h2>
        <p className="text-gray-600 mb-8">This will help us personalize your experience.</p>
        <div className="grid grid-cols-2 gap-4">
          {options.map(({ label, icon }, index) => (
            <button
              key={index}
              className={`flex items-center justify-center py-4 px-6 rounded-md transition-colors duration-300 ${
                selectedOption === index ? 'bg-green-600' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => handleOptionClick(index)}
            >
              <span className="mr-2">{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
        <button className="bg-black text-white py-2 px-4 rounded-md mt-8"><Link to={'/step2'}  style={{textDecoration:'none'}}>Continue</Link></button>      </div>
      
    </div>
  );
};

export default Step1;
