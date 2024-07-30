// import { useRef } from "react";
// import { jsPDF } from "jspdf";

// const ResumeWithPDFDownload = ({ resume }) => {
//   const resumeRef = useRef(null);

//   const generatePDF = () => {
//     const doc = new jsPDF();

//     doc.html(resumeRef.current, {
//       callback: function (doc) {
//         doc.save("resume.pdf");
//       },
//       x: 15,
//       y: 15,
//       width: 170,
//       windowWidth: 650,
//     });
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8 ">
//       <button
//         onClick={generatePDF}
//         className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
//       >
//         Download Resume as PDF
//       </button>

//       <div
//         ref={resumeRef}
//         className="bg-white p-8 shadow-lg rounded-lg"
//         style={{ width: "650px" }}
//       >
//         <h1
//           style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
//         >
//           {resume.personalInfo.name}
//         </h1>
//         <p style={{ fontSize: "14px", marginBottom: "5px" }}>
//           {resume.personalInfo.email} | {resume.personalInfo.phone}
//         </p>
//         <p style={{ fontSize: "14px", marginBottom: "5px" }}>
//           {resume.personalInfo.address}
//         </p>
//         <p style={{ fontSize: "14px", marginBottom: "5px" }}>
//           LinkedIn: {resume.personalInfo.linkedin}
//         </p>
//         <p style={{ fontSize: "14px", marginBottom: "15px" }}>
//           Portfolio: {resume.personalInfo.portfolio}
//         </p>

//         <h2
//           style={{
//             fontSize: "18px",
//             fontWeight: "bold",
//             marginTop: "15px",
//             marginBottom: "10px",
//           }}
//         >
//           Summary
//         </h2>
//         <p style={{ fontSize: "14px", marginBottom: "15px" }}>
//           {resume.summary}
//         </p>

//         <h2
//           style={{
//             fontSize: "18px",
//             fontWeight: "bold",
//             marginTop: "15px",
//             marginBottom: "10px",
//           }}
//         >
//           Work Experience
//         </h2>
//         {resume.workExperience.map((exp, index) => (
//           <div key={index} style={{ marginBottom: "15px" }}>
//             <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
//               {exp.position} at {exp.company}
//             </h3>
//             <p style={{ fontSize: "14px" }}>
//               {exp.startDate} - {exp.endDate}
//             </p>
//             <p style={{ fontSize: "14px" }}>{exp.description}</p>
//           </div>
//         ))}

//         <h2
//           style={{
//             fontSize: "18px",
//             fontWeight: "bold",
//             marginTop: "15px",
//             marginBottom: "10px",
//           }}
//         >
//           Education
//         </h2>
//         {resume.education.map((edu, index) => (
//           <div key={index} style={{ marginBottom: "15px" }}>
//             <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
//               {edu.degree}
//             </h3>
//             <p style={{ fontSize: "14px" }}>
//               {edu.institution}, {edu.startDate} - {edu.endDate}
//             </p>
//           </div>
//         ))}

//         <h2
//           style={{
//             fontSize: "18px",
//             fontWeight: "bold",
//             marginTop: "15px",
//             marginBottom: "10px",
//           }}
//         >
//           Skills
//         </h2>
//         <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
//           {resume.skills.map((skill, index) => (
//             <li key={index} style={{ fontSize: "14px" }}>
//               {skill}
//             </li>
//           ))}
//         </ul>

//         <h2
//           style={{
//             fontSize: "18px",
//             fontWeight: "bold",
//             marginTop: "15px",
//             marginBottom: "10px",
//           }}
//         >
//           Certifications
//         </h2>
//         {resume.certifications.map((cert, index) => (
//           <div key={index} style={{ marginBottom: "15px" }}>
//             <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
//               {cert.name}
//             </h3>
//             <p style={{ fontSize: "14px" }}>
//               {cert.organization}, {cert.date}
//             </p>
//           </div>
//         ))}

//         <h2
//           style={{
//             fontSize: "18px",
//             fontWeight: "bold",
//             marginTop: "15px",
//             marginBottom: "10px",
//           }}
//         >
//           Projects
//         </h2>
//         {resume.projects.map((project, index) => (
//           <div key={index} style={{ marginBottom: "15px" }}>
//             <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
//               {project.name}
//             </h3>
//             <p style={{ fontSize: "14px" }}>{project.date}</p>
//             <p style={{ fontSize: "14px" }}>{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ResumeWithPDFDownload;
import { useRef } from "react";
import { jsPDF } from "jspdf";

const ResumeWithPDFDownload = ({ resume }) => {
  const resumeRef = useRef(null);

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.html(resumeRef.current, {
      callback: function (doc) {
        doc.save("resume.pdf");
      },
      x: 15,
      y: 15,
      width: 170,
      windowWidth: 650,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <button
        onClick={generatePDF}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Download Resume as PDF
      </button>

      <div
        ref={resumeRef}
        className="bg-white p-8 shadow-lg rounded-lg w-full sm:w-[650px]" // Adjust width for mobile and desktop
      >
        <h1
          className="text-xl font-bold mb-2"
        >
          {resume.personalInfo.name}
        </h1>
        <p className="text-sm mb-1">
          {resume.personalInfo.email} | {resume.personalInfo.phone}
        </p>
        <p className="text-sm mb-1">
          {resume.personalInfo.address}
        </p>
        <p className="text-sm mb-1">
          LinkedIn: {resume.personalInfo.linkedin}
        </p>
        <p className="text-sm mb-4">
          Portfolio: {resume.personalInfo.portfolio}
        </p>

        <h2
          className="text-lg font-bold mt-4 mb-2"
        >
          Summary
        </h2>
        <p className="text-sm mb-4">
          {resume.summary}
        </p>

        <h2
          className="text-lg font-bold mt-4 mb-2"
        >
          Work Experience
        </h2>
        {resume.workExperience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-base font-bold">
              {exp.position} at {exp.company}
            </h3>
            <p className="text-sm">
              {exp.startDate} - {exp.endDate}
            </p>
            <p className="text-sm">{exp.description}</p>
          </div>
        ))}

        <h2
          className="text-lg font-bold mt-4 mb-2"
        >
          Education
        </h2>
        {resume.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-base font-bold">
              {edu.degree}
            </h3>
            <p className="text-sm">
              {edu.institution}, {edu.startDate} - {edu.endDate}
            </p>
          </div>
        ))}

        <h2
          className="text-lg font-bold mt-4 mb-2"
        >
          Skills
        </h2>
        <ul className="list-disc pl-5">
          {resume.skills.map((skill, index) => (
            <li key={index} className="text-sm">
              {skill}
            </li>
          ))}
        </ul>

        <h2
          className="text-lg font-bold mt-4 mb-2"
        >
          Certifications
        </h2>
        {resume.certifications.map((cert, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-base font-bold">
              {cert.name}
            </h3>
            <p className="text-sm">
              {cert.organization}, {cert.date}
            </p>
          </div>
        ))}

        <h2
          className="text-lg font-bold mt-4 mb-2"
        >
          Projects
        </h2>
        {resume.projects.map((project, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-base font-bold">
              {project.name}
            </h3>
            <p className="text-sm">{project.date}</p>
            <p className="text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeWithPDFDownload;
