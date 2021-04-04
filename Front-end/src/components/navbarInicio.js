import React from 'react';
import Diamond from './diamond';
import '../public/navbar.css';
import default_profile from '../media/default_profile.jpeg';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default class NavBarInicio extends React.Component {
	render() {
        let view;
        let profile = <Link onClick={this.props.click} className='link_profile' to='/profile'> <img src={default_profile} className='image'/></Link>
        let noprofile =<Link onClick={this.props.click} className='link_profile' to='/login'>Login</Link>
        if(true){
            view=noprofile;
        }else{
            view=profile
        }
	    return(
            <nav id='navbar_main'>
                <div className='no-background'>
                    <div style={{display:'flex', justifyContent: 'center'}}>
                        <div style={{flex:1, display: 'flex', alignItems:'center',padding:'10px 30px'}}>
                            <Diamond color={'#51351B'}/>
                            <Link onClick={this.props.click} className='link_hotel' to='/'>Hotel</Link>
                        </div>
                        <div style={{flex:'4', display: 'flex', justifyContent: 'center'}}>
                            <Link onClick={this.props.click} className='link_titulo' to='/booking'>Reservas</Link>
                            <Link onClick={this.props.click} className='link_titulo' to='/room_service'>RoomService</Link>
                            <Link onClick={this.props.click} className='link_titulo' to='/transport'>Transportes</Link>
                            <Link onClick={this.props.click} className='link_titulo' to='/leisure'>Ocio</Link>                    
						    <Link onClick={this.props.click} className='link_titulo' to='/premium'>Premium</Link>
                        </div>
                        <div style={{flex:'1', display: 'flex', justifyContent: 'flex-end'}}>
                            {view}
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <div>
                            <h1 className='titulo'>CONCIERGE</h1>
                        </div>
                        <div style={{direction:'flex', display:'column'}}>
                            <span className='descripcion_titulo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            <span className='descripcion_titulo'>In sagittis nulla turpis urna, gravida. Mattis mauris sagittis.</span>
                        </div>
                    </div>     
                </div>
            </nav>
	   );
	}
}

