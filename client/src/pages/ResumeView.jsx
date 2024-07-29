import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResumeView = () => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await axios.get('http://localhost:5002/resumes');
        setResumes(response.data);
      } catch (error) {
        console.error('Error fetching resumes:', error);
      }
    };

    fetchResumes();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg mt-10">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Saved Resumes</h2>
      {resumes?.map((resume, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
          <header className="border-b border-gray-300 pb-4 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{resume.personalInfo?.name || 'Name Not Available'}</h1>
            <p className="text-gray-600">{resume.personalInfo?.email || 'Email Not Available'} | {resume.personalInfo?.phone || 'Phone Not Available'}</p>
            <p className="text-gray-600">
              {resume.personalInfo?.location || 'Location Not Available'} | 
              <a href={resume.personalInfo?.linkedin || '#'} className="text-blue-500 hover:underline">{resume.personalInfo?.linkedin || 'LinkedIn Not Available'}</a>
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">Summary</h2>
            <p className="text-gray-700">{resume.summary || 'Summary Not Available'}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">Key Skills</h2>
            <p className="text-gray-700">{(resume.keySkills || []).join(' • ')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">Technical Skills</h2>
            <p className="text-gray-700">{(resume.technicalSkills || []).join(', ')}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">Professional Experience</h2>
            {resume.workExperience?.map((exp, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800">{exp.position || 'Position Not Available'}</h3>
                <p className="text-gray-600">{exp.company || 'Company Not Available'} | {new Date(exp.startDate).toLocaleDateString()} - {new Date(exp.endDate).toLocaleDateString()}</p>
                <p className="text-gray-700">{exp.description || 'Description Not Available'}</p>
              </div>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">Education</h2>
            {resume.education?.map((edu, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800">{edu.institution || 'Institution Not Available'}</h3>
                <p className="text-gray-600">{edu.degree || 'Degree Not Available'} | {new Date(edu.startDate).toLocaleDateString()} - {new Date(edu.endDate).toLocaleDateString()}</p>
              </div>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">Certifications</h2>
            <ul className="list-disc list-inside text-gray-700">
              {(resume.certifications || []).map((cert, idx) => (
                <li key={idx}>{cert || 'Certification Not Available'}</li>
              ))}
            </ul>
          </section>
        </div>
      ))}
    </div>
  );
};

export default ResumeView;
