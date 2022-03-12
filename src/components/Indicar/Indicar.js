import "./Indicar.scss";
import { connect } from 'react-redux'
import { increment, decrement} from '../store/store'

const Indicar = (props) => {
    console.log(props)
    const onIncrementHandler = () => {
        if (props.state >= 7) {
            props.state = 0
        }else {
            props.dispatch(increment())
        }
    }

    const onDecrementHandler = () => {
        if (props.estate <= 0) {
            props.state = 0
        }else{
            props.dispatch(decrement())
        }
        
    }
    
    return(
        <section className="fechas">
             <h1 className="tittle">Indicar cuantos días va botar la basura a la semana:</h1>
            <div>
                <div>
                    <h3>Días: {props.state}</h3>
                    <button className="botonMas" onClick={onIncrementHandler} >+</button>
                    <button className="botonMas" onClick={onDecrementHandler} >-</button>
                </div>
            </div> 
        </section>
    )
}

const mapStateToProps = (state) => {
    return{
        state
    }
}

const IndicarConnected = connect(mapStateToProps)(Indicar)

export default IndicarConnected