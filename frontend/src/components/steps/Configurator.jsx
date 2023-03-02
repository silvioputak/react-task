import React from 'react'
import pic from '../../assets/x_button.svg'

const Configurator = ({quit}) => {
  return (
    <div id="header" className="flex flex-row justify-between py-[20px] pr-[20px] pl-[30px] w-[600px] h-[74px]">
          <h1 className="text-[24px] text-[#1C1C1C] font-medium">Konfigurator Servisa</h1>
          <img className="cursor-pointer" onClick={quit} src={pic} alt="" />
    </div>
  )
}

export default Configurator