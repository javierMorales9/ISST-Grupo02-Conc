
import React from 'react';
import Diamond from './diamond.js';
import '../public/navbar.css';
import default_profile from '../media/default_profile.jpeg';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";

export default class NavBar extends React.Component {

	render() {

		let view;
		let view2;
		let profile = <Link onClick={this.props.click} to='/profile' style={{display:'flex', justifyContent:'center', alignItems:'center'}}><img src={default_profile} className='image'/></Link>
	    let noprofile = <Link onClick={this.props.click} to='/login'>Acceso</Link>;

        if(this.props.login){
            view = profile;
            view2 = <div style={{flex:'4', display:'flex', justifyContent:'center', alignItems:'center'}}>
						<li>
							<Link onClick={this.props.click} to='/booking'>Reservas</Link>
						</li>
						<li>
							<Link onClick={this.props.click} to='/room_service'>RoomService</Link>
						</li>
						<li>
							<Link onClick={this.props.click} to='/transport'>Transportes</Link>
						</li>
						<li>
							<Link onClick={this.props.click} to='/leisure'>Ocio</Link>
						</li>
						<li>
							<Link onClick={this.props.click} to='/premium'>Premium</Link>
						</li>
					</div>;
        } else{
            view = noprofile;
			view2 = <div style={{flex:'4', display:'flex', justifyContent:'center', alignItems:'center'}}>
						<li>
							<Link onClick={this.props.click} to='/login'>Reservas</Link>
						</li>
						<li>
							<Link onClick={this.props.click} to='/login'>RoomService</Link>
						</li>
						<li>
							<Link onClick={this.props.click} to='/login'>Transportes</Link>
						</li>
						<li>
							<Link onClick={this.props.click} to='/login'>Ocio</Link>
						</li>
						<li>
							<Link onClick={this.props.click} to='/login'>Premium</Link>
						</li>
					</div>;
        }
            

		return(
			<nav id="navbar">
				<div style={{flex:'1.4'}}>
					<li id='none' style={{display:'flex', alignItems: 'center', justifyContent:'flex-start', marginLeft:'30px',fontSize:'50px'}}>
						<Diamond color={'#c0b4b4'}/>
						<Link onClick={this.props.click} id="a_pinchar" style={{marginLeft:'5px',paddingLeft:'20px', paddingRight:'20px'}} to='/'>Hotel</Link>
					</li>
				</div>
				{view2}
				<div style={{flex:'1', display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
					<li>
						{view}
					</li>	
				</div>
			</nav>
	   );
	}
}

