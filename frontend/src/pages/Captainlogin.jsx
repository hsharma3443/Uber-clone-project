
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';


const Captainlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { captain, setCaptain } = useContext(CaptainDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

    if (response.status === 200) {
      const data = response.data

      setCaptain(data.captain)
      localStorage.setItem('captainToken', data.token)

      navigate('/captain-home')
    }

    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-[150px] mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />

        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='text-3xl font-small mb-2'>What's your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-10 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='Enter your email'
          />

          <h3 className='text-3xl font-small mb-2'>Enter Password</h3>

          <input
            className='bg-[#eeeeee] mb-10 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            required 
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
            placeholder='Password'
          />

          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-xl placeholder:text-base'
          >Login</button>
          

        </form>
        <p className='text-center'>Don't have a captain account? <Link to='/captain-signup' className='text-blue-600'>Create new Account</Link></p>
      </div>
      <div>
        <Link to='/login'
          className='bg-[#0fc36c] text-white font-semibold mb-3 rounded-lg px-4 py-2 flex items-center justify-center w-full text-xl placeholder:text-base'
        >Sign in as User</Link>
        </div>
    </div>
  )
}

export default Captainlogin
