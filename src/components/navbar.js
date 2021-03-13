
import React from 'react';
import Diamont from './diamont.js';
import '../public/navbar.css';

export default class NavBar extends React.Component {
	render() {
	   return(
		<div id="navbar">
			<div style={{flex:'1'}}>
				<li style={{paddingTop:'15px', paddingLeft:'55px'}}>
					<Diamont color={'#c0b4b4'}/>
				</li>
				<li style={{fontSize:'50px'}}>
					<a  href='/'>Hotel</a>
				</li>
			</div>
			<div style={{flex:'2', display:'flex', justifyContent:'center'}}>
				<li>
					<a  href='/booking'>Reserva</a>
				</li>
				<li>
					<a href='/room_service'>Servicio</a>
				</li>
				<li>
					<a href='/transport'>Transportes</a>
				</li>
				<li >
					<a  href='/leisure'>Ocio</a>
				</li>
			</div>
			<div style={{flex:'1', display:'flex', justifyContent:'flex-end'}}>
				<li>
					<a href='/profile'>Link al perfil</a>
				</li>	
			</div>
		</div>

	   );
	}
}

