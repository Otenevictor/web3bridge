// components/SubjectNavigation.js - Subject navigation component
import React from 'react';

const SubjectNavigation = ({ activeSubject, setActiveSubject, subjectCounts, totalStudents }) => {
  return (
    <div className="flex flex-wrap mb-6 bg-white p-3 rounded-md shadow-sm">
      <button
        onClick={() => setActiveSubject('All')}
        className={`mr-2 mb-2 px-3 py-1 rounded-md ${activeSubject === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        All Students ({totalStudents})
      </button>
      <button
        onClick={() => setActiveSubject('Web2 Basic')}
        className={`mr-2 mb-2 px-3 py-1 rounded-md ${activeSubject === 'Web2 Basic' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Web2 Basic ({subjectCounts['Web2 Basic']})
      </button>
      <button
        onClick={() => setActiveSubject('Web2 Advance')}
        className={`mr-2 mb-2 px-3 py-1 rounded-md ${activeSubject === 'Web2 Advance' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Web2 Advance ({subjectCounts['Web2 Advance']})
      </button>
      <button
        onClick={() => setActiveSubject('Web3 Basic')}
        className={`mr-2 mb-2 px-3 py-1 rounded-md ${activeSubject === 'Web3 Basic' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Web3 Basic ({subjectCounts['Web3 Basic']})
      </button>
      <button
        onClick={() => setActiveSubject('Web3 Advance')}
        className={`mr-2 mb-2 px-3 py-1 rounded-md ${activeSubject === 'Web3 Advance' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Web3 Advance ({subjectCounts['Web3 Advance']})
      </button>
    </div>
  );
};

export default SubjectNavigation;