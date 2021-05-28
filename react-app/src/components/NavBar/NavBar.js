import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { showModal, setCurrentModal } from '../../store/modal'
import LogoutButton from '../Forms/LogoutButton';
import LoginForm from '../Forms/LoginForm'
import SignupForm from '../Forms/SignUpForm'
import './NavBar.css'

const NavBar = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)

  const showLogin = () => {
    dispatch(setCurrentModal(LoginForm))
    dispatch(showModal())
  }

  const showSignup = () => {
    dispatch(setCurrentModal(SignupForm))
    dispatch(showModal())
  }

  return (
    <nav className='navbar'>
      <NavLink to='/home' activeClassName='active'>
        <div className='login-btn'>
          Home
      </div>
      </NavLink>
      {!user &&
        <>
          <div>
            <div className='login-btn' onClick={showLogin}>
              Login
       </div>
          </div>
          <div>
            <div className='login-btn' onClick={showSignup}>
              Signup
        </div>
          </div>
        </>}
      {user && <>
        <NavLink to='/profile' activeClassName='active'>
          <div className='login-btn'>
            Profile
        </div>
        </NavLink>
        <div>
          <LogoutButton />
        </div>
      </>}
    </nav>
  );
}

export default NavBar;