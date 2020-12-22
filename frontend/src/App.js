import React from 'react'
import './App.css'
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from './pages/Home/Home';
import Signin from './components/user/Signin';
import Signup from './components/user/Signup';


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/signup"><Signup /></Route>
      <Route exact path="/signin"><Signin /></Route>

      
    </BrowserRouter>
  );
}

export default App;
