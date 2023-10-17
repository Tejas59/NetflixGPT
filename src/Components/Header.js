import React from 'react'
import { LOGO } from '../utilis/constants'
import { signOut } from 'firebase/auth';
import { auth } from '../utilis/firebase';
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';

const Header = () => {
const navigate = useNavigate();
const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between" >
        <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />

        {user &&(<div className='flex p-2'>
          <img  className="hidden md:block w-12 h-12"
          alt='user_icon'
          src={user?.photoURL}/>
          <button onClick={handleSignOut} className="font-bold text-white ">Sign out</button>
        </div>
    )}
    </div>
  )
}

export default Header