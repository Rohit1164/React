import React from "react";
import authService from "../../Appwrite/Auth";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    try {
      await authService.logOut();
      return dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      LogoutBtn
    </button>
  );
}

export default LogoutBtn;
