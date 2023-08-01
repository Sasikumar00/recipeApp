import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Categories from './components/Categories'
// import { useEffect, useState } from 'react';
import Recipes from './components/Recipes';

function App() {
  // useEffect(()=>{
  //   getRecipes();
  // }, [])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/recipes" element={<Recipes/>} />
      </Routes>
    </div>
  );
}

export default App;
