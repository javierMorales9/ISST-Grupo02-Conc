import React from 'react';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
import '../public/main_styles.css';
import '../public/room_service.css';

export default class RoomService extends React.Component {
  render() {
    return (
      <div>

        <NavBar />

        <h1 className='subtitulo'>Room Service</h1>
        <hr style={{ color: 'gray', width: '70%', border: '2px solid' }} />

        <div className='cafeconf'>
          <div className='cafeconf_container'>

            {/*CAFETERIA*/}
            <div className='room_container'>
              <div  id="id_cafeteria">
                <div className='sin-background'>Cafeteria</div>  
              </div>
              <div>
                <ul>
                  <li>Huevos Revueltos - 9€</li>
                  <li>Macarrones Carbonara - 10€</li>
                  <li>Steak Tartar - 17€</li>
                  <li>Hamburguesa Gourmet - 15€</li>
                </ul>
              </div>
            </div>
        
            {/*CONFORT*/}
            <div className='room_container'>
              <div  id="id_confort">
                <div className='sin-background'>Confort</div>  
              </div>
              <div>
                <ul>
                  <li>Almohadas - 1€</li>
                  <li>Toallas - 1€</li>
                  <li>Limpieza - 3€</li>
                  <li>Cambio sábanas - 1€</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/*Lavanderia*/}
        <div className='laundry_container'>
          <div id="id_lavanderia">
            <div className='sin-background'>Lavanderia</div>  
          </div>

          <form className='formulario_container'>
            <div className='formulario'>
              <p> Número habitación: </p>
              <input className='formulario' type='text'></input>
            </div>
            <div className='formulario'>
              <p> Elija el día: </p>
              <div className='formulario'>
                <label id="form_tipo" for="date" style={{margin:'5px'}}></label>
                <input type="date" id="date" name="date"/>
              </div>
            </div>
            <div className='formulario'>
              <p> Elija la hora: </p>
              <div className='formulario'>
                <label id="form_tipo" for="appt" style={{margin:'5px'}}></label>
                <input type="time" id="appt" name="appt"/>
              </div>
            </div>
            <div className='formulario' style={{alignSelf:'center', width:'400px'}}>
              <input id="form_submit" type="submit" value="Enviar" style={{marginBottom:'30px', width:'400px'}}/>
            </div>
          </form>
        </div>


        {/*OTRAS PETICIONES*/} 
        <div className='otros_container'>
          <div id='id_otros'>
          <div className='sin-background'>Otras peticiones</div>
          </div>
          <form className='formularioGrande_container'>
            <div className='formulario'>
              <p> Número habitación: </p>
              <input className='formulario' type='text'></input>
            </div>
            <div className='formularioSolicitud'>
              <p> Introduzca su petición aquí: </p>
            <input id='inputGrande' type='text'></input>
            </div>
            <div className='formulario'>
              <input id="form_submit" type="submit" value="Enviar" style={{marginBottom:'30px'}}/>
            </div>
          </form>
        </div>

        <Footer />

      </div>
    );
  }
}