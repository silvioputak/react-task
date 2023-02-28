import React from 'react'

const MultiStep2 = (props) => {
    const {data, handleChange, handleCheckboxChange, handleCoupon, next, back} = props
  return (
    <div>
        <h1>Konfigurato Servisa</h1>
        <p><span>Korak 2.</span> Odaberite jednu ili više usluga</p>
        <div htmlform="ime_usluge" className='flex flex-col items-start p-0 w-[600px] h-[345px] bg-[#FEFEFE] border border-solid border-[rgba(0,0,0,0.15)] rounded-[5px]'>
            {data.usluge.map(({id,text,price,checked}) => {
                return(<div key={id}>
                    <input type="checkbox" id={id} name="usluge" value={id} onChange={handleCheckboxChange} checked={checked}></input>
                    <label htmlFor="usluge">{text}</label>
                </div>) 
            })}
        <div>
            <div>
                <p></p>
                <div>
                <label htmlFor="kupon">imam kupon</label>
                <input type="text" id="kupon" name="kupon" value={data.kupon} onChange={handleChange}></input>
                <button onClick={handleCoupon}>primjeni</button>
                </div>
            </div>
            <div>UKUPNO: {data.ukupno} €</div>
        </div>
        <div className='flex flex-row'>
            <button className='button' onClick={next}>Dalje</button>
            <button className='button ml-[5px]' onClick={back}>Nazad</button>
        </div>
        
   </div>

    </div>
   
  )
}

export default MultiStep2