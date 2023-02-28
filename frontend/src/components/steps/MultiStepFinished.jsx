import React from 'react'

const MultiStepFinished = (props) => {
  const {data, handleChange, next, back} = props
  return (
    <div>
        <h1>Konfigurator Servisa</h1>
        <div>Ikona</div>

        <h3>Vaša prijava je uspješno poslana</h3>
        <p>Vaša prijava je uspješno poslana i zaprimljena. Kontaktirat ćemo vas u najkraćem mogućem roku. Hvala Vam!</p>

        <div className='flex flex-row'>
            <button className='button' onClick={next}>Zatvori</button>
        </div>

        <div className='flex flex-row'>
            <button className='button' onClick={next}>Dalje</button>
            <button className='button ml-[5px]' onClick={back}>Nazad</button>
        </div>
    </div>
  )
}

export default MultiStepFinished