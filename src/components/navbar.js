import React from 'react';
import {footer, titulo, descripcion_titulo, foto_inicio, subtitulo, cuadrados_servicios, titulo_servicio, saber_mas, foto_servicio, 
descripcion_servicio, links_navegacion, link_hoteles, footer_upper_text, footer_lower_text, links_titulo, link_hoteles_titulo} from '../estilos_inicio';



export default class NavBar extends React.Component {
	render() {
		return (
			<div style={{backgroundColor: 'black', listStyleType:'none', padding:'0em', margin:'auto', display:'flex', alignItems:'center', justifyContent: 'center', position: 'sticky', top: '0', width: '100%'}}>
				<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20%', margin:'1em 1em'}}>
					<a style={link_hoteles_titulo} href='/'>Hotels</a>
				</div>
				<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60%', margin:'0 2.5em 0'}}>
					<a style={links_titulo} href='/booking'>Reserva</a>
					<a style={links_titulo} href='/room_service'>Servicio</a>
					<a style={links_titulo} href='/transport'>Transportes</a>
					<a style={links_titulo} href='/leisure'>Ocio</a>
				</div>
				<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20%', margin:'1em 1em'}}>
					<a style={links_titulo} href='/profile'>Link al perfil</a>
				</div>
			</div>

			
		);
	}
}
