
// components/StudentRow.js - Student row component
import React from 'react';
import SubjectTag from './subjecttag';

const StudentRow = ({ student }) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.id}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{student.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {student.grade}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex flex-wrap">
          {student.subjects.map((subject) => (
            <SubjectTag key={subject} subject={subject} />
          ))}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-16 bg-gray-200 rounded-full h-2.5">
            <div 
              className={`h-2.5 rounded-full ${
                student.attendance >= 90 ? 'bg-green-500' :
                student.attendance >= 80 ? 'bg-yellow-500' :
                'bg-red-500'
              }`}
              style={{width: `${student.attendance}%`}}
            ></div>
          </div>
          <span className="ml-2 text-sm text-gray-500">{student.attendance}%</span>
        </div>
      </td>
    </tr>
  );
};

export default StudentRow;