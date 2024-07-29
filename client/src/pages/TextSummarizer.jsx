import React, { useState } from "react";
import axios from "axios";
import { FaRegLightbulb } from "react-icons/fa"; // Example icon for generating suggestions
import ResumePreview from "./ResumePreview";
const ResumeForm = () => {
  const [resume, setResume] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      portfolio: "",
    },
    workExperience: [
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    education: [{ institution: "", degree: "", startDate: "", endDate: "" }],
    skills: [""],
    certifications: [{ name: "", organization: "", date: "" }],
    projects: [{ name: "", description: "", date: "" }],
    summary: "",
  });

  const [jobDescription, setJobDescription] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e, section, index = null) => {
    const { name, value } = e.target;
    if (section === "personalInfo") {
      setResume({
        ...resume,
        personalInfo: { ...resume.personalInfo, [name]: value },
      });
    } else if (
      section === "workExperience" ||
      section === "education" ||
      section === "certifications" ||
      section === "projects"
    ) {
      const newArray = resume[section].map((item, idx) =>
        idx === index ? { ...item, [name]: value } : item
      );
      setResume({ ...resume, [section]: newArray });
    } else if (section === "skills") {
      const newArray = [...resume.skills];
      newArray[index] = value;
      setResume({ ...resume, skills: newArray });
    } else if (section === "summary") {
      setResume({ ...resume, summary: value });
    }
  };

  const handleAddItem = (section) => {
    const newItem =
      section === "workExperience"
        ? {
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            description: "",
          }
        : section === "education"
        ? { institution: "", degree: "", startDate: "", endDate: "" }
        : section === "certifications"
        ? { name: "", organization: "", date: "" }
        : section === "projects"
        ? { name: "", description: "", date: "" }
        : "";
    setResume({ ...resume, [section]: [...resume[section], newItem] });
  };

  const handleRemoveItem = (section, index) => {
    const newArray = resume[section].filter((_, idx) => idx !== index);
    setResume({ ...resume, [section]: newArray });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5002/resumes", resume);
      alert("Resume saved successfully!");
    } catch (error) {
      alert("Failed to save resume!");
    }
  };

  const handleGenerateSuggestions = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5002/generate-suggestions",
        { jobDescription }
      );
      setSuggestions(response.data.suggestions);
    } catch (error) {
      console.error("Failed to generate suggestions:", error);
    }
  };

  return (
    <div className="flex gap-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg border border-gray-200"
      >
        <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <input
            type="text"
            name="name"
            value={resume.personalInfo.name}
            onChange={(e) => handleChange(e, "personalInfo")}
            placeholder="Name"
            className="border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={resume.personalInfo.email}
            onChange={(e) => handleChange(e, "personalInfo")}
            placeholder="Email"
            className="border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            value={resume.personalInfo.phone}
            onChange={(e) => handleChange(e, "personalInfo")}
            placeholder="Phone"
            className="border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="text"
            name="address"
            value={resume.personalInfo.address}
            onChange={(e) => handleChange(e, "personalInfo")}
            placeholder="Address"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            name="linkedin"
            value={resume.personalInfo.linkedin}
            onChange={(e) => handleChange(e, "personalInfo")}
            placeholder="LinkedIn Profile URL"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            name="portfolio"
            value={resume.personalInfo.portfolio}
            onChange={(e) => handleChange(e, "personalInfo")}
            placeholder="Portfolio URL"
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        {resume.workExperience.map((exp, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-4 mb-4 border p-4 rounded border-gray-300"
          >
            <input
              type="text"
              name="company"
              value={exp.company}
              onChange={(e) => handleChange(e, "workExperience", index)}
              placeholder="Company"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="text"
              name="position"
              value={exp.position}
              onChange={(e) => handleChange(e, "workExperience", index)}
              placeholder="Position"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="date"
              name="startDate"
              value={exp.startDate}
              onChange={(e) => handleChange(e, "workExperience", index)}
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="date"
              name="endDate"
              value={exp.endDate}
              onChange={(e) => handleChange(e, "workExperience", index)}
              className="border border-gray-300 p-2 rounded"
              required
            />
            <textarea
              name="description"
              value={exp.description}
              onChange={(e) => handleChange(e, "workExperience", index)}
              placeholder="Description"
              className="border border-gray-300 p-2 rounded"
              required
            ></textarea>
            <button
              type="button"
              onClick={() => handleRemoveItem("workExperience", index)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddItem("workExperience")}
          className="bg-blue-500 text-white p-2 rounded mb-4"
        >
          Add Work Experience
        </button>

        {/* Education */}
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        {resume.education.map((edu, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-4 mb-4 border p-4 rounded border-gray-300"
          >
            <input
              type="text"
              name="institution"
              value={edu.institution}
              onChange={(e) => handleChange(e, "education", index)}
              placeholder="Institution"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="text"
              name="degree"
              value={edu.degree}
              onChange={(e) => handleChange(e, "education", index)}
              placeholder="Degree"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="date"
              name="startDate"
              value={edu.startDate}
              onChange={(e) => handleChange(e, "education", index)}
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="date"
              name="endDate"
              value={edu.endDate}
              onChange={(e) => handleChange(e, "education", index)}
              className="border border-gray-300 p-2 rounded"
              required
            />
            <button
              type="button"
              onClick={() => handleRemoveItem("education", index)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddItem("education")}
          className="bg-blue-500 text-white p-2 rounded mb-4"
        >
          Add Education
        </button>

        {/* Certifications */}
        <h2 className="text-2xl font-bold mb-4">Certifications</h2>
        {resume.certifications.map((cert, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-4 mb-4 border p-4 rounded border-gray-300"
          >
            <input
              type="text"
              name="name"
              value={cert.name}
              onChange={(e) => handleChange(e, "certifications", index)}
              placeholder="Certification Name"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="text"
              name="organization"
              value={cert.organization}
              onChange={(e) => handleChange(e, "certifications", index)}
              placeholder="Organization"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="date"
              name="date"
              value={cert.date}
              onChange={(e) => handleChange(e, "certifications", index)}
              className="border border-gray-300 p-2 rounded"
              required
            />
            <button
              type="button"
              onClick={() => handleRemoveItem("certifications", index)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddItem("certifications")}
          className="bg-blue-500 text-white p-2 rounded mb-4"
        >
          Add Certification
        </button>

        {/* Projects */}
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        {resume.projects.map((proj, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-4 mb-4 border p-4 rounded border-gray-300"
          >
            <input
              type="text"
              name="name"
              value={proj.name}
              onChange={(e) => handleChange(e, "projects", index)}
              placeholder="Project Name"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="text"
              name="date"
              value={proj.date}
              onChange={(e) => handleChange(e, "projects", index)}
              placeholder="Project Date"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <textarea
              name="description"
              value={proj.description}
              onChange={(e) => handleChange(e, "projects", index)}
              placeholder="Project Description"
              className="border border-gray-300 p-2 rounded"
              required
            ></textarea>
            <button
              type="button"
              onClick={() => handleRemoveItem("projects", index)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddItem("projects")}
          className="bg-blue-500 text-white p-2 rounded mb-4"
        >
          Add Project
        </button>

        {/* Summary */}
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <textarea
          name="summary"
          value={resume.summary}
          onChange={(e) => handleChange(e, "summary")}
          placeholder="Write a brief summary about yourself"
          className="border border-gray-300 p-2 rounded w-full mb-4"
        ></textarea>
        <button
          type="button"
          onClick={handleGenerateSuggestions}
          className="bg-yellow-500 text-white p-2 rounded flex items-center gap-2"
        >
          <FaRegLightbulb /> Generate Suggestions
        </button>
        {suggestions.length > 0 && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Suggestions:</h3>
            <ul className="list-disc list-inside pl-4">
              {suggestions.map((suggestion, index) => (
                <li key={index} className="text-gray-700">
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded w-full mt-4"
        >
          Save Resume
        </button>
      </form>
      <ResumePreview resume={resume} />
    </div>
  );
};

export default ResumeForm;
