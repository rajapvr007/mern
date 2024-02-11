import React from 'react';

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-2xl text-gray-600">Oops! The page you're looking for doesn't exist.</p>
        <button
          className="mt-8 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
          onClick={() => window.location.href = '/'}
        >
          Home
        </button>
      </div>
    </div>
  );
}

export default Error;