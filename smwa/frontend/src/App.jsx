import React from 'react';
import Navigation from './components/Navigation';
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Students from './components/Students';
import Manage from './components/Manage';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
         <Route exact path="/" element={<Home />} />
         <Route path="/students" element={<Students/>} />
         <Route path="/manage" element={<Manage />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;