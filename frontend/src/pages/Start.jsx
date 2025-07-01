import React from 'react'
import Uber_logo from '../assets/uber_logo.png'
import { Link } from 'react-router-dom'

const Start = () => {
    return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_2680,w_2144/v1684852612/assets/ba/4947c1-b862-400e-9f00-668f4926a4a2/original/Ride-with-Uber.png)] h-screen pt-10 justify-between flex flex-col w-full bg-red-400'>
            <img className='w-[150px] ml-10' src={Uber_logo} alt="" />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>

        </div>
    </div>
  )
}

export default Start
