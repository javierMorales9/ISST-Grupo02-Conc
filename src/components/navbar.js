
import React from 'react';
import Diamond from './diamond.js';
import '../public/navbar.css';
import default_profile from '../media/default_profile.jpeg';

export default class NavBar extends React.Component {
	render() {
	   return(
		<div id="navbar">
			<div style={{flex:'1'}}>
				<li id='none' style={{display:'flex', alignItems: 'center', justifyContent:'flex-start', marginLeft:'30px',fontSize:'50px'}}>
					<Diamond color={'#c0b4b4'}/>
					<a style={{paddingLeft:'20px', paddingRight:'20px'}} href='/'>Hotel</a>
				</li>
			</div>
			<div style={{flex:'2', display:'flex', justifyContent:'center', alignItems:'center'}}>
				<li>
					<a  href='/booking'>Reservas</a>
				</li>
				<li>
					<a href='/room_service'>RoomService</a>
				</li>
				<li>
					<a href='/transport'>Transportes</a>
				</li>
				<li >
					<a  href='/leisure'>Ocio</a>
				</li>
			</div>
			<div style={{flex:'1', display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
				<li>
					<a href='/profile' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
						<img src={default_profile} className='image'/>
					</a>
				</li>	
			</div>
		</div>

	   );
	}
}

