import React from 'react';
import Diamond from './diamond';
import '../public/navbar.css';
import default_profile from '../media/default_profile.jpeg';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default class NavBarInicio extends React.Component {

	render() {

        let view;
        let view2;
        let profile = <Link onClick={this.props.click} className='link_profile' to='/profile'><img src={default_profile} className='image'/></Link>
        let noprofile =<Link onClick={this.props.click} className='link_titulo' to='/login'>Acceso</Link>

        if(this.props.login){
            view = profile;
            view2 =  <div style={{flex:'4', display: 'flex', justifyContent: 'center'}}>
            <Link onClick={this.props.click} className='link_titulo' to='/booking'>Reservas</Link>
            <Link onClick={this.props.click} className='link_titulo' to='/room_service'>RoomService</Link>
            <Link onClick={this.props.click} className='link_titulo' to='/transport'>Transportes</Link>
            <Link onClick={this.props.click} className='link_titulo' to='/leisure'>Ocio</Link>                    
            <Link onClick={this.props.click} className='link_titulo' to='/premium'>Premium</Link>
        </div>; 
        } else{
            view = noprofile;
            view2 = <div style={{flex:'4', display: 'flex', justifyContent: 'center'}}>
            <Link onClick={this.props.click} className='link_titulo' to='/login'>Reservas</Link>
            <Link onClick={this.props.click} className='link_titulo' to='/login'>RoomService</Link>
            <Link onClick={this.props.click} className='link_titulo' to='/login'>Transportes</Link>
            <Link onClick={this.props.click} className='link_titulo' to='/login'>Ocio</Link>                    
            <Link onClick={this.props.click} className='link_titulo' to='/login'>Premium</Link>
        </div>; 
        }
            
        
	    return(
            <nav id='navbar_main'>
                <div className='no-background'>
                    <div style={{display:'flex', justifyContent: 'center'}}>
                        <div style={{flex:1, display: 'flex', alignItems:'center',padding:'10px 30px'}}>
                            <Diamond color={'#51351B'}/>
                            <Link onClick={this.props.click} id="1" className='link_hotel' to='/'>Hotel</Link>
                        </div>
                        {view2}
                        <div style={{flex:'1', display: 'flex', justifyContent: 'flex-end'}}>
                            {view}
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <div>
                            <h1 className='titulo' style={{marginTop:"70px",marginBottom:"0px"}}>CONCIERGE</h1>
                        </div>
                    </div>     
                </div>
            </nav>
	   );
	}
}

