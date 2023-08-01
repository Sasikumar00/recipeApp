import React from 'react'
import landingBg from '../images/landing-bg.jpg'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const api_id = '9c8fa75d'
  const api_key = '3b7da9050f7ffd0ccaa7d50bf0760e12'
  const getRecipes = async(e)=>{
    e.preventDefault();
    //Get value from input tag  
    const q = e.target[0].value;
    const apiQuery = `https://api.edamam.com/api/recipes/v2?type=public&q=${q}&app_id=${api_id}&app_key=${api_key}`
    const res = await fetch(apiQuery);
    const data = await res.json();
    console.log(data)
    navigate("/recipes", {state:data});
  }
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-slate-600 to-slate-600 bg-cover relative overflow-y-hidden">
      <form className='flex flex-col items-center relative z-10' onSubmit={getRecipes}>
        <input className='px-[2rem] md:px-[10rem] py-2 rounded-xl text-2xl text-black text-center' type="text" name="" id="" placeholder='Chicken, Peanut, Veg etc...'/>
        <button className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 px-10 py-2 text-2xl text-white rounded-xl mt-5 transition ease-in-out duration-300 delay-100'>Search</button>
      </form>
      <img src={landingBg} alt="" className='absolute top-0 mix-blend-overlay z-9 h-screen w-full' />
    </div>
  )
}

export default Home