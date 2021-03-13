import React from 'react';
import {titulo, descripcion_titulo, links_titulo, link_hoteles_titulo, background_image} from '../public/estilos_inicio';
import Diamond from './diamond';
import '../public/navbar.css';

export default class NavBarInicio extends React.Component {
	render() {
	   return(
            <div id='inicio' style={background_image}>
                <div style={{display:'flex', justifyContent: 'center'}}>
                    <div style={{flex:1, display: 'flex', padding:'10px 30px'}}>
                        <Diamond color={'#51351B'}/>
                        <a className='link_hotel' href='/'>Hotel</a>
                    </div>
                    <div style={{flex:'2', display: 'flex', justifyContent: 'center'}}>
                        <a className='link_titulo' href='/booking'>Reserva</a>
                        <a className='link_titulo' href='/room_service'>Servicio</a>
                        <a className='link_titulo' href='/transport'>Transportes</a>
                        <a className='link_titulo' href='/leisure'>Ocio</a>
                    </div>
                    <div style={{flex:'1', display: 'flex', justifyContent: 'flex-end'}}>
                        <a className='link_titulo' href='/profile'>Link al perfil</a>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <div>
                        <h1 style={titulo}>CONCIERGE</h1>
                    </div>
                    <div style={{direction:'flex', display:'column'}}>
                        <span style={descripcion_titulo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        <span style={descripcion_titulo}>In sagittis nulla turpis urna, gravida. Mattis mauris sagittis.</span>
                    </div>
                </div>     
            </div>
	   );
	}
}

