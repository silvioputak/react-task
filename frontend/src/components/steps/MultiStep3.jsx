import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const MultiStep3 = (props) => {
    const {data, handleChange, next, back} = props
     //Validation state and function
     const [toggle, setToggle] = useState(false)
     const handleValidation = () => {
         if(data.ime_prezime && data.email && data.telefon) {
          setToggle(true)
         }
     }
     const notify = () => toast("Odaberi ime, email i telefon!", {autoClose: 1000});

     useEffect(() => {
      //Runs on every render
      handleValidation()
    });


  return (
    <div className='flex flex-col items-start justify-center p-[10px] gap-[30px]  border border-solid border-[rgba(0,0,0,0.15)] rounded-[5px] shadow-md;'>
        <h1 className="text-[20px] text-[#1C1C1C]">Konfigurator Servisa</h1>
        <p className="text-[#1C1C1C]; text-[18px]"><span className="text-[#004289] text-[16px]">Korak 3.</span> Vaši podaci</p>
        <form htmlform="podaci" className='flex flex-col items-start p-0 w-[600px] h-[345px] bg-[#FEFEFE] border border-solid border-[rgba(0,0,0,0.15)] rounded-[5px]'>
            <label className='label' htmlFor="ime">Ime i Prezime</label>
            <input required className="text-input" type="text" id="ime" name="ime_prezime" value={data.ime_prezime} onChange={handleChange}></input>
            <label className='label' htmlFor="email">Email</label>
            <input required className="text-input" type="text" id="email" name="email" value={data.email} onChange={handleChange}></input>
            <label className='label' htmlFor="telefon">Telefon</label>
            <input required className="text-input" type="text" id="telefon" name="telefon" value={data.telefon} onChange={handleChange}></input>
            <label className='label' htmlFor="napomena">Napomena</label>
            <textarea className="text-input" rows='4' type="text" id="napomena" name="napomena" value={data.napomena} onChange={handleChange}></textarea>
      </form>
      <div className='w-full flex justify-end'>
          <button className='button mr-[5px]' onClick={() => back(1)}>Nazad</button>
          <button
            className='button bg-[#004289] text-white hover:bg-[#003142]'
            onClick={() => { toggle ? next() : notify()}}> Dalje
            </button>
            <ToastContainer />
      </div>

    </div>
   
  )
}

export default MultiStep3