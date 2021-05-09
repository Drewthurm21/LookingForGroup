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
    <form className='form' onSubmit={onLogin}>
      <div className='form-errors'>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div className='form-input'>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className='form-input'>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
      </div>
      <div className='form-input'>
        <p className='btn' onClick={onLogin} type="submit">Login</p>
      </div>
      <div className='form-input'>
        <p className='btn' type="submit">Sign up</p>
      </div>
    </form>
  );
};

export default LoginForm;
