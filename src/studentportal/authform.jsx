import React from 'react';
import SignupForm from './signup';
import LoginForm from './login';

const AuthForms = ({ 
  authMode, 
  username, 
  password, 
  error, 
  isSignedUp,
  setUsername, 
  setPassword, 
  handleSignup, 
  handleLogin, 
  toggleAuthMode 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      {authMode === 'signup' ? (
        <SignupForm 
          username={username}
          password={password}
          error={error}
          isSignedUp={isSignedUp}
          setUsername={setUsername}
          setPassword={setPassword}
          handleSignup={handleSignup}
          toggleAuthMode={toggleAuthMode}
        />
      ) : (
        <LoginForm 
          username={username}
          password={password}
          error={error}
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLogin}
          toggleAuthMode={toggleAuthMode}
        />
      )}
    </div>
  );
};

export default AuthForms;