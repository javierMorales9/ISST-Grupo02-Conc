import React from 'react';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
import Calendar from '../components/calendar.js';
import default_profile from '../media/default_profile.jpeg';
import '../public/profile.css';
import '../public/main_styles.css';

export default class Profile extends React.Component {
    render() {
        return (
        	<div>
				<h1 className='subtitulo'>Profile</h1>
				<hr style={{color:'gray', width: '70%', border:'2px solid'}}/>

				<div style={{height:'1000px',display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent:'center', padding:'50px 0px 50px 0px'}}>
					<div style={{flex:'1', display: 'flex', flexDirection:'row', justifyContent: 'space-between', width:'950px'}}>
						<div style={{flex:'1'}}>
							<img src={default_profile} style={{}} width='525px'/>
						</div>
						<div style={{flex: '1', padding: '10px 10px 10px 80px', display: 'flex', flexDirection:'column', justifyContent:'flex-start', alignItems: 'flex-start'}}>
								<span className='datos'>Nombre: Pichai Sundarajan</span>
								<span className='datos'>Email: pichai.sunda@gmail.com</span>
								<span className='datos'>DNI: 46798359E</span>
								<span className='datos'>Fecha inicio: 01/04/2021</span>
								<span className='datos'>Fecha salida: 02/04/2021</span>
								<span className='datos'>Metodo de pago: Visa  E20...</span>
								<span className='datos'>Tipo de cliente: Premium</span>
								<div style={{display: 'flex', marginTop: '15px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
									<button className='profile_actions'>Cambiar Datos</button>
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