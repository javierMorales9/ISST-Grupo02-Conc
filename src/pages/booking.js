import React from 'react';
import {footer, titulo, descripcion_titulo, foto_inicio, subtitulo, cuadrados_servicios, titulo_servicio, saber_mas, foto_servicio, 
descripcion_servicio, links_navegacion, link_hoteles, footer_upper_text, footer_lower_text, links_titulo, link_hoteles_titulo} from '../public/estilos_inicio'
import color from '../media/color.jpeg'
import obras from '../media/obras.png'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'

export default class Booking extends React.Component {
    render() {
        return (
          <div>
              <NavBar/>
              <h1 style={{textAlign:'center', marginBottom:'750px'}}>Booking</h1>
              <Footer/>
          </div>
        );
    }
}
    
    