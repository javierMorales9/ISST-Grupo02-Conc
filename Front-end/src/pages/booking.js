import React from 'react';
import NavBar from '../components/navbar.js';
import TarjetaReserva from '../components/tarjeta_reserva';
import Footer from '../components/footer.js';
import '../public/booking.css';

export default class Booking extends React.Component {
    render() {
        return (
          <div>

            <h1 className="subtitulo">Gestión de Reserva</h1> 
            <hr className="raya_titulo"/>

            <h2 className="category">Reservar</h2>

            <div id='container'> 
                <div id="imagen_reserva">
                    <h2 id='text_foto_top' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        In sagittis nulla turpis urna, gravida. Mattis mauris sagittis.
                    </h2>
                    <a href='https://booking.com/' target='_blank'  id='reservar_container'>
                        <p id ='span_butt'>RESERVAR</p>
                    </a> 
                </div>
            </div>
            
            <h2 className="category">Mis reservas</h2>

            <div>
                <TarjetaReserva/>
                <TarjetaReserva/>
            </div>                
            
            <Footer/>

          </div>
        );
    }
}
    
    