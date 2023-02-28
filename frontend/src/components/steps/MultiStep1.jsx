import React from 'react'

const MultiStep1 = (props) => {
    const {data, handleChange, next,back} = props
  return (
    <div className='flex flex-col items-start justify-center p-[10px] gap-[30px] w-[40%] h-[50%] border border-solid border-[rgba(0,0,0,0.15)] rounded-[5px]'>
        <h1>Konfigurator Servisa</h1>
        <p><span>Korak 1.</span> Odaberite proizvođaća vašeg vozila</p>
        <div className='flex flex-col items-start p-0 w-[600px] h-[345px] bg-[#FEFEFE] '>
          {data.ime_auta.map(({id,text,checked}) => {
              return(
              <div className='inline' key={id}>
                  <input type="radio" id={id} name="ime_auta" value={text} onChange={handleChange} checked={checked}></input>
                  <label htmlFor={id}>{text}</label>
              </div>) 
          })}
        </div>
        <div className='flex flex-row'>
            <button className='button' onClick={next}>Dalje</button>
            <button className='button ml-[5px]' onClick={back}>Odustani</button>
        </div>
        

    </div>
   
  )
}

export default MultiStep1