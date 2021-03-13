import React from 'react';
import {subtitulo} from '../public/estilos_inicio'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import default_profile from '../media/default_profile.jpeg'
import '../public/profile.css';
import Calendar from '../components/calendar.js'

export default class Profile extends React.Component {
    render() {
        return (
        	<div>
            	<NavBar/>
            	
            		<h1 style={subtitulo}>Profile</h1>
            		<hr style={{color:'gray', width: '70%', border:'2px solid'}}/>


            		<div style={{height:'1000px',display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent:'center', padding:'50px 0px 50px 0px'}}>
            			<div style={{flex:'1', display: 'flex', flexDirection:'row', justifyContent: 'space-between', width:'950px'}}>
            				<div style={{flex:'1'}}>
            					<img src={default_profile} style={{}} width='525px'/>
            				</div>
            				<div style={{flex: '1', padding: '10px 10px 10px 80px', display: 'flex', flexDirection:'column', justifyContent:'flex-start', alignItems: 'flex-start'}}>
	            					<span className='datos'>Nombre: Adrian Callejas Zurita</span>
	            					<span className='datos'>email: 5acallejaszurita@gmail.com</span>
	            					<span className='datos'>DNI: 46798359E</span>
	            					<span className='datos'>Fecha inicio: 01/04/2021</span>
	            					<span className='datos'>Fecha salida: 02/04/2021</span>
	            					<span className='datos'>Metodo de pago: Visa  E20...</span>
	            					<span className='datos'>Tipo de cliente: Premium</span>
	            					<div style={{display: 'flex', marginTop: '15px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
	            						<button className='profile_actions'><span className='text_button'>Cambiar Contraseña</span></button>
	            						<button className='profile_actions'><span className='text_button'>Cambiar Datos</span></button>
	            					</div>
            				</div>
            			</div>
                        <div style={{flex:'1'}}>
                            <Calendar/>
                        </div>
            		</div>

            	<Footer/>
          	</div>
        );
    }
}