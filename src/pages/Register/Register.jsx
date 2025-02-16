import React from 'react'
import { SignUp } from "@clerk/clerk-react";
import Navbar from '../../components/Navbar/Navbar';
const Register = () => {
  return (
    <>
      <Navbar />
       <div className='clerk-container'>
      <SignUp />
    </div>
    </>
   
  )
}

export default Register
