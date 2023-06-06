import { NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import useUserRole from "../hooks/useUserRole";

import { toggleVisibility } from "../store/slices/profileVisibilitySlice";

import profile from "../images/profile.png";

function Profile() {
  const { auth, isAdmin } = useUserRole();
  const dispatch = useDispatch();

  function logout() {
    auth.signoutRedirect({
      post_logout_redirect_uri: process.env.REACT_APP_REDIRECT_URL,
    });
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-30"
      onClick={() => dispatch(toggleVisibility())}
    >
      <div className="max-w-[456px] w-full bg-blur backdrop-blur-md border rounded-3xl px-3 pt-5 pb-3 fixed right-52 top-28 z-20">
        <div className="text-center mb-5">
          <img className="mx-auto mb-5" src={profile} alt="profile" />
          <p className="text-xl font-bold">{`${auth.user.profile.given_name} ${auth.user.profile.family_name}`}</p>
        </div>
        <div className="bg-primary-100 rounded-xl py-6 px-8 flex text-primary-300 mb-5">
          {isAdmin ? (
            <Link
              to="moderatedApplications"
              className="flex items-center mr-8"
            >
              <span className="inline-block mr-8">Оголошень на розгляд:</span>
              <span className="text-[42px] leading-none">8</span>
            </Link>
          ) : (
            <>
              <Link to="favorites" className="flex mr-8">
                <span className="inline-block w-[92px] mr-8">
                  Збережено оголошень:
                </span>
                <span className="text-[42px] leading-none">8</span>
              </Link>
              <div className="border-l border-primary-300" />
              <Link to="myPosts" className="flex ml-8">
                <span className="inline-block w-[92px] mr-8">
                  Створено оголошень:
                </span>
                <span className="text-[42px] leading-none">5</span>
              </Link>
            </>
          )}
        </div>
        <div className="flex flex-col gap-5">
          {isAdmin ? null : (
            <NavLink
              to="messages"
              className="hover:text-primary-300 flex justify-between"
            >
              <span>Повідомлення</span>
              <span className="bg-primary-100 rounded-3xl px-3.5">122</span>
            </NavLink>
          )}
          <NavLink to="settings" className="hover:text-primary-300">
            Налаштування
          </NavLink>
          {isAdmin ? null : (
            <NavLink to="favorites" className="hover:text-primary-300">
              Обране
            </NavLink>
          )}
          {isAdmin ? <NavLink to="moderatedApplications" className="hover:text-primary-300">
              Оголошення на розгляді
            </NavLink> : (
            <NavLink to="myApplications" className="hover:text-primary-300">
              Мої оголошення
            </NavLink>
          )}
          <NavLink className="hover:text-primary-300" onClick={logout}>
            Вийти
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Profile;
