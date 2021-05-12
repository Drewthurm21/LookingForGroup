import React from 'react'
import { NavLink } from 'react-router-dom'
import './SplashPage.css'

const SplashPage = () => {

  return (
    <NavLink to='/home'>
      <img src='https://github.com/Drewthurm21/LookingForGroup/blob/main/images/lfg-splash-gif.gif?raw=true' alt='logo'></img>
    </NavLink>
  )
}

export default SplashPage;