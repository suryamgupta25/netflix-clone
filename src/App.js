import React from 'react';
import './App.css';
import HomeScreen from './components/Homescreen.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MoviePage from './components/MoviePage.js';

function App() {

  return (
    <div className="app">
      <title>Netflix Clone</title>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<HomeScreen/>}/>
          <Route path='/home' element={<HomeScreen/>}/>
          {
                // Instead of generating static routes for all movies, make a dynamic route for all routes using :
                // Use the id as the route's query
          }
          <Route path='/movie/:id' element={<MoviePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
