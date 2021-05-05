import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {

  return (
    <nav className='navbar'>
      <div>
        <NavLink to='/' activeClassName='active'>
          Home
          </NavLink>
      </div>
      <div>
        <NavLink to='/login' activeClassName='active'>
          Login
          </NavLink>
      </div>
      <div>
        <NavLink to='/signup' activeClassName='active'>
          Sign Up
          </NavLink>
      </div>
      <div>
        <NavLink to='/profile' activeClassName='active'>
          Users
          </NavLink>
      </div>
      <div>
        <LogoutButton />
      </div>
    </nav>
  );
}

export default NavBar;