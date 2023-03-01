import React from 'react'
import pic from '../../assets/success.svg'

const MultiStepFinished = (props) => {
  const {back} = props
  return (
    <div className='flex flex-col items-start justify-center p-0 w-[600px] h-[370px] border border-solid border-[rgba(0,0,0,0.15)] bg-white rounded-[5px] shadow-md'>
       <div id="header" className="flex flex-row justify-between py-[20px] pr-[20px] pl-[30px] w-[600px] h-[74px]">
          <h1 className="text-[24px] text-[#1C1C1C] font-medium">Konfigurator Servisa</h1>
        </div>
        <div className='flex flex-col items-center justify-center w-full px-[30px] pt-0 pb-[15px] gap-[20px] w-[600px] h-[626px]'>
          <img src={pic} alt='Sucsess'/>

          <h3 className="text-bold text-[24px] text-[#004289]">Vaša prijava je uspješno poslana</h3>
          <p className="text-[#1C1C1C]; text-[18px]">Vaša prijava je uspješno poslana i zaprimljena. <br /> Kontaktirat ćemo vas u najkraćem mogućem roku. Hvala Vam!</p>
        </div>
        <div className='w-full flex justify-center mb-[20px]'>
              <button className='button bg-[#004289] text-white hover:bg-[#003142] rounded-[3px]' onClick={back}>Zatvori</button>
        </div>
        
    </div>
  )
}

export default MultiStepFinished