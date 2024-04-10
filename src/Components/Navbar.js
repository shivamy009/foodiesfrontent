import React, { useState } from 'react'
// import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa";

import { IoReorderThree } from "react-icons/io5";
// import { Link, NavLink } from 'react-router-dom';
import Menutoggle from './Menutoggle';

const Nav = () => {

  let Links =[
    {name:"Home",link:"/"},
    {name:"Menu",link:"/menu"},
    {name:"About",link:"/about"},
    {name:"Contact",link:"/contact"},
    // {name: `cart({cart ? cart.length:total})`,link:"/"},
  ];

  let Akash =[
    {name:"Home",link:"/"},
    {name:"Menu",link:"/menu"},
    {name:"About",link:"/about"},
    {name:"Contact",link:"/contact"},
    {name:"Login",link:"/login"},
    {name:"signup",link:"/register"},
  ]
    let [open,setOpen]=useState(false);
    // const [yes,setYes]=useState()
    const {cart} = useSelector((state)=>state.user)
    const {currentUser} = useSelector((state)=>state.user)
  return (
    <div className='shadow-md w-full fixed top-0 left-0 bg-gradient-to-r from-violet-600 to-indigo-600'>
      {
        currentUser ? (<div className='md:flex items-center justify-between  py-1 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center  uppercase 
        text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2 uppercase'>
          {/* <IoReorderThree name="logo-ionic"></IoReorderThree> */}
          </span>
          Foodies
        </div>
        
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden mt-0'>
        {/* ion-icon name={open ? 'close':'menu'} */}
        <IoReorderThree  name={open ? 'close':'menu'} ></IoReorderThree>
        </div>
  
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gradient-to-r from-violet-600 to-indigo-600 sm:bg-gradient-to-r sm:from-violet-600 sm:to-indigo-600 md:bg-none lg:bg-none shadow-none   inline-block  md:justify-center   md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-14 ':'top-[-490px]'}`}>
          {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <NavLink to={link.link} onClick={()=>setOpen(!open)} className='text-gray-800 hover:text-gray-400 duration-500 hover:cursor-pointer uppercase'>{link.name}</NavLink>
              </li>
            ))
          }
           {/* <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt="" className=' rounded-full w-10 h-10 md:ml-8' /> */}
           <NavLink to={`/dashboard/cart/${currentUser?.data.user?.role===0 ? 'user' :'admin'}`} className='text-gray-800 relative uppercase hover:text-gray-400 duration-500 hover:cursor-pointer mx-5 flex justify-center items-center'> <FaCartArrowDown/>({cart ? cart.length:0})</NavLink>
           <Menutoggle/>
           {/* <NavLink>hidevr</NavLink> */}
        </ul>
        </div>) :( <div className='md:flex items-center justify-between  py-2 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800 uppercase'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2 uppercase'>
        {/* <IoReorderThree name="logo-ionic"></IoReorderThree> */}
        </span>
        foodies
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden mt-0'>
      {/* ion-icon name={open ? 'close':'menu'} */}
      <IoReorderThree  name={open ? 'close':'menu'} ></IoReorderThree>
      </div>
      
      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gradient-to-r from-violet-600 to-indigo-600 sm:bg-gradient-to-r sm:from-violet-600 sm:to-indigo-600 md:bg-none lg:bg-none shadow-none   inline-block  md:justify-center   md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-14 ':'top-[-490px]'}`}>
        {
          Akash.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <NavLink  onClick={()=>setOpen(!open)} to={link.link} className='text-gray-800 hover:text-gray-400 duration-500 hover:cursor-pointer uppercase'>{link.name}</NavLink>
            </li>
          ))
        }
         {/* <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt="" className=' rounded-full w-10 h-10 md:ml-8 hover:cursor-pointer' /> */}
         {/* <Menutoggle/> */}
         {/* <NavLink>hidevr</NavLink> */}
      </ul>
      </div>)
      }
      
    </div>
  )
}

export default Nav