import { NavLink } from "react-router-dom";

function CustomNavLink({ label, path }) {
  return (
    <NavLink
      className={({ isActive }) =>
        "font-extrabold uppercase hover:text-primary-300 " + (isActive ? "text-primary-300" : "")
      }
      to={path}
    >
      {label}
    </NavLink>
  );
}

export default CustomNavLink;
