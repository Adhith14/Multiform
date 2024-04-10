// 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const Step4 = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { id: 1, label: 'Introductory', math: '5 × ½ = ?', level: 'Arithmetic' },
    { id: 2, label: 'Foundational', math: '3x + 5 = 4', level: 'Basic Algebra' },
    { id: 3, label: 'Intermediate', math: 'x = (-b ± √(b² - 4ac)) / 2a', level: 'Intermediate Algebra' },
    { id: 4, label: 'Advanced', math: '∫ x²dx = ?', level: 'Calculus' },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) {
      onNext(selectedOption);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="max-w-3xl mx-auto">
        <ProgressBar value={50} />
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">What is your math comfort level?</h2>
          <p className="text-gray-600">
            Choose the highest level you feel confident in — you can always adjust later.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {options.map((option) => (
            <div
              key={option.id}
              className={`flex flex-col items-center justify-center rounded-md py-4 px-6 cursor-pointer ${
                selectedOption?.id === option.id ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <span className="mb-2">{option.math}</span>
              <span>{option.level}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-8"> 
          <button className="bg-black text-white py-2 px-4 rounded-md"><Link to={'/step3'} style={{ textDecoration: 'none' }}>Back</Link></button>
          <button className="bg-black text-white py-2 px-4 rounded-md"><Link to={'/step5'} style={{ textDecoration: 'none' }}>Continue</Link></button>
        </div>
        
      </div>
    </div>
  );
};

export default Step4;