import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import { useDispatch } from "react-redux";

import { toggleVisibility } from "../store/slices/profileVisibilitySlice";

import user from "../images/user.png";
import logo from "../images/logo/logo.png";
import logoHover from "../images/logo/logo-hover.png";

import CustomNavLink from "./CustomNavLink";
import Button from "./Button";

function Header() {
  const [hovered, setHovered] = useState(false);
  const { isAuthenticated, signinRedirect } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleHover() {
    setHovered((prevState) => !prevState);
  }

  function login() {
    signinRedirect();
  }

  return (
    <header className="w-full bg-header backdrop-blur-md fixed top-0 left-0 z-20">
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
            <button
              onClick={() => dispatch(toggleVisibility())}
              className="font-extrabold uppercase flex items-center hover:text-primary-300"
            >
              Профіль
              <img alt="Профіль" src={user} className="w-6 h-6 ml-2" />
            </button>
          ) : (
              <button className="font-extrabold uppercase hover:text-primary-300" onClick={login}>
                Увійти
              </button>
          )}
          <Button onClick={() => navigate("createApplication")}>
            Створити оголошення
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
