import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import { hideModal } from '../../store/modal'
import { useDispatch, useSelector } from 'react-redux'

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

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className='login_form'>
      <div className="square_1 square"></div>
      <div className="square_2 square"></div>
      <div className="square_3 square"></div>
      <div className="square_4 square"></div>
      <div className="square_5 square"></div>
      <form className='login_form' onSubmit={onLogin}>
        <div className='login_errors'>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div className='login_input'>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className='login_input'>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
        </div>
        <div className='login_input'>
          <p className='login_btn' onClick={onLogin} type="submit">Login</p>
        </div>
        <div className='login_input'>
          <p className='login_btn' type="submit">Sign up</p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
