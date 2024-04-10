import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast'
const Menutoggle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {currentUser} = useSelector((state)=>state.user)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogout = () => {
    localStorage.clear();
    toast.success("logout success")
    
  };

  return (
    <> 
    {/* <header className="bg-gray-800 text-white p-4"> */}
      <div className="flex justify-between items-center relative w-full">
        <button
          className="text-white hover:text-gray-300"
          onClick={toggleMenu}
        >
         <img src= {currentUser.data.user.image} alt="" className=' rounded-full w-10 h-10 md:ml-8 hover:cursor-pointer' />
        </button>
      {/* </div> */}
      {/* </header> */}
      {isMenuOpen && (
        <div className="mt-4 flex border-red-400 w-full justify-center absolute top-7 p-1">
          <div className=" flex justify-center shadow-md">
            {/* First column content */}
            <ul className="space-y-2 grid grid-cols-1 items-center justify-center text-center w-40">
              <NavLink to={`/dashboard/${currentUser?.data.user?.role===1 ? 'admin' :'user'}`} className=' uppercase bg-blue-600'>dashboard</NavLink>
              <NavLink className='uppercase bg-blue-600' to='/login' onClick={handleLogout}>Logout</NavLink>
            </ul>
          </div>
         </div>
      )}
     </div>
    </>
  );
};

export default Menutoggle;
