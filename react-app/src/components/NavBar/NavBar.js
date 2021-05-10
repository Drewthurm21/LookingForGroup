import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import LogoutButton from '../Forms/LogoutButton';
import LoginForm from '../Forms/LoginForm'
import SignupForm from '../Forms/SignUpForm'
import { showModal, setCurrentModal } from '../../store/modal'

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
      <div className='nav-btn'>
        <NavLink to='/' activeClassName='active'>
          HOME
        </NavLink>
      </div>
      {!user &&
        <>
          <div>
            <div className='nav-btn' onClick={showLogin}>
              login
       </div>
          </div>
          <div>
            <div className='nav-btn' onClick={showSignup}>
              Signup
        </div>
          </div>
        </>}
      <div className='nav-btn'>
        <NavLink to='/profile' activeClassName='active'>
          PROFILE
        </NavLink>
      </div>
      {user && <div>
        <LogoutButton />
      </div>}
    </nav>
  );
}

export default NavBar;