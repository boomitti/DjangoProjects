import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation'
import Movie  from './components/Movie';
import MovieDetail from './components/MovieDetail';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
         <Route exact path="/" element={<Movie />} />
         <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
