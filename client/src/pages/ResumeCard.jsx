// const ResumeCard = ({ resume, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className="cursor-pointer bg-white p-4 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
//     >
//       <h3 className="text-xl font-semibold text-gray-800">
//         {resume.personalInfo?.name || "Name Not Available"}
//       </h3>
//       <p className="text-gray-600">
//         {resume.personalInfo?.email || "Summary Not Available"}
//       </p>
//       <p className="text-gray-600">
//         {resume.personalInfo?.phone || "Summary Not Available"}
//       </p>
//     </div>
//   );
// };

// export default ResumeCard;
import React from "react";
import PropTypes from "prop-types";

const ResumeCard = ({ resume, onClick, onEdit, onDelete }) => {
  return (
    <div className="border p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">
        {resume.personalInfo?.name || "Name Not Available"}
      </h3>
      <p className="text-gray-600">
        {resume.personalInfo?.email || "Summary Not Available"}
      </p>
      <p className="text-gray-600">
        {resume.personalInfo?.phone || "Summary Not Available"}
      </p>
      <div className="flex justify-between">
        <button
          onClick={onClick}
          className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
        >
          View
        </button>
        <button
          onClick={() => onEdit(resume)}
          className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(resume._id)}
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

// Define prop types for ResumeCard
ResumeCard.propTypes = {
  resume: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ResumeCard;
