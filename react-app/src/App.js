import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { authenticate } from './store/session';


import Homepage from './components/Homepage/Homepage'
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import User from './components/User';
import Modal from './components/Modal/Modal'
import SingleEventPage from './components/SingleEventPage/SingleEventPage'


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
        <Route exact path='/' >
          <Homepage />
        </Route>
        <Route exact path='/events/:id' >
          <SingleEventPage />
        </Route>
        <ProtectedRoute exact path='/profile' >
          <User />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
