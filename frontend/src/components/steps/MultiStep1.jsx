import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Configurator from './Configurator'

const MultiStep1 = (props) => {
  const {data, handleChange, next,quit} = props
  //Validation state and function
  const [toggle, setToggle] = useState(false)
  const handleValidation = () => {
    data.ime_auta.filter((item) => {item.checked ? setToggle(true) : null})
  }
  //Notification message
  const notify = () => toast("Molim te odaberi navedeno u konfiguratoru.", {autoClose: 1000});

  useEffect(() => {
    //Runs on every render
    handleValidation()
  });


  return (
    <div className='flex flex-col items-start justify-center p-0 w-[600px] h-[345px] border border-solid border-[rgba(0,0,0,0.15)] bg-white rounded-[5px] shadow-md;'>
        <Configurator quit={quit}/>
        <div id="content" className="flex flex-col items-start px-[30px] pt-0 pb-[15px] gap-[20px] w-[600px] h-[206px]">
          <p className="text-[#1C1C1C]; text-[18px]"><span className="text-[#004289] text-[16px]">Korak 1.</span> Odaberite proizvođaća vašeg vozila</p>
          <div className='flex flex-col flex-wrap items-start pt-[10px]  w-[540px] h-[140px] bg-[#FEFEFE] '>
            {data.ime_auta.map(({id,text,checked}) => {
                return(
                <div className='basis-1/3' key={id}>
                    <input className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300' type="radio" id={id} name="ime_auta" value={text} onChange={handleChange} checked={checked}></input>
                    <label className='ml-2 text-sm font-medium text-gray-400' htmlFor={id}>{text}</label>
                </div>) 
            })}
          </div>
        </div>
        <div id="buttons" className='flex flex-row justify-end items-center pt-[20px] px-[20px] pb-[20px] gap-[20px] w-[600px] h-[65px]'>
            <button className='flex flex-row items-center py-[5px] px-[15px] gap-[10px] w-[101px] h-[35px] border border-solid border-[#585757] rounded-[3px] text-[18px] leading-[180%] text-[#1C1C1C]' onClick={quit}>Odustani</button>
            <button
              className={"flex flex-row items-center py-[5px] px-[15px] gap-[5px] w-[70px] h-[35px]  rounded-[3px]  text-[18px] leading-[140%]" + (toggle ?  " bg-[#004289] text-[#fff]" : " bg-[rgba(0,0,0,0.15)] text-[#969696]") }
              onClick={() => { toggle ? next() : notify()}}> Dalje
            </button>
        </div>
    </div>
   
  )
}

export default MultiStep1