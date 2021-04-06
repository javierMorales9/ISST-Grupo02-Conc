import React from 'react';
import NavBarInicio from '../components/navbar.js';
import Footer from '../components/footer.js';
import Tarjeta from '../components/tarjeta.js';
import Habitacion from '../media/habitacion.png';
import Confort from '../media/confort.jpg';
import Transporte from '../media/avion.jpg';
import Ocio from '../media/spa.png';
import Otros from '../media/otros.jpg';
import '../public/main_styles.css';


export default class Inicio extends React.Component {
	render() {
		return (
			<div style={{background: 'D0D0D0'}}>

				<h1 className='subtitulo'>Servicios</h1>
				<hr style={{color:'gray', width: '70%', border:'2px solid'}}/>
		
				<div style={{display: 'flex', flexDirection:'column',padding: '20px'}}>
					<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin:'10px 10px 10px 10px'}}>
						<Tarjeta login={this.props.login} onClick={this.props.click} titulo={'Estancia'} foto={Habitacion} navigate={'/booking'}/>
						<Tarjeta login={this.props.login} onClick={this.props.click} titulo={'Room Service'} foto={Confort} navigate={'/room_service'}/>
					</div>	
					<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin:'10px 10px 10px 10px'}}>
						<Tarjeta login={this.props.login} onClick={this.props.click} titulo={'Transporte'} foto={Transporte} navigate={'/transport'}/>
						<Tarjeta login={this.props.login} onClick={this.props.click} titulo={'Ocio'} foto={Ocio} navigate={'/leisure'}/>
					</div>	
					<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin:'10px 10px 10px 10px'}}>
						<Tarjeta login={this.props.login} onClick={this.props.click} titulo={'Servicio Premium'} foto={Otros} navigate={'/premium'}/>
					</div>				
				</div>

				<Footer/>

			</div>

		);
	}
}

