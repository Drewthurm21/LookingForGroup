import React from "react";
import { logout } from "../../store/session";
import { useDispatch } from 'react-redux'

const LogoutButton = () => {
  const dispatch = useDispatch()

  const onLogout = async (e) => {
    await dispatch(logout())
  };

  return <div className='login-btn' onClick={onLogout} >LOG OUT</div>;
};

export default LogoutButton;
