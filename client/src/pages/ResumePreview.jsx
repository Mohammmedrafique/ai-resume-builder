const ResumePreview = ({ resume }) => {
  // Function to generate a summary from work experience
  const generateSummary = (workExperience) => {
    if (workExperience.length === 0) return "No work experience provided.";

    const latestJob = workExperience[0];
    return `Experienced ${latestJob.position} at ${
      latestJob.company
    }. Skilled in ${resume.skills.join(", ")}.`;
  };

  return (
    <div className="w-full max-w-full p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Resume Preview</h2>

      {/* Personal Information */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-700">
          {resume.personalInfo.name}
        </h3>
        <p className="text-gray-600">
          {resume.personalInfo.email} | {resume.personalInfo.phone}
        </p>
        <p className="text-gray-600">{resume.personalInfo.address}</p>
        <p className="text-gray-600">
          LinkedIn:{" "}
          <a href={resume.personalInfo.linkedin} className="text-blue-600">
            {resume.personalInfo.linkedin}
          </a>
        </p>
        <p className="text-gray-600">
          Portfolio:{" "}
          <a href={resume.personalInfo.portfolio} className="text-blue-600">
            {resume.personalInfo.portfolio}
          </a>
        </p>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-700">Summary</h3>
        <p className="text-gray-700">
          {resume.summary || generateSummary(resume.workExperience)}
        </p>
      </div>

      {/* Work Experience */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-700">
          Work Experience
        </h3>
        {resume.workExperience.length === 0 ? (
          <p className="text-gray-600">No work experience provided.</p>
        ) : (
          resume.workExperience.map((exp, index) => (
            <div
              key={index}
              className="mb-4 p-4 border border-gray-300 rounded"
            >
              <h4 className="text-xl font-semibold">
                {exp.position} at {exp.company}
              </h4>
              <p className="text-gray-600">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          ))
        )}
      </div>

      {/* Education */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-700">Education</h3>
        {resume.education.length === 0 ? (
          <p className="text-gray-600">No education information provided.</p>
        ) : (
          resume.education.map((edu, index) => (
            <div
              key={index}
              className="mb-4 p-4 border border-gray-300 rounded"
            >
              <h4 className="text-xl font-semibold">
                {edu.degree} from {edu.institution}
              </h4>
              <p className="text-gray-600">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-700">Skills</h3>
        {resume.skills.length === 0 ? (
          <p className="text-gray-600">No skills provided.</p>
        ) : (
          <ul className="list-disc list-inside">
            {resume.skills.map((skill, index) => (
              <li key={index} className="text-gray-700">
                {skill}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Certifications */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-700">Certifications</h3>
        {resume.certifications.length === 0 ? (
          <p className="text-gray-600">No certifications provided.</p>
        ) : (
          resume.certifications.map((cert, index) => (
            <div
              key={index}
              className="mb-4 p-4 border border-gray-300 rounded"
            >
              <h4 className="text-xl font-semibold">{cert.name}</h4>
              <p className="text-gray-600">
                {cert.organization} | {cert.date}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Projects */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-700">Projects</h3>
        {resume.projects.length === 0 ? (
          <p className="text-gray-600">No projects provided.</p>
        ) : (
          resume.projects.map((proj, index) => (
            <div
              key={index}
              className="mb-4 p-4 border border-gray-300 rounded"
            >
              <h4 className="text-xl font-semibold">{proj.name}</h4>
              <p className="text-gray-600">{proj.date}</p>
              <p className="text-gray-700 mt-2">{proj.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
