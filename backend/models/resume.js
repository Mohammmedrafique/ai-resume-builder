// models/resume.js
const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  personalInfo: {
    name: String,
    email: String,
    phone: String,
  },
  workExperience: [
    {
      company: String,
      position: String,
      startDate: Date,
      endDate: Date,
      description: String,
    },
  ],
  education: [
    {
      institution: String,
      degree: String,
      startDate: Date,
      endDate: Date,
    },
  ],
  skills: [String],
});

const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;
