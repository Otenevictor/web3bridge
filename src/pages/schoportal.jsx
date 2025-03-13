// components/SchoolPortal.js - Main container component
import React, { useState, useEffect } from 'react';
import AuthForms from '../studentportal/authform';
import Dashboard from '../studentportal/dashboard';
import { generateStudents } from '../studentportal/generatestudent';
import { TbDashboardFilled } from 'react-icons/tb';

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

// export default SchoolPortal;


TbDashboardFilled
// components/Dashboard.js - Dashboard component
import React, { useState } from 'react';
import SubjectNavigation from './subject';
import StudentTable from './studenttable';

const Dashboard = ({ username, students, handleLogout }) => {
  const [activeSubject, setActiveSubject] = useState('All');
  
  // Filter students by subject
  const filteredStudents = activeSubject === 'All' 
    ? students 
    : students.filter(student => student.subjects.includes(activeSubject));

  // Count students by subject
  const subjectCounts = {
    'Web2 Basic': students.filter(s => s.subjects.includes('Web2 Basic')).length,
    'Web2 Advance': students.filter(s => s.subjects.includes('Web2 Advance')).length,
    'Web3 Basic': students.filter(s => s.subjects.includes('Web3 Basic')).length,
    'Web3 Advance': students.filter(s => s.subjects.includes('Web3 Advance')).length
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg" >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Student Dashboard</h2>
        <div className="flex items-center">
          <span className="mr-3">Welcome, {username}!</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
      
      <SubjectNavigation 
        activeSubject={activeSubject}
        setActiveSubject={setActiveSubject}
        subjectCounts={subjectCounts}
        totalStudents={students.length}
      />
      
      <StudentTable students={filteredStudents} />
    </div>
  );
};

// export default Dashboard;