import React from 'react'

const MultiStep4 = (props) => {
    const {data, handleChange, next, back} = props
  return (
    <div>
        <h1>Konfigurator Servisa</h1>
        <p><span>Korak 4.</span> Pregled i potvrda vašeg odabira</p>
        <p>Molimo vas da još jednom pregledate i potvrdite podatke.
            Ukoliko želite promijeniti neki od podataka, možete pritisnuti gumb za
            uređivanje pored svake od kategorija.
            Kada ste provjerili ispravnost svojih podataka,
            za slanje upita na servis pritisnite gumb “Pošalji” koji se nalazi na dnu.</p>
        <div>
            <div className="Model vozila sekcija">
                <div className='flex flex-row'>
                    <h1>Model Vozila</h1>
                    <p>Uredi <span>Ikona</span></p>
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
            <div className='Odabrane usluge'>
                <div className='flex flex-row'>
                    <h1>Odabrane usluge</h1>
                    <p>Uredi <span>Ikona</span></p>
                </div>
                <div >
                    {data.usluge.map(({id,text,price,checked}) =>{
                       if(checked){
                            return(
                                <div key={id} className='flex flex-row'>
                                    <h3>{text}</h3>
                                    <p>{price} <span>€</span></p>
                                </div>
                            )
                       }
                    })}
                </div>
                <div className='flex flex-row'>
                   {(data.popust) ? <h3>Popust: 30%</h3> : <></>}
                </div>
            </div>
        </div>


        <div className='flex flex-row'>
            <button className='button' onClick={next}>Dalje</button>
            <button className='button ml-[5px]' onClick={back}>Nazad</button>
        </div>

    </div>
   
  )
}

export default MultiStep4