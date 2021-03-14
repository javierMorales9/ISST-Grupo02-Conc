import React from 'react';
import color from '../media/color.jpeg';
import obras from '../media/obras.png';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
import '../public/main_styles.css';
import '../public/room_service.css';
import Lavanderia from '../media/lavanderia.jpg'


export default class RoomService extends React.Component {
  render() {
    return (
      <div>

        <NavBar />

        <h1 className='subtitulo'>Room Service</h1>
        <hr style={{ color: 'gray', width: '70%', border: '2px solid' }} />

        <div className='cafeconf'>
          {//CAFETERIA
          }
          <div>
          <div id="id_cafeteria">Cafetería</div>
          <ul>
            <li>Huevos revueltos - 9€</li>
            <li>Macarrones a la Carbonara - 10€</li>
            <li>Steak Tartar - 17€</li>
            <li>Hamburguesa Gourmet - 15€</li>
          </ul>
          </div>


          {//CONFORT
          }
          <div>
          <div id="id_confort">Comfort</div>
          <ul>
            <li>Almohadas</li>
            <li>Toallas</li>
            <li>Cambio sábanas</li>
          </ul>
          </div>

        </div>
        {
          //LAVANDERÍA
        }
        <div>
        <div id="id_lavanderia">Lavandería</div>


        {//otras peticiones
        }
        <div className='formulario_container'>

          <div className='formulario'>
            <p> Introduzca su número de habitación: </p>
            <input className='formulario' type='text'></input>
          </div>
          <div className='formulario'>
            <p> Introduzca el día que quiere recogamos la ropa: </p>
            <select className='formulario'>
              <option selected value="0"> dd/mm/yy</option>
              <option value="1">Windows Vista</option>
            </select>
          </div>
          <div className='formulario'>
            <p> Introduzca la hora de recogida: </p>
            <select className='formulario' style={{ width: '90px' }}>
              <option selected value="0"> hh:mm</option>
              <option value="1">Windows Vista</option>
            </select>
          </div>

        </div>

        <button className='send_button'>Enviar</button>
        </div>

        <div>
          <div id='id_otros'>Otras peticiones</div>
          <div className='otrosform'>
          <div className='formulario'>
            <p> Introduzca su número de habitación: </p>
            <input className='formulario' type='text'></input>
          </div>
          <div className='formularioSolicitud'>
            <p> Introduzca su petición aquí: </p>
            <input id='inputGrande' type='text'></input>
          </div>
          </div>
          

        </div>





        <Footer />

      </div>
    );
  }
}