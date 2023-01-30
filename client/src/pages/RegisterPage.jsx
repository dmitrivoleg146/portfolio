import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className='mt-4 grow flex items-center justify-center'>
      <div className=''>
          <h1 className='text-4xl text-center mb-4'>Register</h1>
          <form className='max-w-md mx-auto '>
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Surname"/>
          <input type="email" placeholder="your@email.com"/>
          <input type="password" placeholder="password"/>
          <input type="password" placeholder="Repeat password"/>
          <button className='primary'>Login</button>
          <div className='text-center py-2 text-gray-500'>
             Already a member? <Link to={"/login"} className="underline text-black" >
              Login
            </Link>
          </div>
          </form>
      </div>
    </div>
  )
}

export default RegisterPage