import React from 'react'
import pic from '../assets/tools-and-utensils.svg'

const Home = (props) => {
    const{handleModal} = props
  return (
   <div className='flex flex-col justify-center items-center p-[10px] gap-[30px] h-[947px] bg-gray'>
        <img src={pic} alt="alat" />
        <h4 className='text-[#004289]'>Pritisnite gumb niže kako biste pokrenuli</h4>
        <button className='w-[160px] h-[35px] text-[#fff] bg-[#004289] rounded-[3px]' onClick={handleModal}>Pokreni konfigurator</button>
   </div>
  )
}

export default Home