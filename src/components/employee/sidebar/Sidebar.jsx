import { Link } from "react-router-dom";
import { useState } from "react";

export const Sidebar = () => {
  const [active, setActive] = useState(""); // Initialize active state for tracking active link

  // Function to set the active link based on the link clicked
  const toggleActive = (path) => {
    setActive(path); // Set the active path
  };
  // const activeMenu = "bg-secondary text-primary";

  return (
    <>
      <aside className="fixed top-16 left-0 h-full w-64 bg-primary-500 text-secondary flex flex-col">
        <div className="w-full h-full py-4">
          <h4 className="ms-3">Dashboard</h4>
          <div id="attendance" className="flex flex-col mt-2 w-full bg-primary">
            <Link
              to="/"
              onClick={() => toggleActive("/")}
              className={`py-2.5 ps-7 hover:bg-secondary hover:text-primary transition ${
                active === "/" ? "bg-secondary text-primary" : ""
              }`}
            >
              Dashboard
            </Link>
          </div>

          <h4 className="ms-3">Attendance</h4>
          <div id="attendance" className="flex flex-col mt-2 w-full bg-primary">
            <Link
              to="/absences"
              onClick={() => toggleActive("/absences")}
              className={`py-2.5 ps-7 hover:bg-secondary hover:text-primary transition ${
                active === "/absences" ? "bg-secondary text-primary" : ""
              }`}
            >
              Absences
            </Link>
            <Link
              to="/maternity-paternity"
              onClick={() => toggleActive("/maternity-paternity")}
              className={`py-2.5 ps-7 hover:bg-secondary hover:text-primary transition ${
                active === "/maternity-paternity" ? "bg-secondary text-primary" : ""
              }`}
            >
              Maternity/Paternity Leave
            </Link>
            <Link
              to="/sick-leave"
              onClick={() => toggleActive("/sick-leave")}
              className={`py-2.5 ps-7 hover:bg-secondary hover:text-primary transition ${
                active === "/sick-leave" ? "bg-secondary text-primary" : ""
              }`}
            >
              Sick Leave
            </Link>
            <Link
              to="/vacation-leave"
              onClick={() => toggleActive("/vacation-leave")}
              className={`py-2.5 ps-7 hover:bg-secondary hover:text-primary transition ${
                active === "/vacation-leave" ? "active" : ""
              }`}
            >
              Vacation Leave
            </Link>
          </div>

          <h4 className="ms-3 mt-3">Engagement & Communication</h4>
          <div id="attendance" className="flex flex-col mt-2 w-full bg-primary">
            <Link
              to="/survey"
              onClick={() => toggleActive("/survey")}
              className={`py-2.5 ps-7 hover:bg-secondary hover:text-primary transition ${
                active === "/survey" ? "active" : ""
              }`}
            >
              Surveys & Polls
            </Link>
            <Link
              to="/announcement"
              onClick={() => toggleActive("/announcement")}
              className={`py-2.5 ps-7 hover:bg-secondary hover:text-primary transition ${
                active === "/announcement" ? "active" : ""
              }`}
            >
              Announcements
            </Link>
            <Link
              to="/recognition"
              onClick={() => toggleActive("/recognition")}
              className={`py-2.5 ps-7 hover:bg-secondary hover:text-primary transition ${
                active === "/recognition" ? "active" : ""
              }`}
            >
              Recognition & Awards
            </Link>
          </div>

          <h4 className="ms-3 mt-3">My Account</h4>
          <div id="attendance" className="flex flex-col mt-2 w-full bg-primary">
            <a
              href="#"
              className="py-2.5 ps-7 hover:bg-secondary hover:text-primary transition"
            >
              Settings
            </a>
          </div>
        </div>

        <button
          type="button"
          className="fixed bottom-0 left-0 w-64 text-center bg-primary py-2.5 hover:bg-secondary hover:text-primary transition"
        >
          Logout
        </button>
      </aside>
    </>
  );
};
