import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MultiStep1 = (props) => {
  const {data, handleChange, next,back} = props
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
    <div className='flex flex-col items-start justify-center p-[10px] gap-[30px]  border border-solid border-[rgba(0,0,0,0.15)] rounded-[5px] shadow-md;'>
        <h1 className="text-[20px] text-[#1C1C1C]">Konfigurator Servisa</h1>
        <p className="text-[#1C1C1C]; text-[18px]"><span className="text-[#004289] text-[16px]">Korak 1.</span> Odaberite proizvođaća vašeg vozila</p>
        <div className='flex flex-col flex-wrap items-center pt-0 py-[15px] pb-[30px] w-[600px] h-[345px] bg-[#FEFEFE] '>
          {data.ime_auta.map(({id,text,checked}) => {
              return(
              <div className='basis-1/3' key={id}>
                  <input className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300' type="radio" id={id} name="ime_auta" value={text} onChange={handleChange} checked={checked}></input>
                  <label className='ml-2 text-sm font-medium text-gray-400' htmlFor={id}>{text}</label>
              </div>) 
          })}
        </div>
        
        <div className='w-full flex justify-end'>
            <button className='button mr-[5px]' onClick={() => back(1)}>Odustani</button>
            <button
            className='button bg-[#004289] text-white hover:bg-[#003142]'
            onClick={() => { toggle ? next() : notify()}}> Dalje
            </button>
            
        </div>
    </div>
   
  )
}

export default MultiStep1