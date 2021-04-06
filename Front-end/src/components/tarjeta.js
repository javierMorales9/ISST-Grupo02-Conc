import React from 'react';
import '../public/tarjeta.css';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";

export default class Tarjeta extends React.Component {
	render() {
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
                        <Link onClick={this.props.onClick} className='button' to={this.props.navigate}>Saber Más</Link>
                    </div>
                    <div style={{width:'100%', paddingTop:'20px'}}>
                        <span className='descripcion_servicio'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, ipsum morbi turpis feugiat eros enim. 
                            Nec nulla orci sed vitae nulla nam luctus mattis pellentesque. Amet elit tellus dolor fermentum felis. 
                            Nisi, enim vitae orci fames nunc mauris sagittis facilisis eu. Gravida sed purus placerat ultricies morbi. 
                        </span>
                    </div>
                </div>
            </div>
		);
	}
}