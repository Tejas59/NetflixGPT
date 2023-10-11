import React from 'react'
import { useState } from 'react';
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () =>{
        setIsSignInForm (!isSignInForm)
    };
  return (
    <div>
        <Header/>

        <div className='absolute'> 
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg'
         alt='logo'/>
        </div>
        <from className ="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 ">
            <h1 className ="p-2 font-bold text-3xl" >{isSignInForm? "Sign In" : "Sign Up" } </h1>
            {!isSignInForm &&(<input type='text' placeholder='Full Name' className='p-2 m-2 w-full bg-gray-900'/>)}
            <input type='text' placeholder='E-mail Adaress' className='p-2 m-2 w-full bg-gray-900'/>
            <input type='password' placeholder='Password' className='p-2 m-2 w-full bg-gray-900'/>
            <button className='p-2 m-2 bg-red-700 w-full rounded-lg'>{isSignInForm? "Sign In" : "Sign Up" }</button>
            <p className='p-2 m-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix let's Sign Up" : "Alerady registered? Sign In Now" }</p>

        </from>

    </div>
    
  )
}

export default Login