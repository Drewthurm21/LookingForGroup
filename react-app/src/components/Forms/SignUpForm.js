import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { signUp } from "../../store/session";
import { hideModal, setCurrentModal } from "../../store/modal";
import LoginForm from '../Forms/LoginForm'
import "./Forms.css";


const SignUpForm = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const user = useSelector((state) => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(
        signUp(username, email, image, password)
      );
      dispatch(hideModal());
      history.push("/home");
    }
  };

  const toLogin = async (e) => {
    dispatch(setCurrentModal(LoginForm))
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }
  return (
    <div className="signup-form">
      <div className="square-1 square"></div>
      <div className="square-2 square"></div>
      <div className="square-3 square"></div>
      <div className="square-4 square"></div>
      <div className="dsquare-1 square"></div>
      <h2>SignUp</h2>
      <form>
        <div></div>
        <div className="signup-input">
          <input
            placeholder="Username"
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className="signup-input">
          <input
            placeholder="Email"
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className="signup-input">
          <input
            name="profile-image"
            type="file"
            placeholder="Select Image"
            accept="image/*"
            onChange={updateImage}
            className="signup-input-image"
          ></input>
        </div>
        <div className="signup-input">
          <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className="signup-input">
          <input
            placeholder="Repeat Password"
            type="password"
            name="repeat-password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div className="signup-input">
          <p className='login-btn' onClick={onSignUp} value="SignUp" >Signup</p>
        </div>
        <div className="signup-input">
          <p className='login-btn' onClick={toLogin} value="Login" >Login</p>
        </div>
      </form>
    </div>
  );
};
export default SignUpForm;