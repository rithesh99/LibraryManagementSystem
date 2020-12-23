import React from 'react'
import './App.css'
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from './pages/Home/Home';
import Signin from './components/user/Signin';
import Signup from './components/user/Signup';
import PrivateRoute from './components/auth/PrivateRoutes';
import Profile from './components/user/Profile/Profile';


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/signup"><Signup /></Route>
      <Route exact path="/signin"><Signin /></Route>

      <PrivateRoute exact path="/profile"><Profile/></PrivateRoute>
      
    </BrowserRouter>
  );
}

export default App;
