import React from 'react'
import pic from '../../assets/uredi.svg'
import Configurator from './Configurator'

const MultiStep4 = (props) => {
    const {data, handleChange, next, back,quit} = props
  return (
    <div className='flex flex-col items-start justify-center p-0 w-[600px] h-[765px] border border-solid border-[rgba(0,0,0,0.15)] bg-white rounded-[5px] shadow-md'>
       <Configurator quit={quit}/>
        <div id="content" className="flex flex-col items-start px-[30px] pt-0 pb-[15px] gap-[20px] w-[600px] h-[626px]">
            <div id="title" className='flex flex-start flex-col h-[131px] w-[540px] p-0 gap-[10px]'>
                <p className="text-[#1C1C1C]; text-[18px]"><span className="text-[#004289] text-[16px]">Korak 4.</span> Pregled i potvrda vašeg odabira</p>
                <p className='h-[96px] w-[540px] text-[#585757] leading-[150%] text-[16px]'>Molimo vas da još jednom pregledate i potvrdite podatke. 
                Ukoliko želite promijeniti neki od podataka, možete pritisnuti gumb za
                uređivanje pored svake od kategorija.
                Kada ste provjerili ispravnost svojih podataka,
                za slanje upita na servis pritisnite gumb “Pošalji” koji se nalazi na dnu.</p>
            </div>
            <div className='flex flex-col items-start px-[10px] w-[540px] h-[460px] bg-[#f8f8f8]'>
                <div className="flex flex-col items-start pt-[10px] pr-0 pb-[20px] gap-[10px] h-[89px] w-[540px] border-b border-solid border-[rgba(0,0,0,0.15)]">
                    <div className='flex flex-row w-[520px] h-[25px] items-center justify-between gap-[10px]'>
                        <h1 className='text-[#004289] text-[18px]'>Model Vozila</h1>
                        <div className='flex flex-row item-center pr-[2px] pl-[5px] gap-[5px] cursor-pointer' onClick={() => back(3)}>
                            <p>Uredi</p>
                            <img src={pic}/>
                        </div>
                        
                    </div>
                    <div className='w-[520px] h-[25px] text-[#1c1c1c]'>
                        {data.ime_auta.map(({id,text,checked}) => {
                            if(checked){
                                return(
                                    <h3 key={id}>{text}</h3>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className='flex flex-col items-start py-[20px] gap-[10px] h-[177px] w-[520px] border-b border-solid border-[rgba(0,0,0,0.15)]'>
                    <div className='flex flex-row w-[520px] h-[25px] items-center justify-between gap-[10px]'>
                        <h1 className='text-[#004289] text-[18px]'>Odabrane usluge</h1>
                        <div className='flex flex-row item-center pr-[2px] pl-[5px] gap-[5px] cursor-pointer' onClick={() => back(2)}>
                            <p>Uredi</p>
                            <img src={pic}/>
                        </div>
                    </div>
                    <div className='w-[520px]'>
                        {data.usluge.map(({id,text,price,checked}) =>{
                        if(checked){
                                return(
                                    <div key={id} className='flex flex-row justify-between'>
                                        <h3>{text}</h3>
                                        <p>{price} <span>€</span></p>
                                    </div>
                                )
                        }
                        })}
                    </div>
                    <div className='flex flex-col items-end w-[520px]'>
                        {(data.popust) ? <div className='flex flex row'><h3>Popust 30%: </h3><p>-{data.ukupno * 0.3} €</p></div> : <></>}
                        <div className='flex flex row'><h3>Ukupno:</h3><p>{data.ukupno} €</p></div>
                    </div>
                </div>
                <div className='flex flex-col items-start pt-[20px] pr-0 pb-[10px] gap-[10px] h-[194px] w-[520px] border-b border-solid border-[rgba(0,0,0,0.15)]'>
                    <div className='flex flex-row w-[520px] h-[25px] items-center justify-between gap-[10px]'>
                        <h1 className='text-[#004289] text-[18px]'>Kontakt Podaci</h1>
                        <div className='flex flex-row item-center pr-[2px] pl-[5px] gap-[5px] cursor-pointer' onClick={() => back(1)}>
                            <p>Uredi</p>
                            <img src={pic}/>
                        </div>
                    </div>
                    <div>
                        <p>Ime i prezime: <span className='inline-block'>{data.ime_prezime}</span></p>
                        <p>Email adresa: <span className='inline-block'>{data.email}</span></p>
                        <p>Broj telefona: <span className='inline-block'>{data.telefon}</span></p>
                        <p>Napomena: <span className='inline-block'>{data.napomena}</span></p>
                    </div>
                    
                </div>
            </div>
        </div>
        <div id="buttons" className='flex flex-row justify-end items-center pt-[20px] px-[20px] pb-[20px] gap-[20px] w-[600px] h-[65px]'>
            <button className='flex flex-row items-center py-[5px] px-[15px] gap-[10px] w-[80px] h-[35px] border border-solid border-[#585757] rounded-[3px] text-[18px] leading-[180%] text-[#1C1C1C]' onClick={() => back(1)}>Nazad</button>
            <button
            className={"flex flex-row items-center py-[5px] px-[15px] gap-[5px] w-[70px] h-[35px]  rounded-[3px]  text-[18px] leading-[140%] bg-[#004289] text-[#fff]" }
            onClick={next}> Dalje
            </button>
        </div>

    </div>
   
  )
}

export default MultiStep4