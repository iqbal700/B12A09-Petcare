import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../Firebase/firebase.config';
import logoImg from '../assets/logo01.png'

const Navbar = () => {

  const {user} = useContext(AuthContext);

  const handleSignOut = () => {
     signOut(auth)
  }


    const links =
     <>
      <NavLink className='h1-heading' to='/'> Home </NavLink>
      <NavLink className='h1-heading' to='/services' > Services </NavLink>
      <NavLink className='h1-heading' to='/profile'> My Profile </NavLink>
     </>

    return (
       <div className="navbar fixed top-0 z-50 justify-between p-3 w-full bg-base-100 shadow-sm">
            <div className="flex">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                    <ul className="p-2 flex flex-col space-x-3">
                        {links}
                    </ul>
                    
                </ul>
                </div>
                
               <div>
                  <img src={logoImg} alt="logo" />
               </div>

            </div>

            <div className="hidden lg:flex space-x-5">
                  {links} 
            </div>

            <div>
                {
                    user ? <NavLink onClick={handleSignOut} className='btn rounded-lg bg-pink-500 text-white' to='/login'> Logout </NavLink> : <NavLink className='btn bg-pink-500 text-white rounded-lg' to='/login'> Login </NavLink>
                } 
            </div>
       </div>
    );
};

export default Navbar;