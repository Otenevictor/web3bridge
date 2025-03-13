// SchoolPortal.js - Updated component
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForms from '../studentportal/authform';

const SchoolPortal = () => {
  const [authMode, setAuthMode] = useState('signup');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('schoolPortalUsername');
    const storedPassword = localStorage.getItem('schoolPortalPassword');
    
    if (storedUsername && storedPassword) {
      setAuthMode('login'); // Default to login form if user exists
      const shouldAutoLogin = localStorage.getItem('schoolPortalAutoLogin') !== 'false';
      if (shouldAutoLogin) {
        navigate('/schoolportal/dashboard');
      }
    }
  }, [navigate]);

  const handleSignup = (e) => {
    e.preventDefault();
    
    if (username.length < 3 || password.length < 4) {
      setError('Username must be at least 3 characters and password at least 4 characters');
      return;
    }
    
    localStorage.setItem('schoolPortalUsername', username);
    localStorage.setItem('schoolPortalPassword', password);
    localStorage.setItem('schoolPortalAutoLogin', 'true');
    setAuthMode('login'); // Switch to login after successful signup
    setError('');
    navigate('/schoolportal/dashboard');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    const storedUsername = localStorage.getItem('schoolPortalUsername');
    const storedPassword = localStorage.getItem('schoolPortalPassword');
    
    if (username === storedUsername && password === storedPassword) {
      localStorage.setItem('schoolPortalAutoLogin', 'true');
      navigate('/schoolportal/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4" style={{ backgroundImage: "url('https://res.cloudinary.com/de5sm2jjl/image/upload/v1741712546/schoolportal_iyysgr.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center py-4 mb-6">
          <h1 className="text-3xl font-bold text-white">School Portal</h1>
        </header>
        <AuthForms 
          authMode={authMode}
          username={username}
          password={password}
          error={error}
          setUsername={setUsername}
          setPassword={setPassword}
          handleSignup={handleSignup}
          handleLogin={handleLogin}
          toggleAuthMode={() => setAuthMode(mode => mode === 'login' ? 'signup' : 'login')}
        />
      </div>
    </div>
  );
};

export default SchoolPortal;