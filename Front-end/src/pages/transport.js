import React from 'react';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
import MapContainer from '../components/map.js';
import Form from '../components/form.js';
import '../public/transport.css';
import '../public/main_styles.css';
import TarjetaTrans from '../components/tarjeta_trans.js';
import '../public/leisure.css';

export default class Transport extends React.Component {

    


    render() {

//        console.log(this.props.services)

	if (this.props.cliente == null){
	    window.location.href = 'http://localhost:3000' + process.env.PUBLIC_URL + '/login';
	    return <div/>;
	   }
	
 	if(this.props.cliente.tipo == "Estandar"){
            return (
                <div>
                    <h1 className="subtitulo">Transporte</h1>
                    <hr className="raya_titulo"/>

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
                <h1 className='subtitulo'>Transporte</h1>
                <hr style={{color:'gray', width: '70%', border:'2px solid'}}/>
    
                <div className='container'>
                    <div>
                    {Object.values(this.props.services).map((val,key) =>
                            val.nombre === "Transporte" ? 
                                <TarjetaTrans client = {this.props.cliente} serv = {val} name = {val.tipo=== "Avion" ? "Avión" : val.tipo} imagen = {val.tipo.toLowerCase().replace(/\s/g, '') + ".jpg"}/>
                             : <div></div>
                            
                            ) 
                    }
                    </div>
                
                    {
//                        <TarjetaTrans name={'Private driver'} imagen={'privatedriver.jpg'}/>
 //                   <TarjetaTrans name={'Uber'} imagen={'uber.jpg'}/>
  //                  <TarjetaTrans name={'Taxi'} imagen={'taxi.jpg'}/>
   //                 <TarjetaTrans name={'Avión'} imagen={'avion.jpg'}/>
    //                <TarjetaTrans name={'Tren'} imagen={'tren.jpg'}/>
                }
                </div>
    
                <Footer/>
              </div>
                     );
        }
    }
}
