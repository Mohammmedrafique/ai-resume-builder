import React from 'react';

const ResumeCard = ({ resume, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white p-4 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold text-gray-800">{resume.personalInfo?.name || 'Name Not Available'}</h3>
      <p className="text-gray-600">{resume.summary?.substring(0, 100) + '...' || 'Summary Not Available'}</p>
    </div>
  );
};

export default ResumeCard;
