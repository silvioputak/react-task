import React from 'react'

const MultiStep3 = (props) => {
    const {data, handleChange, next, back} = props
  return (
    <div>
        <h1>Konfigurator Servisa</h1>
        <p><span>Korak 3.</span> Vaši podaci</p>
        <form htmlform="podaci" className='flex flex-col items-start p-0 w-[600px] h-[345px] bg-[#FEFEFE] border border-solid border-[rgba(0,0,0,0.15)] rounded-[5px]'>
            <label htmlFor="ime">Ime i Prezime</label>
            <input type="text" id="ime" name="ime_prezime" value={data.ime_prezime} onChange={handleChange}></input>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={data.email} onChange={handleChange}></input>
            <label htmlFor="telefon">Telefon</label>
            <input type="text" id="telefon" name="telefon" value={data.telefon} onChange={handleChange}></input>
            <label htmlFor="napomena">Napomena</label>
            <input type="text" id="napomena" name="napomena" value={data.napomena} onChange={handleChange}></input>


        <div className='flex flex-row'>
            <button className='button' onClick={next}>Dalje</button>
            <button className='button ml-[5px]' onClick={back}>Nazad</button>
        </div>
        
   </form>

    </div>
   
  )
}

export default MultiStep3