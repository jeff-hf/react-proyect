import React, { createContext, useEffect, useState } from 'react';
import ListaItem from '../ListaItem/ListaItem'
import "./Lista.scss";

export const MyContext = createContext({})

const Lista = () => {

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
    <MyContext.Provider value={data} >
      <div className='lugares'>
        <h1 className='lugarTittle'>Lugares para dejar la basura</h1>
        <ul className='Lugar'>
            {
              data.map(
                (lugar) => <ListaItem key={lugar.id} id={lugar.id} name={lugar.name}/>
              )
            }
        </ul>
      </div>
    </MyContext.Provider>
)};

export default Lista;
