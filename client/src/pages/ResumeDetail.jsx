const ResumeDetail = ({ resume, onClose }) => {
  // Function to generate a summary from work experience
  const generateSummary = (workExperience) => {
    const latestJob = workExperience[0];
    return `Experienced ${latestJob.position} with a background in ${
      latestJob.company
    }. Skilled in ${resume.skills.join(", ")}.`;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <button
        onClick={onClose}
        className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300 mb-4"
      >
        Back
      </button>
      <header className="border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          {resume.personalInfo?.name || "Name Not Available"}
        </h1>
        <p className="text-gray-600">
          {resume.personalInfo?.email || "Email Not Available"} |{" "}
          {resume.personalInfo?.phone || "Phone Not Available"}
        </p>
        <p className="text-gray-600">
          {resume.personalInfo?.address || "Location Not Available"} |
          <a
            href={resume.personalInfo?.linkedin || "#"}
            className="text-blue-500 hover:underline"
          >
            {resume.personalInfo?.linkedin || "LinkedIn Not Available"}
          </a>
        </p>
      </header>

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">
          Summary
        </h2>
        <p className="text-gray-700">
          {generateSummary(resume.workExperience)}
        </p>
      </section>

      {/* Work Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">
          Work Experience
        </h2>
        {resume.workExperience?.map((exp, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              {exp.position || "Position Not Available"}
            </h3>
            <p className="text-gray-600">
              {exp.company || "Company Not Available"} |{" "}
              {new Date(exp.startDate).toLocaleDateString()} -{" "}
              {new Date(exp.endDate).toLocaleDateString()}
            </p>
            <p className="text-gray-700">
              {exp.description || "Description Not Available"}
            </p>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">
          Education
        </h2>
        {resume.education?.map((edu, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              {edu.institution || "Institution Not Available"}
            </h3>
            <p className="text-gray-600">
              {edu.degree || "Degree Not Available"} |{" "}
              {new Date(edu.startDate).toLocaleDateString()} -{" "}
              {new Date(edu.endDate).toLocaleDateString()}
            </p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">
          Skills
        </h2>
        <p className="text-gray-700">{(resume.skills || []).join(", ")}</p>
      </section>

      {/* Certifications */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">
          Certifications
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          {(resume.certifications || []).map((cert, idx) => (
            <li key={idx}>{cert.name || "Certification Not Available"}</li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">
          Projects
        </h2>
        {resume.projects?.map((proj, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              {proj.name || "Project Not Available"}
            </h3>
            <p className="text-gray-600">{proj.date || "Date Not Available"}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ResumeDetail;
