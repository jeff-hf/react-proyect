import {Component} from "react";
import "./Body.scss";

class Body extends Component{
    render(){
        return(
           <section className="eslogan">
               <div>
                   <img src={'https://i.imgur.com/0sicLvx.png'}></img>
                   <h3><i className="bi bi-trash"></i> La Web que te recuerda cuando sacar la basura <i class="bi bi-trash"></i></h3>
                   <p>Aplicación web para el uso comunitario totalmente gratuito, La función principal es ayudar a los miembros de las comunidad a ordenar sus horarios y ser mas responsables con sus desechos y así evitar los malos olores en los lugare publicos.</p>
               </div>
           </section> 
        ); 
    };
}

export default Body;