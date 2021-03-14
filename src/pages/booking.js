import React from 'react';
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import '../public/booking.css'

import BookingButtons from '../components/actualbookings';


export default class Booking extends React.Component {
    render() {
        return (
          <div>
            <NavBar/>
            <h1 className="subtitulo">Gestión de Reserva</h1> 
            <hr className="raya_titulo"/>

            <h2 className="category">Reservar</h2>

            <div id = "container_bg"> 
                <button id="booking_bg">
                   
                    <h2 id='text_foto_top' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        In sagittis nulla turpis urna, gravida. Mattis mauris sagittis.
                    </h2>
                    <p id = 'span_butt'>RESERVAR</p>
                 
                </button>
            </div>
            
            <h2 className="category">Mis reservas</h2>

            <div >
            {[1,2].map((value,index) =>
                    <BookingButtons/>)}
            </div>                
            

            <Footer/>
          </div>
        );
    }
}
    
    