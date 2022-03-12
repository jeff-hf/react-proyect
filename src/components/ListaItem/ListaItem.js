import React, {useState} from 'react'
import styles from "./ListaItem.module.scss"

const ListaItem = ({id, name, hora}) => {
    const [checked, setChecked] = useState(false)

    const checkedOnHandler = i => setChecked(i.target.checked)

  return (
    <li className={styles.listaItem}>
        <span className={ checked ? styles.check : undefined }>
            {id} | {name} | {hora} 
        </span> 
        <input type="checkbox" onChange={ e => checkedOnHandler(e)} />
    </li>  
  )
};

export default ListaItem