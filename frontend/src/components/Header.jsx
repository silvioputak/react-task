import React from 'react'
import pic from '../assets/tokic_logo.svg'

const Header = () => {
  return (
    <div className='flex flex-row items-center py-[15px] px-[50px] gap-[50px] w-full h-[60px] bg-[#004289]'>
        <div>
            <img src={pic} />
        </div>
        <div className='flex flex-row justify-between items-center p-0 gap-[50px] w-full h-[27px]'>
            <h1 className='w-[288px] h-[27px] font-bold leading-[150%] text-white cursor-pointer'>KONFIGURATOR SERVISA</h1>
            <h3 className='w-[200px] h-[24px] font-medium text-[16px] leading-[150%] text-white cursor-pointer'>Izračunajte trošak servisa</h3>
        </div>
    </div>
  )
}

export default Header