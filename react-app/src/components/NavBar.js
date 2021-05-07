import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import LogoutButton from '../components/Forms/LogoutButton';
import LoginForm from '../components/Forms/LoginForm'
import SignupForm from '../components/Forms/SignUpForm'
import { showModal, setCurrentModal } from '../store/modal'

const NavBar = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)

  const showLogin = () => {
    console.log(LoginForm)
    dispatch(setCurrentModal(LoginForm))
    dispatch(showModal())
  }

  const showSignup = () => {
    dispatch(setCurrentModal(SignupForm))
    dispatch(showModal())
  }

  return (
    <nav className='navbar'>
      <div>
        <NavLink to='/' activeClassName='active'>
          HOME
          </NavLink>
      </div>
      <div>
        <button onClick={showLogin}>
          login
       </button>
      </div>
      <div>
        <button onClick={showSignup}>Signup</button>
      </div>
      <div>
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