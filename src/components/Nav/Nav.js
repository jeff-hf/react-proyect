import {Component} from "react";
import {NavLink } from "react-router-dom";
import "./Nav.scss"

class Nav extends Component{
    render(){
        return(
           <div className="">
               <nav className="navbar navbar-expand-lg nav">
                    <div className="container-fluid">
                        <img src={'https://i.imgur.com/0sicLvx.png'}></img>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to="/">Inicio</NavLink>
                            <NavLink to="/indicar">Horario</NavLink>
                            <NavLink to="/lista">Lista de Zonas</NavLink>
                            <NavLink to="/contacto">Contacto</NavLink>
                        </div>
                        </div>
                    </div>
                </nav>
           </div> 
        ); 
    };
}

export default Nav;