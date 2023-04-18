import { NavLink } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import user from "../images/user.png";
import logo from "../images/logo.png";

import CustomNavLink from "./CustomNavLink";

function Header() {
    const { isAuthenticated, signinRedirect } = useAuth();

    function login() {
        signinRedirect();
    }

  return (
    <header className="bg-bg-100 mb-[60px]">
      <div className="container px-6 py-5">
        <nav className="flex justify-between items-center">
        <CustomNavLink path="/posts">
          <img src={logo} alt="Логотип" /></CustomNavLink>
          <CustomNavLink label="Оголошення" path="/posts" />
          <CustomNavLink label="Про нас" path="/aboutUs" />
          {isAuthenticated ? (
            <CustomNavLink label="Профіль" path="/userProfile" />
          ) : (
            <button
            onClick={login}
            className="font-bold uppercase flex items-center"
          >
            <img
              alt="Профіль"
              img src={user}
              className="w-6 h-6 mr-2" 
            />
            Профіль
          </button>
          )}
          <NavLink
            className="max-w-[300px] w-full font-bold uppercase bg-primary-100 text-center py-4 rounded-xl"
            to="/createPost"
          >
            Створити оголошення
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
