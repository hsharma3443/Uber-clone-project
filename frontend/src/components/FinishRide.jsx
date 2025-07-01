import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { SocketContext } from '../context/SocketContext';



const FinishRide = (props) => {
  const { socket } = useContext(SocketContext); // ✅ get socket
  const navigate = useNavigate();

  async function endRide() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {
      rideId: props.ride._id
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('captainToken')}` 
      }
    });

    if (response.status === 200) {
      // ✅ emit ride-ended event to user
      socket.emit("ride-ended", { userId: props.ride.user._id });

      navigate('/captain-home');
    }
  }

    return (
        <div className='bg-white w-full p-4'>
            <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={() => {
                props.setFinishRidePanel(false)
            }} ><i className="text-3xl text-gray-600 ri-arrow-down-wide-fill"></i></h5>
            <h3 className='mt-6 text-2xl font-semibold mb-4'>Finish This Ride.</h3>
            <div className='flex items-center justify-between mt-4 bg-yellow-400 rounded-lg p-3'>
                <div className='flex items-center gap-3'>
                    <img className='w-16 h-16 rounded-full object-cover' src="https://cdn1.vectorstock.com/i/1000x1000/77/10/men-faceless-profile-vector-13567710.jpg" alt="" />
                    <h2 className='text-xl font-medium'>{props.ride?.user.fullName.firstName}</h2>
                </div>
                <h5 className='text-lg font-medium'>4.5 KM</h5>
            </div>

            <div className='flex flex-col justify-between items-center gap-2'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-3 p-2 border-b-2'>
                        <i className="text-lg ri-user-location-line"></i>
                        <div>
                            <h3 className='text-lg font-semibold'>420/37-D</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-2 border-b-2'>
                        <i className="text-lg ri-map-pin-line"></i>
                        <div>
                            <h3 className='text-lg font-semibold'>525/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-2 border-b-2'>
                        <i className="text-lg ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-semibold'>₹{props.ride?.fare}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash</p>
                        </div>
                    </div>
                </div>
                <div className='mt-4 w-full'>
                    <button
                        onClick={endRide}
                        className='w-full mt-5 flex  text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Finish Ride</button>
                </div>
            </div>
        </div>
    )
}

export default FinishRide
