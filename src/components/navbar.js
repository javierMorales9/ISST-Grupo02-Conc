
import React from 'react';
import Diamond from './diamond.js';
import '../public/navbar.css';
import default_profile from '../media/default_profile.jpeg';

export default class NavBar extends React.Component {
	render() {
	   return(
		<div id="navbar">
			<div style={{flex:'1'}}>
				<li style={{paddingTop:'15px', paddingLeft:'55px'}}>
					<Diamond color={'#c0b4b4'}/>
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
					<a href='/profile' style={{paddingBottom: '0'}}>
						<img src={default_profile} className='image'/>
					</a>
				</li>	
			</div>
		</div>

	   );
	}
}

