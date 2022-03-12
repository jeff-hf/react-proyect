import React, { useEffect, useState } from 'react';
import ListaItem from '../ListaItem/ListaItem'

const Horario = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
    const fectData = async () => {
      let response = await fetch("https://localhost:7101/");
      let zonas = await response.json();
      setData(zonas);
    };
    
        fectData();
    }, [])

  return (
    <div className='lugares'>
    <h1 className='lugarTittle'>Horarios</h1>
    <ul className='Lugar'>
        {
          data.map(
            (lugar) => <ListaItem key={lugar.id} id={lugar.id} name={lugar.name} hora={lugar.time}/>
          )
        }
    </ul>
  </div>
  )
}

export default Horario