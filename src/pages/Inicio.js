import React from 'react';
import NavBarInicio from '../components/navbarInicio.js';
import Footer from '../components/footer.js';
import Tarjeta from '../components/tarjeta.js';
import '../public/main_styles.css';


export default class Inicio extends React.Component {
	render() {
		return (
			<div style={{background: 'D0D0D0'}}>

				<NavBarInicio/>
				
				<h1 className='subtitulo'>Servicios</h1>
				<hr style={{color:'gray', width: '70%', border:'2px solid'}}/>
		
				<div style={{display: 'grid', padding: '20px'}}>
					<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin:'10px 10px 10px 10px'}}>
						<Tarjeta titulo={'Reserva estancia'} navigate={'/booking'}/>
						<Tarjeta titulo={'Room Service'} navigate={'/room_service'}/>
					</div>	
					<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin:'10px 10px 10px 10px'}}>
						<Tarjeta titulo={'Transporte'} navigate={'/transport'}/>
						<Tarjeta titulo={'Ocio'} navigate={'/leisure'}/>
					</div>				
				</div>

				<Footer/>

			</div>

		);
	}
}

