import React from 'react';
import {footer, titulo, descripcion_titulo, foto_inicio, subtitulo, cuadrados_servicios, titulo_servicio, saber_mas, foto_servicio, 
descripcion_servicio, links_navegacion, link_hoteles, footer_upper_text, footer_lower_text, links_titulo, link_hoteles_titulo} from '../estilos_inicio';
import color from '../media/color.jpeg'
import obras from '../media/obras.png'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'

export default class Game extends React.Component {
    render() {
        return (
          <div>
              <NavBar/>
              <h1>Leisure</h1>
          </div>
        );
    }
}