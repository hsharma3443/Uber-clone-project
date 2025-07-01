/* eslint-disable react/prop-types */
import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={() => {
                props.setVehiclePanel(false)
            }} ><i className="text-3xl text-gray-600 ri-arrow-down-wide-fill"></i></h5>
            <h3 className='text-2xl font-semibold mb-4'>choose a Vehicle:</h3>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.selectVehicle('car')
            }} className='w-full flex items-center justify-between border-2  active:border-black rounded-xl mb-2'>
                <img className='h-16' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="car" />
                <div className='bg-white w-1/2 p-3'>
                    <h4 className='font-medium'>Uber Go <span><i className="ri-user-3-line"></i>4</span></h4>
                    <h5 className='text-sm font-semibold'>3 mins away</h5>
                    <p className='text-xs text-gray-600'>Affordable, car rides</p>
                </div>
                <h2 className='text-lg font-semibold p-1'>₹{props.fare.car}</h2>
            </div>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.selectVehicle('auto')
            }} className='w-full flex items-center justify-between border-2 active:border-black rounded-xl mb-2'>
                <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="auto" />
                <div className='bg-white w-1/2 p-3'>
                    <h4 className='font-medium'>Uber Auto <span><i className="ri-user-3-line"></i>2</span></h4>
                    <h5 className='text-sm font-semibold'>5 mins away</h5>
                    <p className='text-xs text-gray-600'>Affordable, auto rides</p>
                </div>
                <h2 className='text-lg font-semibold p-1'>₹{props.fare.auto}</h2>
            </div>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.selectVehicle('bike')
            }} className='w-full flex items-center justify-between border-2 active:border-black rounded-xl mb-2'>
                <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="bike" />
                <div className='bg-white w-1/2 p-3'>
                    <h4 className='font-medium'>Uber Moto <span><i className="ri-user-3-line"></i>1</span></h4>
                    <h5 className='text-sm font-semibold'>2 mins away</h5>
                    <p className='text-xs text-gray-600'>Affordable, motorcycle rides</p>
                </div>
                <h2 className='text-lg font-semibold p-1'>₹{props.fare.bike}</h2>
            </div>
        </div>
    )
}

export default VehiclePanel
