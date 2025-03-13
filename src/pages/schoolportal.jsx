// components/SchoolPortal.js - Main container component
import React, { useState, useEffect } from 'react';
import AuthForms from '../studentportal/authform';
import Dashboard from '../studentportal/dashboard';
import { generateStudents } from '../studentportal/generatestudent';

const SchoolPortal = () => {
  // State for authentication and user management
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMode, setAuthMode] = useState('signup'); // 'signup' or 'login'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');

  // Generate dummy students
  useEffect(() => {
    setStudents(generateStudents());
  }, []);

  // Check if user is already registered and logged in
  useEffect(() => {
    const storedUsername = localStorage.getItem('schoolPortalUsername');
    const storedPassword = localStorage.getItem('schoolPortalPassword');
    
    if (storedUsername && storedPassword) {
      setIsSignedUp(true);
      setAuthMode('login');
      
      // Only auto-login if this is the first page load
      const shouldAutoLogin = localStorage.getItem('schoolPortalAutoLogin') !== 'false';
      if (shouldAutoLogin) {
        setIsLoggedIn(true);
        setUsername(storedUsername);
      }
    }
  }, []);

  // Handle signup
  const handleSignup = (e) => {
    e.preventDefault();
    
    if (username.length < 3 || password.length < 4) {
      setError('Username must be at least 3 characters and password at least 4 characters');
      return;
    }
    
    localStorage.setItem('schoolPortalUsername', username);
    localStorage.setItem('schoolPortalPassword', password);
    localStorage.setItem('schoolPortalAutoLogin', 'true');
    setIsSignedUp(true);
    setIsLoggedIn(true);
    setError('');
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    
    const storedUsername = localStorage.getItem('schoolPortalUsername');
    const storedPassword = localStorage.getItem('schoolPortalPassword');
    
    if (username === storedUsername && password === storedPassword) {
      setIsLoggedIn(true);
      localStorage.setItem('schoolPortalAutoLogin', 'true');
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    localStorage.setItem('schoolPortalAutoLogin', 'false');
  };

  // Toggle between signup and login forms
  const toggleAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4  " style={{ backgroundImage: "url('https://res.cloudinary.com/de5sm2jjl/image/upload/v1741712546/schoolportal_iyysgr.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      <div className="max-w-6xl mx-auto">
      <header className="flex justify-between items-center py-4 mb-6">
      <h1 className="text-3xl font-bold text-white">School Portal</h1>
    </header>
        {!isLoggedIn ? (
          <AuthForms 
            authMode={authMode}
            username={username}
            password={password}
            error={error}
            isSignedUp={isSignedUp}
            setUsername={setUsername}
            setPassword={setPassword}
            handleSignup={handleSignup}
            handleLogin={handleLogin}
            toggleAuthMode={toggleAuthMode}
          />
        ) : (
          <Dashboard 
            username={username}
            students={students}
            handleLogout={handleLogout}
          />
        )}
      </div>
    </div>
  );
};

export default SchoolPortal;