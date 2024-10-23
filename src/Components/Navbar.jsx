import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header
        className="header"
      >
        <nav className="flex justify-end text-lg gap-7 font-medium items-end ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            Contact
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
