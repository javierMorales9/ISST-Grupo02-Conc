import React from 'react';
import {footer, titulo, descripcion_titulo, foto_inicio, subtitulo, cuadrados_servicios, titulo_servicio, saber_mas, foto_servicio, 
descripcion_servicio, links_navegacion, link_hoteles, footer_upper_text, footer_lower_text} from '../estilos_inicio';


export default class NavBar extends React.Component {
	render() {
	return (
		<div style={{backgroundColor: 'black', listStyleType:'none', padding:'0em', margin:'auto', display:'flex', alignItems:'center', justifyContent: 'center'}}>
			<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20%', margin:'1em 1em'}}>
				<a style={link_hoteles}>Hotels</a>
			</div>
			<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60%', margin:'0 2.5em 0'}}>
				<a style={links_navegacion}>Reserva</a>
				<a style={links_navegacion}>Servicio</a>
				<a style={links_navegacion}>Transportes</a>
				<a style={links_navegacion}>Ocio</a>
			</div>
			<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20%', margin:'1em 1em'}}>
					<a style={links_navegacion}>Link al perfil</a>
			</div>
		</div>

		
		);
}
}
