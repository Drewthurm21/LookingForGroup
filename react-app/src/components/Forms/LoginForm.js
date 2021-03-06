import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import { hideModal, setCurrentModal, showModal } from '../../store/modal'
import { useDispatch, useSelector } from 'react-redux'
import SignUpForm from '../Forms/SignUpForm'

import './Forms.css'

const LoginForm = () => {
  const dispatch = useDispatch()

  const [errors, setErrors] = useState([])
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const user = useSelector(state => state.session.user)

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
    dispatch(hideModal())
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('demo2@aa.io', 'password2'));
    if (data.errors) {
      setErrors(data.errors);
    }
    dispatch(hideModal())
  };

  const toSignup = async (e) => {
    dispatch(setCurrentModal(SignUpForm))
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/home" />;
  }

  return (
    <div className='login-form'>
      <div className="square-1 square"></div>
      <div className="square-2 square"></div>
      <div className="square-3 square"></div>
      <div className="square-4 square"></div>
      <div className="square-5 square"></div>
      <form className='login-form' onSubmit={onLogin}>
        <div className='login-errors'>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div className='login-input'>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className='login-input'>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={updatePassword}
          />
        </div>
        <div className='login-input login-btns'>
          <p className='login-btn' onClick={onLogin} type="submit">Login</p>
          <p className='login-btn' onClick={toSignup} type="submit">Sign up</p>
        </div>
        <div className='login-input'>
          <p className='demo-btn' onClick={demoLogin} type="submit"> Login as Demo user</p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
