import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pic from '../../assets/apply.svg'

const MultiStep2 = (props) => {
    const {data, handleChange, handleCheckboxChange, handleCoupon, next, back} = props
    const [kupon, setKupon] = useState(false)
     //Validation state and function
    const [toggle, setToggle] = useState(false)
    const handleValidation = () => {
        data.usluge.filter((item) => {item.checked ? setToggle(true) : null})
    }
    const notify = () => toast("Molim te odaberi navedeno u konfiguratoru.", {autoClose: 1000});

    const handleKupon = () => {
        setKupon(!kupon)
    }

    useEffect(() => {
        //Runs on every render
        handleValidation()
      });
  return (
    <div className='flex flex-col items-start justify-center p-[10px] gap-[30px]  border border-solid border-[rgba(0,0,0,0.15)] rounded-[5px] shadow-md;'>
        <h1 className="text-[20px] text-[#1C1C1C]">Konfigurator Servisa</h1>
        <p className="text-[#1C1C1C]; text-[18px]"><span  className="text-[#004289] text-[16px]">Korak 2.</span> Odaberite jednu ili više usluga</p>
        <div className='flex flex-row flex-wrap items-center pt-0 py-[15px] pb-[30px] w-[600px] h-[345px] bg-[#FEFEFE]'>
            {data.usluge.map(({id,text,price,checked}) => {
                return(<div className="w-[50%]" key={id}>
                        <input className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded' type="checkbox" id={id} name="usluge" value={id} onClick={handleValidation} onChange={handleCheckboxChange} checked={checked}></input>
                        <label className='ml-2 text-sm font-medium text-gray-900' htmlFor="usluge">{text} <span className="text-[#00428]">({price}€)</span></label>
                    </div>) 
            })}
        </div>
        <div className='flex flex-row justify-between w-full'>
            <div className='flex flex-col' >
                    
                    <p className='label text-[#004289] hover:underline hover:cursor-pointer' htmlFor="kupon" onClick={handleKupon}>imam kupon</p>
                    <div className='flex flex-row'>
                        {kupon ? 
                        (<>
                            <input className='text-input' type="text" id="kupon" name="kupon" value={data.kupon} onChange={handleChange}></input>
                            <button className='flex ' onClick={handleCoupon}><img src={pic} alt="" /></button>
                        </>)
                        : null}
                        
                    </div>
                    
            </div>
            <div>UKUPNO: {data.ukupno} €</div>
        </div>
        
        
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

export default MultiStep2