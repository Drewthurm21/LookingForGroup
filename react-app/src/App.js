import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { authenticate } from './store/session';

import Homepage from './components/Homepage/Homepage'
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Modal from './components/Modal/Modal'
import SingleEventPage from './components/SingleEventPage/SingleEventPage'
import SplashPage from './components/SplashPage/SplashPage'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticate())
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Modal />
      <Switch>
        <Route exact path='/' >
          <SplashPage />
        </Route>
        <Route exact path='/home' >
          <NavBar />
          <Homepage />
        </Route>
        <Route exact path='/events/:id' >
          <NavBar />
          <SingleEventPage />
        </Route>
        <ProtectedRoute exact path='/profile' >
          <NavBar />
          <ProfilePage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
