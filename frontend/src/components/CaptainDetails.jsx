import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainDetails = () => {
    const { captain } = useContext(CaptainDataContext)
    console.log("captain context:", captain);
    if (!captain || !captain.fullName || !captain.fullName.firstName) {
    return <div className='p-4 text-center'>Loading Captain Info...</div>
  }

    return (
        <div className='bg-white p-4'>
            <div className='flex items-center justify-between'>
                <img className='h-20' src="https://previews.123rf.com/images/jemastock/jemastock1904/jemastock190416888/123517087-man-portrait-faceless-avatar-cartoon-character-with-beard-vector-illustration-graphic-design.jpg" alt="captain" />
                <h2 className='text-2xl font-bold capitalize'>{captain.fullName.firstName + " " + captain.fullName.lastName}</h2>
                <div className='text-right'>
                    <h4 className='text-lg font-semibold -mt-1 -mb-1'>₹990.50</h4>
                    <p className='text-sm font-semibold text-gray-600'>Earned</p>
                </div>
            </div>

            <div className='flex mt-12 justify-between items-center gap-2'>
  {/* Box 1 */}
  <div className='w-24 h-24 bg-gray-200 flex flex-col items-center justify-center rounded-lg'>
    <i className="text-xl font-bold ri-timer-2-line"></i>
    <h5 className='text-lg font-bold'>10.2</h5>
    <p className='text-sm text-gray-600'>Hours Online</p>
  </div>

  {/* Box 2 */}
  <div className='w-24 h-24 bg-gray-200 flex flex-col items-center justify-center rounded-lg'>
    <i className="text-xl font-bold ri-speed-up-line"></i>
    <h5 className='text-lg font-bold'>45</h5>
    <p className='text-sm text-gray-600'>Avg Speed</p>
  </div>

  {/* Box 3 */}
  <div className='w-24 h-24 bg-gray-200 flex flex-col items-center justify-center rounded-lg'>
    <i className="text-xl font-bold ri-wallet-3-line"></i>
    <h5 className='text-lg font-bold'>37</h5>
    <p className='text-sm text-gray-600'>Total Rides</p>
  </div>
</div>

            </div>
        
    )
}

export default CaptainDetails
