import React from 'react'
import pic from '../../assets/uredi.svg'

const MultiStep4 = (props) => {
    const {data, handleChange, next, back} = props
  return (
    <div className='flex flex-col items-start justify-center p-[10px] gap-[30px]  border border-solid border-[rgba(0,0,0,0.15)] rounded-[5px] shadow-md;'>
        <h1 className="text-[20px] text-[#1C1C1C]">Konfigurator Servisa</h1>
        <p className="text-[#1C1C1C]; text-[18px]"><span className="text-[#004289] text-[16px]">Korak 4.</span> Pregled i potvrda vašeg odabira</p>
        <p className='w-full'>Molimo vas da još jednom pregledate i potvrdite podatke. 
            Ukoliko želite <br /> promijeniti neki od podataka, možete pritisnuti gumb za
            uređivanje pored svake od kategorija.<br />
            Kada ste provjerili ispravnost svojih podataka, <br />
            za slanje upita na servis pritisnite gumb “Pošalji” koji se nalazi na dnu.</p>
        <div className='flex flex-col w-full '>
            <div className="border border-solid border-[rgba(0,0,0,0.15)] rounded-[5px] w-full bg-gray my-3 px-3 py-1">
                <div className='flex flex-row w-full justify-between mb-1'>
                    <h1>Model Vozila</h1>
                    <div className='flex flex-row gap-2 cursor-pointer' onClick={() => back(3)}>
                        <p>Uredi</p>
                        <img src={pic}/>
                    </div>
                    
                </div>
                <div>
                    {data.ime_auta.map(({id,text,checked}) => {
                        if(checked){
                            return(
                                <h3 key={id}>{text}</h3>
                            )
                        }
                    })}
                </div>
            </div>
            <div className='border border-solid border-[rgba(0,0,0,0.15)] rounded-[5px] w-full bg-gray my-3 px-3 py-1'>
                <div className='flex flex-row w-full justify-between mb-1'>
                    <h1>Odabrane usluge</h1>
                    <div className='flex flex-row gap-2 cursor-pointer' onClick={() => back(2)}>
                        <p>Uredi</p>
                        <img src={pic}/>
                    </div>
                </div>
                <div >
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
                <div className='flex flex-col items-end'>
                   {(data.popust) ? <div className='flex flex row'><h3>Popust 30%: </h3><p>-{data.ukupno * 0.3} €</p></div> : <></>}
                   <div className='flex flex row'><h3>Ukupno:</h3><p>{data.ukupno} €</p></div>
                </div>
            </div>
            <div className='border border-solid border-[rgba(0,0,0,0.15)] rounded-[5px] w-full bg-gray my-3 px-3 py-1'>
                <div className='flex flex-row w-full justify-between mb-1'>
                    <h1>Kontakt Podaci</h1>
                    <div className='flex flex-row gap-2 cursor-pointer' onClick={() => back(1)}>
                        <p>Uredi</p>
                        <img src={pic}/>
                    </div>
                </div>
                <div>
                    <p>Ime i prezime: <span>{data.ime_prezime}</span></p>
                    <p>Email adresa: <span>{data.email}</span></p>
                    <p>Broj telefona: <span>{data.telefon}</span></p>
                    <p>Napomena: <span>{data.napomena}</span></p>
                </div>
                
            </div>
        </div>


        <div className='w-full flex justify-end'>
            <button className='button mr-[5px]' onClick={() => back(1)}>Nazad</button>
            <button className='button  bg-[#004289] text-white hover:bg-[#003142]' onClick={next}>Pošalji</button>
        </div>

    </div>
   
  )
}

export default MultiStep4