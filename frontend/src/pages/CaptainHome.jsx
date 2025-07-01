
import Home_Img from '../assets/Home_Img.png'
import Uber_logo from '../assets/uber_logo.png'
import React, { useState, useRef, useEffect, useContext } from 'react'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import { SocketContext } from '../context/SocketContext'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'


const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(false)
  const ridePopUpPanelRef = useRef(null)
  const [confirmRidePopUp, setConfirmRidePopUp] = useState(false)
  const confirmRidePopUpRef = useRef(null)
  const [ ride, setRide ] = useState(null)

  const { socket } = useContext(SocketContext)
  const { captain } = useContext(CaptainDataContext)

  useEffect(() => {  
    
    socket.emit("join", { 
      userType: "captain",
      userId: captain._id
     })
     const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          socket.emit('update-location-captain', {
            userId: captain._id,
            location: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          })
        })
      }
     }

     const locationInterval = setInterval(updateLocation, 10000)
     updateLocation()
  }, [])

  socket.on('new-ride', (data) => {
    console.log("Received ride from backend:", data);
console.log("OTP is:", data.otp);
    setRide(data)
    setRidePopUpPanel(true)
  })

  async function confirmRide() {
  try {
    console.log("rideId:", ride?._id);
    console.log("otp:", ride?.otp);
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/confirm`,
      {},
      {
        params: {
          rideId: ride._id,
          otp: ride.otp
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('captainToken')}`
        }
      }
    );

    setRidePopUpPanel(false);
    setConfirmRidePopUp(true);

  } catch (err) {
    console.error("❌ Ride confirmation error:", err.response?.data || err.message);

    // Optional: log more for debugging
    console.log("rideId:", ride._id);
    console.log("otp:", ride.otp);
  }
}


  useGSAP(() => {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopUpPanel])

  useGSAP(() => {
    if (confirmRidePopUp) {
      gsap.to(confirmRidePopUpRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePopUpRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePopUp])


  return (
    <div className='h-screen'>
      <img className='w-[150px] mb-2  absolute left-5 top-5' src={Uber_logo} />
      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src={Home_Img} alt="map" />
      </div>
      <div className='h-2/5 p-6'>
        <CaptainDetails />
      </div>
      <div ref={ridePopUpPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12'>
        <RidePopUp 
          ride={ride}
          setRidePopUpPanel={setRidePopUpPanel}
          setConfirmRidePopUp={setConfirmRidePopUp}
          confirmRide={confirmRide}
        />
      </div>
      <div ref={confirmRidePopUpRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12'>
        <ConfirmRidePopUp 
          ride={ride}
          setRidePopUpPanel={setRidePopUpPanel} 
          setConfirmRidePopUp={setConfirmRidePopUp} 
          
        />
      </div>
    </div>
  )
}

export default CaptainHome
