import React from 'react';
import '../public/tarjeta.css';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";

export default class Tarjeta extends React.Component {
	render() {

        let view;
        if(this.props.login){
            view = <div>
                        <Link onClick={this.props.onClick} className='button' to={this.props.navigate}>Saber más</Link>
                    </div>;
        } else{
            view = <div>
                        <Link onClick={this.props.onClick} className='button' to="/login">Saber más</Link>
                    </div>;
        }


		return (
			<div className='tarjeta'>
                <div style={{display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <hr style={{color:'#5A5847', width: '10em'}}/>
                        <h2 className='titulo_servicio'>{this.props.titulo}</h2>
                        <hr style={{color:'#5A5847', width: '10em'}}/>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-around'}}>
                        <img src={this.props.foto} style={{width: '300px'}}/>
                        {view}
                    </div>
                    <div style={{width:'100%', paddingTop:'20px', paddingBottom:'15px',textAlign:"justify",textJustify:"inter-word"}}>
                        <span className='descripcion_servicio'>
                            En esta sección de {this.props.titulo} podrá encontrar distinta información relacionada con 
                            el {this.props.titulo} ofrecido por nuestro hotel a usted como cliente. Además, podrá gestionar 
                            nuevas opciones en función de su categoria de cliente y contactar con el personal.
                        </span>
                    </div>
                </div>
            </div>
		);
	}
}