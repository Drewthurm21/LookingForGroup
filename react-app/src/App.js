import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { authenticate } from './store/session';
import Homepage from './components/Homepage/Homepage'
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Modal from './components/Modal/Modal'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticate())
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      <Modal />
      <Switch>
        <Route exact path='/login'>
          <LoginForm />
        </Route>
        <Route exact path='/signup'>
          <SignUpForm />
        </Route>
        <ProtectedRoute exact path='/users' >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute exact path='/users/:userId' >
          <User />
        </ProtectedRoute>
        <ProtectedRoute exact path='/' >
          <Homepage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
