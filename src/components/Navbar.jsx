import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const showHideMenu = ()=>{
    setShowMenu(!showMenu)
  }
  useEffect(() => {
    if(showMenu){
      document.getElementById('ham-menu').classList.remove('hidden')
      document.getElementById('ham-menu').classList.add('grid')
    }
    else{
      document.getElementById('ham-menu').classList.add('hidden')
      document.getElementById('ham-menu').classList.remove('grid')
    }
  }, [showMenu])
  return (
    <div className='flex justify-between items-center px-10 py-2 w-full bg-gradient-to-r from-cyan-500 to-blue-500'>
      <h1 className='text-white text-3xl'>RecipeApp</h1>
      <div className='sm:hidden' onClick={showHideMenu}>
        <AiOutlineMenu className='text-white text-3xl cursor-pointer'/>
      </div>
      <div className='hidden grid-cols-2 absolute top-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 z-30 w-full h-full p-5' id='ham-menu'>
        <ul className='flex flex-col text-xl'>
        <h1 className='text-white text-3xl'>RecipeApp</h1>
          <li className='text-white p-4'><Link to='/categories' onClick={showHideMenu}>Categories</Link></li>
          <li className='text-white p-4'><Link to='/' onClick={showHideMenu}>Home</Link></li>
          <li className='text-white p-4'><Link to='/about' onClick={showHideMenu}>About</Link></li>
        </ul>
        <AiOutlineClose className='text-white text-3xl cursor-pointer' onClick={showHideMenu}/>
      </div>
      <ul className='hidden sm:flex text-xl'>
      <li className='text-white p-4'><Link to='/categories'>Categories</Link></li>
        <li className='text-white p-4'><Link to='/'>Home</Link></li>
        <li className='text-white p-4'><Link to='/about'>About</Link></li>
      </ul>
    </div>
  )
}

export default Navbar