import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pic from '../../assets/apply.svg'
import x_button from '../../assets/x_button.svg'

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
    <div className='flex flex-col items-start justify-center p-0 w-[600px] h-[395px]  border border-solid border-[rgba(0,0,0,0.15)] bg-white rounded-[5px] shadow-md;'>
        <div id="header" className="flex flex-row justify-between py-[20px] pr-[20px] pl-[30px] w-[600px] h-[74px]">
          <h1 className="text-[24px] text-[#1C1C1C] font-medium">Konfigurator Servisa</h1>
          <img src={x_button} alt="" />
        </div>
        <div id="content" className="flex flex-col items-start px-[30px] pt-0 pb-[15px] gap-[20px] w-[600px] h-[256px]">
            <p className="text-[#1C1C1C]; text-[18px]"><span  className="text-[#004289] text-[16px]">Korak 2.</span> Odaberite jednu ili više usluga</p>
            <div className='flex flex-col flex-wrap items-start pt-[10px]  w-[540px] h-[112px] bg-[#FEFEFE] '>
                {data.usluge.map(({id,text,price,checked}) => {
                    return(<div className="basis-1/3 text-[16px] leading-[150%]" key={id}>
                            <input className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded' type="checkbox" id={id} name="usluge" value={id} onClick={handleValidation} onChange={handleCheckboxChange} checked={checked}></input>
                            <label className='ml-2 text-sm font-medium text-gray-900' htmlFor="usluge">{text} <span className="text-[#004289]">({price}€)</span></label>
                        </div>) 
                })}
            </div>
            <div className={'flex flex-row justify-between items-center w-[540px]  bg-[#F8F8F8] p-[15px] gap-[10px]' + (kupon ? " h-[93px]" : " h-[64px]")}>
                <div className='flex flex-col items-start p-0 gap-[5px] w-[199px] h-[63px]' >
                        <p className='label text-[#004289] hover:underline hover:cursor-pointer' htmlFor="kupon" onClick={handleKupon}>imam kupon</p>
                        <div className='flex flex-row'>
                            {kupon ? 
                            (<>
                                <input className='w-[155px] h-[34px] py-[5px] pr-[5px] pl-[10px] bg-[rgba(0,0,0,0.04)] border border-solid border-[rbga(0,0,0,0.04)] rounded-[3px]' type="text" id="kupon" name="kupon" value={data.kupon} onChange={handleChange}></input>
                                <button className='flex p-[5px] w-[34px] h-[34px]' onClick={handleCoupon}><img src={pic} alt="" /></button>
                            </>)
                            : null}
                            
                        </div>
                </div>
                <div className="w-[178px] h-[34px] p-0 text-[18px] text-[#1c1c1c]">UKUPNO: <span className="text-[24px] text-[#004289]">{data.ukupno} €</span> </div>
            </div>
        </div>
        
        
        
        <div id="buttons" className='flex flex-row justify-end items-center pt-[20px] px-[20px] pb-[20px] gap-[20px] w-[600px] h-[65px]'>
            <button className='flex flex-row items-center py-[5px] px-[15px] gap-[10px] w-[80px] h-[35px] border border-solid border-[#585757] rounded-[3px] text-[18px] leading-[180%] text-[#1C1C1C]' onClick={() => back(1)}>Nazad</button>
            <button
            className={"flex flex-row items-center py-[5px] px-[15px] gap-[5px] w-[70px] h-[35px]  rounded-[3px]  text-[18px] leading-[140%]" + (toggle ?  " bg-[#004289] text-[#fff]" : " bg-[rgba(0,0,0,0.15)] text-[#969696]") }
            onClick={() => { toggle ? next() : notify()}}> Dalje
            </button>
            
        </div>
    </div>
   
  )
}

export default MultiStep2