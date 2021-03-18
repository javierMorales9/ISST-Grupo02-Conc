import React from 'react';
import Footer from '../components/footer.js';
import '../public/main_styles.css';

export default class RoomService extends React.Component {
  render() {
    return (
      <div>
        <h1 className='subtitulo'>Otros servicios</h1>
        <hr style={{ color: 'gray', width: '70%', border: '2px solid' }} />

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

        <Footer/>

      </div>
    );
  }
}