import React from 'react'
import { SignIn } from "@clerk/clerk-react";
import Navbar from '../../components/Navbar/Navbar';
const login = () => {
  return (
    <>
    <Navbar />
     <div className='clerk-container'>
        <SignIn />
    </div>
    </>
   
  )
}

export default login
