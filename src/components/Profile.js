import { NavLink, Link } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import { useDispatch } from "react-redux";

import { toggleVisibility } from "../store/slices/profileVisibilitySlice";

import profile from "../images/profile.png";

function Profile() {
    const auth = useAuth();
    const dispatch = useDispatch();

  function logout() {
    auth.signoutRedirect({
      post_logout_redirect_uri: process.env.REACT_APP_REDIRECT_URL,
    });
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-30" onClick={() => dispatch(toggleVisibility())}>
      <div className="max-w-[456px] w-full bg-blur backdrop-blur-md border rounded-3xl px-3 pt-5 pb-3 fixed right-52 top-28 z-20">
        <div className="text-center mb-5">
          <img className="mx-auto mb-5" src={profile} alt="profile" />
          <p className="text-xl font-bold">Павленко Павло</p>
        </div>
        <div className="bg-primary-100 rounded-xl py-6 px-8 flex text-primary-300 mb-5">
          <Link to="/favorites" className="flex mr-8">
            <span className="inline-block w-[92px] mr-8">
              Збережено оголошень:
            </span>
            <span className="text-[42px] leading-none">8</span>
          </Link>
          <div className="border-l border-primary-300" />
          <Link to="/myPosts" className="flex ml-8">
            <span className="inline-block w-[92px] mr-8">
              Створено оголошень:
            </span>
            <span className="text-[42px] leading-none">5</span>
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <NavLink
            to="/messages"
            className="hover:text-primary-300 flex justify-between"
          >
            <span>Повідомлення</span>
            <span className="bg-primary-100 rounded-3xl px-3.5">122</span>
          </NavLink>
          <NavLink to="/settings" className="hover:text-primary-300">
            Налаштування
          </NavLink>
          <NavLink to="/favorites" className="hover:text-primary-300">
            Обране
          </NavLink>
          <NavLink to="myPosts" className="hover:text-primary-300">
            Мої оголошення
          </NavLink>
          <NavLink className="hover:text-primary-300" onClick={logout}>
            Вийти
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Profile;
