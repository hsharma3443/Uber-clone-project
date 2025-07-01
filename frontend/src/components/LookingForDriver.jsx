/* eslint-disable react/prop-types */
import React from 'react'

const LookingForDriver = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={() => {
                props.setVehicleFound(false)
            }} ><i className="text-3xl text-gray-600 ri-arrow-down-wide-fill"></i></h5>
            <h3 className='text-2xl font-semibold mb-4'>Looking for a driver...</h3>

            <div className='flex flex-col justify-between items-center gap-2'>
                <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="car" />
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-3 p-2 border-b-2'>
                        <i className="text-lg ri-user-location-line"></i>
                        <div>
                            <h3 className='text-lg font-semibold'>420/37-D</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-2 border-b-2'>
                        <i className="text-lg ri-map-pin-line"></i>
                        <div>
                            <h3 className='text-lg font-semibold'>525/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-2 border-b-2'>
                        <i className="text-lg ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-semibold'>₹{props.fare[ props.vehicleType ]}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LookingForDriver
