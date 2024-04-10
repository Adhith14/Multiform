import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Step6 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/step7');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-md mx-auto text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-500"></div>
        <p className="text-gray-600 mt-4">
          Finding learning path recommendations for you based on your responses
        </p>
      </div>
    </div>
  );
};

export default Step6;
