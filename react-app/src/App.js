import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { authenticate } from './store/session';

import Homepage from './components/Homepage/Homepage'
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';



function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
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
