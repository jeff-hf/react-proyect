import { useState } from 'react';
import Indicar from '../Indicar/Indicar';
import React from 'react'
import "./Button.scss"
import Horario from '../Horario/Horario';

function Button() {
    const [showIndicar, setShowIndicar] = useState(false);
  return (
    <div className='boton_indicar'>
        <button className='indicar' onClick={() => setShowIndicar(!showIndicar)} >Horarios</button>
          { showIndicar && <Horario/> } { showIndicar && <Indicar/> }
    </div>
  )
}

export default Button