import { NavLink } from "react-router-dom";
import { useAuth } from "react-oidc-context";

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
          <CustomNavLink label="Логотип" path="/" />
          <CustomNavLink label="Оголошення" path="/posts" />
          <CustomNavLink label="Про нас" path="/aboutUs" />
          {isAuthenticated ? (
            <CustomNavLink label="Профіль" path="/userProfile" />
          ) : (
            <button
              onClick={login}
              className="font-bold uppercase"
            >
              Увійти
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
