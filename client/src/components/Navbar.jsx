// import { Link, useNavigate } from "react-router-dom";
// import { LayoutDashboard, LogIn, LogOut } from "lucide-react";
// import { toast } from "react-toastify";

// export const Navbar = ({ toggleSidebar }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userid");
//     localStorage.removeItem("username");
//     navigate("/");
//     toast.success("Logout successfully");
//   };

//   const isLoggedIn = !!localStorage.getItem("token");
//   const username = localStorage.getItem("username");

//   return (
//     <nav className="bg-[#FFFFFF] shadow-md border-b border-black sticky lg:relative w-full top-0 left-0">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             {isLoggedIn ? (
//               <div className="flex items-center hover:none absolute lg:relative top-0 right-3">
//                 <img src="aresume.gif" alt="" className="w-24" />
//                 <span className="font-bold text-xl text-black hidden md:block">
//                   𝓑𝓾𝓲𝓵𝓭𝓮𝓻
//                 </span>
//               </div>
//             ) : (
//               <Link to="/" className="flex items-center hover:none">
//                 <img src="aresume.gif" alt="" className="w-24" />
//                 <span className="font-bold text-xl text-black">𝓑𝓾𝓲𝓵𝓭𝓮𝓻</span>
//               </Link>
//             )}
//           </div>
//           <div className="hidden md:flex items-center space-x-4">
//             {isLoggedIn ? (
//               <>
//                 <Link
//                   to="/dashboard"
//                   className="text-black hover:animate-pulse hover:text-black px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-150 ease-in-out"
//                 >
//                   <LayoutDashboard className="h-5 w-5 mr-1" />
//                   <span className="ml-1">Dasboard</span>
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="text-black hover:bg-green-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-150 ease-in-out "
//                 >
//                   <LogOut className="h-5 w-5 mr-1" />
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <Link
//                 to="/"
//                 className="text-black hover:animate-pulse hover:text-black px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-150 ease-in-out"
//               >
//                 <LogIn className="h-5 w-5 mr-1" />
//                 <span className="ml-1">Login</span>
//               </Link>
//             )}
//             {isLoggedIn && (
//               <>
//                 <img src="logomen.png" alt="" className="w-8" />
//                 <span className="font-bold text-xl text-black">{username}</span>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { Link, useNavigate } from "react-router-dom";
import { LayoutDashboard, LogIn, LogOut } from "lucide-react";
import { toast } from "react-toastify";

export const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("username");
    navigate("/");
    toast.success("Logout successfully");
  };

  const isLoggedIn = !!localStorage.getItem("token");
  const username = localStorage.getItem("username");

  return (
    <nav className="bg-[#FFFFFF] shadow-md border-b border-black sticky lg:relative w-full top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4 lg:space-x-6">
            <Link to="/" className="flex items-center">
              <img src="aresume.gif" alt="Logo" className="w-24" />
              <span className="font-bold text-xl text-black hidden md:block">
                𝓑𝓾𝓲𝓵𝓭𝓮𝓻
              </span>
            </Link>
            <button
              className="lg:hidden flex items-center text-black hover:text-black"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Toggle sidebar</span>
              {/* Add an icon for the sidebar toggle if needed */}
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-black hover:animate-pulse hover:text-black px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-150 ease-in-out"
                >
                  <LayoutDashboard className="h-5 w-5 mr-1" />
                  <span className="ml-1">Dasboard</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-black hover:bg-green-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-150 ease-in-out"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/"
                className="text-black hover:animate-pulse hover:text-black px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-150 ease-in-out"
              >
                <LogIn className="h-5 w-5 mr-1" />
                <span className="ml-1">Login</span>
              </Link>
            )}
            {isLoggedIn && (
              <div className="flex items-center space-x-2">
                <img src="logomen.png" alt="User Logo" className="w-8" />
                <span className="font-bold text-xl text-black">{username}</span>
              </div>
            )}
          </div>
          {/* Small screen adjustments */}
          <div className="md:hidden flex items-center space-x-2">
            {isLoggedIn && (
              <>
                <button
                  onClick={handleLogout}
                  className="text-black hover:bg-green-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-150 ease-in-out"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Logout
                </button>
                <div className="flex items-center space-x-2">
                  <img src="logomen.png" alt="User Logo" className="w-8" />
                  <span className="font-bold text-xl text-black">{username}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
