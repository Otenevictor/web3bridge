// components/SignupForm.js - Signup form component
import React from 'react';

const SignupForm = ({ 
  username, 
  password, 
  error, 
  isSignedUp,
  setUsername, 
  setPassword, 
  handleSignup, 
  toggleAuthMode 
}) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSignup}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign Up
        </button>
        {isSignedUp && (
          <p className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <button
              type="button"
              onClick={toggleAuthMode}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Login instead
            </button>
          </p>
        )}
      </form>
    </>
  );
};

export default SignupForm;