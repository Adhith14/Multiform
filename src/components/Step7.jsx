import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const Step7 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const learningPaths = [
    { 
      title: 'Foundational Math Build', 
      description: 'Build your foundational skills in algebra, geometry, and probability.',
      mostPopular: true,
    },
    { 
      title: 'Mathematical Thinking', 
      description: 'Build your foundational skills in algebra, geometry, and probability.',
      mostPopular: false,
    },
  ];

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      <div className="max-w-3xl mx-auto text-center">
      <ProgressBar value={100} />

        <h2 className="text-2xl font-bold mb-4">Learning paths based on your answers</h2>
        <p className="text-gray-600 mb-8">Choose one to get started. You can switch anytime.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningPaths.map((path, index) => (
            <div 
              key={index}
              className={`rounded-lg shadow-md overflow-hidden cursor-pointer transition-colors duration-300 ${selectedOption === index ? 'bg-green-600' : 'bg-white hover:bg-gray-100'}`}
              onClick={() => handleOptionClick(index)}
            >
              <div className="p-6 flex items-center">
                <div className="mr-4">
                  <img
                    src="/images/mt.png"
                    alt="Learning Path Icon"
                    className="h-16 w-36"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{path.title}</h3>
                  <p className="text-gray-600">
                    {path.description}
                  </p>
                  {path.mostPopular && (
                    <span className="text-yellow-500 text-sm">Most Popular</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Step7;

