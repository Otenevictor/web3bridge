


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateStudents } from '../studentportal/generatestudent';
import SubjectNavigation from './subject';
import StudentTable from './studenttable';

const Dashboard = () => {
  const [activeSubject, setActiveSubject] = useState('All');
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const username = localStorage.getItem('schoolPortalUsername') || '';

  useEffect(() => {
    setStudents(generateStudents());
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('schoolPortalUsername');
    localStorage.removeItem('schoolPortalPassword');
    localStorage.setItem('schoolPortalAutoLogin', 'false');
    navigate('/schoolportal');
  };

  const filteredStudents = activeSubject === 'All' 
    ? students 
    : students.filter(student => student.subjects.includes(activeSubject));

  const subjectCounts = {
    'Web2 Basic': students.filter(s => s.subjects.includes('Web2 Basic')).length,
    'Web2 Advance': students.filter(s => s.subjects.includes('Web2 Advance')).length,
    'Web3 Basic': students.filter(s => s.subjects.includes('Web3 Basic')).length,
    'Web3 Advance': students.filter(s => s.subjects.includes('Web3 Advance')).length
  };

  return (
    <div className="bg-gray-100 pt-20 rounded-lg p-10 ">
      <div className="flex justify-between items-center  ">
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

export default Dashboard;