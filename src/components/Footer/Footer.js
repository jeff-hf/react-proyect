import { Component } from "react/cjs/react.production.min";
import "./Footer.scss"

class Footer extends Component{
    render(){
        return(
            <div className="hola"> 
                <footer className="s">
                    <div className="redes-container">
                        <p>Conectate con nosotros</p>
                        <div className="redes">
                            <a className="face" href="https://www.facebook.com/munidesanjose" target="_blank"><i class="bi bi-facebook grow"></i></a>
                            <a className="face" href="https://twitter.com/munidesanjose" target="_blank"><i class="bi bi-twitter grow"></i></a>
                            <a className="face" href="https://www.youtube.com/channel/UCIoRPEYhod0eiinqB7jUHKw/featured" target="_blank"><i class="bi bi-youtube grow"></i></a>
                        </div>
                    </div>
                    <div className="final">
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <img src={'https://i.imgur.com/0sicLvx.png'}></img> 
                        </div>
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Garbage Bag
                            </h6>
                            <p>
                                Aplicación web para el uso comunitario totalmente gratuito, La función principal es ayudar a los miembros de las comunidad a ordenar sus horarios y ser mas responsables con sus desechos
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                            Contacto
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Correo: porusted@msj.go.cr</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Teléfono: (506) 2547-6317</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Línea 800</a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    };
};

export default Footer;