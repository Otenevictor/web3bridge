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

export default Dashboard;