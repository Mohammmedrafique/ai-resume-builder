// import { Route, Routes } from "react-router-dom";
// import { Login } from "./Login";
// import { Register } from "./Register";
// import TextSummarizer from "../pages/TextSummarizer";
// import ResumeView from "../pages/ResumeView";

// const MainRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/home" element={<TextSummarizer />} />
//       <Route path="/" element={<Login />} />
//       <Route path="/view" element={<ResumeView/>}/>
//       <Route path="/register" element={<Register />} />
//     </Routes>
//   );
// };
// //ello
// export default MainRoutes;
import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";
import TextSummarizer from "../pages/TextSummarizer";
import ResumeView from "../pages/ResumeView";
import Dashboard from "../pages/Dashboard"; // Import the Dashboard component

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<TextSummarizer />} />
      <Route path="/" element={<Login />} />
      <Route path="/view" element={<ResumeView />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} /> {/* Add this line */}
    </Routes>
  );
};

export default MainRoutes;
