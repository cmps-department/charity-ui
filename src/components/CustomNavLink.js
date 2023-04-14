import { NavLink } from "react-router-dom";

function CustomNavLink({ label, path }) {
  return (
    <NavLink
      className={({ isActive }) =>
        "font-bold uppercase " + (isActive ? "text-primary-200" : "")
      }
      to={path}
    >
      {label}
    </NavLink>
  );
}

export default CustomNavLink;
