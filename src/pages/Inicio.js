import React from 'react';
import {footer, titulo, descripcion_titulo, foto_inicio, subtitulo, cuadrados_servicios, titulo_servicio, saber_mas, foto_servicio, 
descripcion_servicio, links_navegacion, link_hoteles, footer_upper_text, footer_lower_text, links_titulo, link_hoteles_titulo} from '../public/estilos_inicio';
import NavBarInicio from '../components/navbarInicio.js';
import Footer from '../components/footer.js';
import Tarjeta from '../components/tarjeta.js';
import obras from '../media/obras.png';


export default class Game extends React.Component {
	render() {
		return (
			<div style={{background: 'D0D0D0'}}>

				<NavBarInicio/>
				
				<div style={{marginTop:'40px', fontSize: '200px', display: 'grid', alignItems:'center', justifyContent: 'center'}}>
					<span style={subtitulo}><u>Servicios</u></span>
				</div>

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

