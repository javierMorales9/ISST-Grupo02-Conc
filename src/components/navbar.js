import React from 'react';
import Diamond from './diamond.js';
import '../public/navbar_pages.css';
import default_profile from '../media/default_profile.jpeg';

export default class NavBar extends React.Component {
	render() {
	   return(
		<div id="navbar">

			<div id="links">
				<div className="home_button">
					<div id="Diamond"><Diamond color={"#FFFFFF"} x={"45"} y={"50"} /></div>
					<a id="home_link" href='/'>Hotel</a>
				</div>

				<div id="pages">
					<a className="page_link" href='/booking'>Reservas</a>
					<a className="page_link" href='/room_service'>RoomService</a>
					<a className="page_link" href='/transport'>Transportes</a>
					<a className="page_link" href='/leisure'>Ocio</a>
				</div>
			</div>

			<div id="profile">
				<a className= "profile_link" href='/profile'>
					<img id="profile_pic" src={default_profile}/>
				</a>
			</div>

		</div>

	   );
	}
}

