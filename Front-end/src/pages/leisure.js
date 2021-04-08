import React from 'react';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
import TarjetaOcio from '../components/tarjeta_ocio.js';
import '../public/leisure.css';

export default class Leisure extends React.Component {
    render() {

	if (this.props.cliente == null){
	    window.location.href = 'http://localhost:3000' + process.env.PUBLIC_URL + '/login';
	    return <div/>;
	}

        if (this.props.cliente.tipo=="Estandar"){
            return (
                <div>
                    <h1 className='subtitulo'>Ocio</h1>
                    <hr style={{color:'gray', width: '70%', border:'2px solid'}}/>

                    <div className='container' style={{marginTop:"150px",marginBottom:"220px",fontSize:"30px",color:"red"}}>
                        <span>SU NIVEL DE USUARIO NO TIENE AUTORIZACIÓN AL ACCESO DE ESTE SERVICIO</span>
                        <span style={{marginTop:"20px"}}>AUMENTE SU NIVEL A CLIENTE FRECUENTE PARA DISFRUTAR DEL SERVICIO</span>
                    </div>

                    <Footer/>
                </div>
            );
        } else {
            return (
                <div>
                    <h1 className='subtitulo'>Ocio</h1>
                    <hr style={{color:'gray', width: '70%', border:'2px solid'}}/>
        
                    <div className='container'>
                        <TarjetaOcio name={'GYM'} imagen={'gym.png'}/>
                        <TarjetaOcio name={'SPA'} imagen={'spa.png'}/>
                        <TarjetaOcio name={'CINE'} imagen={'cine.png'}/>
                        <TarjetaOcio name={'TEATRO'} imagen={'teatro.png'}/>
                    </div>
        
                    <Footer/>
                  </div>
                );
        }
    }
}
