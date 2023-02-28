import React from 'react'
import pic from '../../assets/success.svg'

const MultiStepFinished = (props) => {
  const {back} = props
  return (
    <div className='flex flex-col items-start justify-center p-[10px] gap-[30px]  border border-solid border-[rgba(0,0,0,0.15)] rounded-[5px] shadow-md'>
        <h1 className="text-bold text-[20px] text-[#1C1C1C]">Konfigurator Servisa</h1>
        <div className='flex flex-col items-center jusity-center w-full'>
          <img src={pic} alt='Sucsess'/>

          <h3 className="text-bold text-[20px] text-[#1C1C1C]">Vaša prijava je uspješno poslana</h3>
          <p className="text-[#1C1C1C]; text-[12px]">Vaša prijava je uspješno poslana i zaprimljena. <br /> Kontaktirat ćemo vas u najkraćem mogućem roku. Hvala Vam!</p>
        </div>
        <div className='w-full flex justify-center'>
              <button className='button bg-[#004289] text-white hover:bg-[#003142]' onClick={back}>Zatvori</button>
        </div>
        

    </div>
  )
}

export default MultiStepFinished