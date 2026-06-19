import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  FaThLarge,
  FaFolder,
  FaClipboardList,
  FaPen,
  FaStar,
  FaQuestionCircle,
  FaUsers,
  FaCog,
} from "react-icons/fa";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaThLarge />,
      path: "/sideBar/dashboard",
    },
    {
      name: "Projects",
      icon: <FaFolder />,
      path: "/sideBar/project",
    },
    {
      name: "Our Services",
      icon: <FaClipboardList />,
      path: "/sideBar/services",
    },
    {
      name: "Blogs",
      icon: <FaPen />,
      path: "/sideBar/blogs",
    },
    {
      name: "Testimonial",
      icon: <FaStar />,
      path: "/sideBar/testimonial",
    },
    {
      name: "Inquiries",
      icon: <FaQuestionCircle />,
      path: "/sideBar/inquaries",
    },
    {
      name: "Team",
      icon: <FaUsers />,
      path: "/sideBar/team",
    },
  ];

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <aside className="w-[340px] bg-[#242424] text-white flex flex-col">
        
        {/* Logo */}
        <div className="px-12 pt-12 pb-8">
          <h1 className="text-6xl font-bold">Demics</h1>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-8 px-12">
          {menuItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              location.pathname.startsWith(item.path + "/");

            return (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className="flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-5">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-[20px] font-medium">
                    {item.name}
                  </span>
                </div>

                {isActive && (
                  <div className="w-[3px] h-8 bg-white rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Settings */}
        <div className="mt-auto px-12 pb-12">
          <button className="flex items-center gap-5 text-[20px]">
            <FaCog />
            <span>Settings</span>
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-black overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default SideBar;



// import React from 'react'
// import { Outlet, useNavigate } from 'react-router-dom'

// const SideBar = () => {
//     const navigate=useNavigate()
//   return (
//    <div className="flex min-h-screen">
//   <div className='flex flex-col items-start'>
//     <button onClick={()=>navigate("/sideBar/dashboard")}>Dashboard</button>
//     <button onClick={()=>navigate("/sideBar/project")}>Projects</button>
//     <button onClick={()=>{navigate("/sideBar/services")}}>Our Services</button>
//     <button onClick={()=>{navigate("/sideBar/blogs")}}>Blogs</button>
//     <button onClick={()=>{navigate("/sideBar/testimonial")}}>Testimonial</button>
//     <button onClick={()=>{navigate("/sideBar/inquaries")}}>Inquiries</button>
//     <button onClick={()=>{navigate("/sideBar/team")}}>Team</button>
//   </div>
//   <div className='flex-1'>
//     <Outlet/>
//   </div>
// </div>
//   )
// }

// export default SideBar