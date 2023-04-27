import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import { Link } from "react-router-dom";

import user from "../images/user.png";
import logo from "../images/logo/logo.png";
import logoHover from "../images/logo/logo-hover.png";

import CustomNavLink from "./CustomNavLink";
import Button from "./Button";

function Header() {
  const [hovered, setHovered] = useState(false);
  const { isAuthenticated, signinRedirect } = useAuth();
  const navigate = useNavigate();

  function handleHover() {
    setHovered((prevState) => !prevState);
  }

  function login() {
    signinRedirect();
  }

  return (
    <header className="bg-header backdrop-blur-md sticky top-0 left-0">
      <div className="container max-w-xl px-4 py-5">
        <nav className="flex justify-between items-center">
          <Link to="/" onMouseEnter={handleHover} onMouseLeave={handleHover}>
            {hovered ? (
              <img src={logoHover} alt="logo" />
            ) : (
              <img src={logo} alt="logo" />
            )}
          </Link>
          <CustomNavLink label="Оголошення" path="/" />
          <CustomNavLink label="Про нас" path="/aboutUs" />
          {isAuthenticated ? (
            <CustomNavLink label="Профіль" path="/userProfile" />
          ) : (
            <button
              onClick={login}
              className="font-bold uppercase flex items-center hover:text-primary-300"
            >
              Профіль
              <img alt="Профіль" src={user} className="w-6 h-6 ml-2" />
            </button>
          )}
          <Button onClick={() => navigate("/createPost")}>
            Створити оголошення
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
