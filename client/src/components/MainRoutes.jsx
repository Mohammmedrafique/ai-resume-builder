// import { Route, Routes } from "react-router-dom";
// import { Login } from "./Login";
// import { Register } from "./Register";
// import Dashboard from "../pages/Dashboard";
// import ResumeForm from "../pages/ResumeForm";

// const MainRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/home" element={<ResumeForm />} />
//       <Route path="/" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//     </Routes>
//   );
// };

// export default MainRoutes;
import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";
import Dashboard from "../pages/Dashboard";
import ResumeForm from "../pages/ResumeForm";
import ProtectedRoute from "./ProtectedRoute"; // Import the ProtectedRoute component

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<ProtectedRoute element={ResumeForm} />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={<ProtectedRoute element={Dashboard} />}
      />
    </Routes>
  );
};

export default MainRoutes;
