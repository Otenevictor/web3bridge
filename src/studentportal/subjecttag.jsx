// components/SubjectTag.js - Subject tag component
import React from 'react';

const SubjectTag = ({ subject }) => {
  const getSubjectStyle = (subject) => {
    switch(subject) {
      case 'Web2 Basic':
        return 'bg-green-100 text-green-800';
      case 'Web2 Advance':
        return 'bg-purple-100 text-purple-800';
      case 'Web3 Basic':
        return 'bg-blue-100 text-blue-800';
      case 'Web3 Advance':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`px-2 py-1 mr-1 mb-1 text-xs rounded-full ${getSubjectStyle(subject)}`}>
      {subject}
    </span>
  );
};

export default SubjectTag;
