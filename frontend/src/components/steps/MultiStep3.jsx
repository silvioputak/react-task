import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import x_button from '../../assets/x_button.svg'


const MultiStep3 = (props) => {
    const {data, handleChange, next, back} = props
     //Validation state and function
     const [toggle, setToggle] = useState(false)
     
     const handleValidation = () => {
        
          if(!data.ime_prezime) {
            toast("Ispuni ime i prezime!", {autoClose: 1000});
           }
           else if (!data.email ) {
            toast("Ispuni email podatke!", {autoClose: 1000});
           }
           else if(!data.telefon){
            toast("Ispuni podatke za telefon!", {autoClose: 1000});
           }
           else{
            setToggle(true)
           } 
     }  

     useEffect(() => {
      //Runs on every render
      handleValidation()
    });


  return (
    <div className='flex flex-col items-start justify-center p-0 w-[600px] h-[567px] border border-solid border-[rgba(0,0,0,0.15)] bg-white rounded-[5px] shadow-md'>
        <div id="header" className="flex flex-row justify-between py-[20px] pr-[20px] pl-[30px] w-[600px] h-[74px]">
          <h1 className="text-[24px] text-[#1C1C1C] font-medium">Konfigurator Servisa</h1>
          <img src={x_button} alt="" />
        </div>
        <div id="content" className="flex flex-col items-start px-[30px] pt-0 pb-[15px] gap-[20px] w-[600px] h-[428px]">
          <p className="text-[#1C1C1C]; text-[18px]"><span className="text-[#004289] text-[16px]">Korak 3.</span> Vaši podaci</p>
          <div className='flex flex-col items-start p-0 w-[540px] h-[368px] '>
            <div className="h-[74px]">
              <label className='text-[14px] leading-[140%] text-[#585757] px-[5px]' htmlFor="ime">Ime i Prezime</label>
              <input className="flex flex-row items-start p-[5px] pl-[5px] w-[540px] h-[34px] bg-[rgba(0,0,0,0.04)] border border solid border-[rbga(0,0,0,0.004)] rounded-[3px]" type="text" id="ime" name="ime_prezime" value={data.ime_prezime} onChange={handleChange}></input>
              <p className="hidden">Error</p>
            </div>
            <div className="h-[74px]">
              <label className='text-[14px] leading-[140%] text-[#585757] px-[5px]' htmlFor="email">Email</label>
              <input className="flex flex-row items-start p-[5px] pl-[5px] w-[540px] h-[34px] bg-[rgba(0,0,0,0.04)] border border solid border-[rbga(0,0,0,0.004)] rounded-[3px]" type="text" id="email" name="email" value={data.email} onChange={handleChange}></input>
            </div>
            <div className="h-[74px]">
            <label className='text-[14px] leading-[140%] text-[#585757] px-[5px]' htmlFor="telefon">Telefon</label>
              <input className="flex flex-row items-start p-[5px] pl-[5px] w-[540px] h-[34px] bg-[rgba(0,0,0,0.04)] border border solid border-[rbga(0,0,0,0.004)] rounded-[3px]" type="text" id="telefon" name="telefon" value={data.telefon} onChange={handleChange}></input>
              <p className="hidden">Error</p>
            </div>
            <div className="h-[74px]">
              <label className='text-[14px] leading-[140%] text-[#585757] px-[5px]' htmlFor="napomena">Napomena</label>
              <textarea className="flex flex-row items-start p-[5px] pl-[5px] w-[540px] h-[106px] bg-[rgba(0,0,0,0.04)] border border solid border-[rbga(0,0,0,0.004)] rounded-[3px]" type="text" id="napomena" name="napomena" value={data.napomena} onChange={handleChange}></textarea>
              <p className="hidden">Error</p>
            </div>
              
              
              
              
          </div>
        </div>
        
        <div id="buttons" className='flex flex-row justify-end items-center pt-[20px] px-[20px] pb-[20px] gap-[20px] w-[600px] h-[65px]'>
            <button className='flex flex-row items-center py-[5px] px-[15px] gap-[10px] w-[80px] h-[35px] border border-solid border-[#585757] rounded-[3px] text-[18px] leading-[180%] text-[#1C1C1C]' onClick={() => back(1)}>Nazad</button>
            <button
            className={"flex flex-row items-center py-[5px] px-[15px] gap-[5px] w-[70px] h-[35px]  rounded-[3px]  text-[18px] leading-[140%]" + (toggle ?  " bg-[#004289] text-[#fff]" : " bg-[rgba(0,0,0,0.15)] text-[#969696]") }
            onClick={() => { toggle ? next() : handleValidation()}}> Dalje
            </button>
        </div>

    </div>
   
  )
}

export default MultiStep3