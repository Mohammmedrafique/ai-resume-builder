import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ResumeCard from "./ResumeCard";
import ResumeDetail from "./ResumeDetail";

const Dashboard = () => {
  const [resumes, setResumes] = useState([]);
  const [selectedResume, setSelectedResume] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await axios.get("http://localhost:5002/resumes");
        setResumes(response.data);
      } catch (error) {
        console.error("Error fetching resumes:", error);
      }
    };

    fetchResumes();
  }, []);

  const handleResumeClick = (resume) => {
    setSelectedResume(resume);
    setShowDetail(true);
  };

  const handleEditClick = (resume) => {
    navigate(`/edit/${resume._id}`);
  };

  const handleDeleteClick = async (resumeId) => {
    try {
      await axios.delete(`http://localhost:5002/resumes/${resumeId}`);
      setResumes(resumes.filter((resume) => resume._id !== resumeId));
    } catch (error) {
      console.error("Error deleting resume:", error);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between mb-6">
          <button
            onClick={() => navigate("/home")}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Create Resume
          </button>
        </div>

        {showDetail ? (
          <ResumeDetail
            resume={selectedResume}
            onClose={() => setShowDetail(false)}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumes.map((resume) => (
              <ResumeCard
                key={resume._id}
                resume={resume}
                onClick={() => handleResumeClick(resume)}
                onEdit={handleEditClick}
                onDelete={handleDeleteClick}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
