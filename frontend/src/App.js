import React from 'react'
import './App.css'
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from './pages/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <Route path="/"><Home /></Route>

      
    </BrowserRouter>
  );
}

export default App;
