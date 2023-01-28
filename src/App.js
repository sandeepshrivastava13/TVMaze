import React from 'react'
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Home from './pages/Home';
import { MovieDescription } from './pages/MovieDescription';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'>
        <Route index element={<Home />}></Route>
        <Route path='/description' element={<MovieDescription />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
