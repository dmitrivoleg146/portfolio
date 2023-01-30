import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const RegisterPage = () => {
  const [name,setName] = useState("");
  const [surname,setSurname] = useState("")
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  function registerUser(ev){ //send request to API
    ev.preventDefault();
     axios.get('http://localhost:4000/test');
  }
  return (
    <div className='mt-4 grow flex items-center justify-center'>
      <div className=''>
          <h1 className='text-4xl text-center mb-4'>Register</h1>
          <form className='max-w-md mx-auto' onSubmit={registerUser}>
          <input type="text" placeholder="Name" value={name} onChange={event=>setName(event.target.value)}/>
          <input type="text" placeholder="Surname" value={surname} onChange={event=>setSurname(event.target.value)}/>
          <input type="email" placeholder="your@email.com" value={email} onChange={event=>setEmail(event.target.value)}/>
          <input type="password" placeholder="password" value={password} onChange={event=>setPassword(event.target.value)}/>
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