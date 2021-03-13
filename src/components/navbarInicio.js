import React from 'react';
import Diamond from './diamond';
import '../public/navbar.css';
import default_profile from '../media/default_profile.jpeg';

export default class NavBarInicio extends React.Component {
	render() {
	   return(
            <div id='navbar_main'>
                <div style={{display:'flex', justifyContent: 'center'}}>
                    <div style={{flex:1, display: 'flex', padding:'10px 30px'}}>
                        <Diamond color={'#51351B'}/>
                        <a className='link_hotel' href='/'>Hotel</a>
                    </div>
                    <div style={{flex:'2', display: 'flex', justifyContent: 'center'}}>
                        <a className='link_titulo' href='/booking'>Reserva</a>
                        <a className='link_titulo' href='/room_service'>RoomService</a>
                        <a className='link_titulo' href='/transport'>Transportes</a>
                        <a className='link_titulo' href='/leisure'>Ocio</a>
                    </div>
                    <div style={{flex:'1', display: 'flex', justifyContent: 'flex-end'}}>
                        <a className='link_profile' href='/profile'>
                            <img src={default_profile} className='image'/>
                        </a>
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
	   );
	}
}

