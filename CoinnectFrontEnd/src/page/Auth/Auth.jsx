import React, { useState } from 'react';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div
      className='text-white h-screen relative'
      style={{
        backgroundImage: `url("r3.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-70'></div>

      {/* Form Container */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-black bg-opacity-50 shadow-2xl shadow-white rounded-md w-[30rem] p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6 text-red-600">COINNECT</h1>
        
        <form className="w-full space-y-4">
          {isSignUp && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400"
              />
            </>
          )}

          {!isSignUp && (
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400"
            />
          )}

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          <button
            className="ml-2 text-yellow-400 underline"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
