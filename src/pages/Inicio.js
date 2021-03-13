import React from 'react';
import {footer, titulo, descripcion_titulo, foto_inicio, subtitulo, cuadrados_servicios, titulo_servicio, saber_mas, foto_servicio, 
descripcion_servicio, links_navegacion, link_hoteles, footer_upper_text, footer_lower_text, links_titulo, link_hoteles_titulo} from '../public/estilos_inicio';
import obras from '../media/obras.png'
import NavBarInicio from '../components/navbarInicio.js'
import Footer from '../components/footer.js'


export default class Game extends React.Component {
	render() {
		return (
			<div style={{background: 'D0D0D0'}}>

				<NavBarInicio/>
				
				<div style={{marginTop:'40px', fontSize: '200px', display: 'grid', alignItems:'center', justifyContent: 'center'}}>
					<span style={subtitulo}><u>Servicios</u></span>
				</div>

				<div style={{display: 'grid', padding: '20px'}}>
					<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '1em'}}>
						<div style={cuadrados_servicios}>
							<div style={{display: 'grid', margin: '0.5em', alignItems: 'center', justifyContent: 'center'}}>
								<div style={{display: 'flex', alignItems: 'center'}}>
									<hr style={{color:'#5A5847', width: '9em'}}/>
									<h2 style={titulo_servicio}>Reserva Estancia</h2>
									<hr style={{color:'#5A5847', width: '9em'}}/>
								</div>
								<div style={{display: 'flex', alignItems: 'center'}}>
									<img src={obras} style={{width: '50%'}}/>
									<button style={saber_mas}>Saber Mas</button>
								</div>
								<div style={{width:'100%', paddingBottom:'10px'}}>
									<span style={{descripcion_servicio}}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, ipsum morbi turpis feugiat eros enim. Nec nulla orci sed vitae nulla nam luctus mattis pellentesque. Amet elit tellus dolor fermentum felis. Nisi, enim vitae orci fames nunc mauris sagittis facilisis eu. Gravida sed purus placerat ultricies morbi. Sed eget tellus id nam pellentesque tincidunt luctus. 
									</span>
								</div>
							</div>
						</div>
						<div style={cuadrados_servicios}>
							<div style={{display: 'grid', margin: '0.5em', alignItems: 'center', justifyContent: 'center'}}>
								<div style={{display: 'flex', alignItems: 'center'}}>
									<hr style={{color:'#5A5847', width: '9em'}}/>
									<h2 style={titulo_servicio}>Room Service</h2>
									<hr style={{color:'#5A5847', width: '9em'}}/>
								</div>
								<div style={{display: 'flex', alignItems: 'center'}}>
									<img src={obras} style={{width: '50%'}}/>
									<button style={saber_mas}>Saber Mas</button>
								</div>
								<div style={{width:'100%'}}>
									<span style={{descripcion_servicio}}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, ipsum morbi turpis feugiat eros enim. Nec nulla orci sed vitae nulla nam luctus mattis pellentesque. Amet elit tellus dolor fermentum felis. Nisi, enim vitae orci fames nunc mauris sagittis facilisis eu. Gravida sed purus placerat ultricies morbi. Sed eget tellus id nam pellentesque tincidunt luctus. 
									</span>
								</div>
							</div>
						</div>
					</div>
					<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '1em'}}>
						<div style={cuadrados_servicios}>
							<div style={{display: 'grid', margin: '0.5em', alignItems: 'center', justifyContent: 'center'}}>
								<div style={{display: 'flex', alignItems: 'center'}}>
									<hr style={{color:'#5A5847', width: '9em'}}/>
									<h2 style={titulo_servicio}>Transporte</h2>
									<hr style={{color:'#5A5847', width: '9em'}}/>
								</div>
								<div style={{display: 'flex', alignItems: 'center'}}>
									<img src={obras} style={{width: '50%'}}/>
									<button style={saber_mas}>Saber Mas</button>
								</div>
								<div style={{width:'100%'}}>
									<span style={{descripcion_servicio}}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, ipsum morbi turpis feugiat eros enim. Nec nulla orci sed vitae nulla nam luctus mattis pellentesque. Amet elit tellus dolor fermentum felis. Nisi, enim vitae orci fames nunc mauris sagittis facilisis eu. Gravida sed purus placerat ultricies morbi. Sed eget tellus id nam pellentesque tincidunt luctus. 
									</span>
								</div>
							</div>
						</div>
						<div style={cuadrados_servicios}>
							<div style={{display: 'grid', margin: '0.5em', alignItems: 'center', justifyContent: 'center'}}>
								<div style={{display: 'flex', alignItems: 'center'}}>
									<hr style={{color:'#5A5847', width: '9em'}}/>
									<h2 style={titulo_servicio}>Ocio</h2>
									<hr style={{color:'#5A5847', width: '9em'}}/>
								</div>
								<div style={{display: 'flex', alignItems: 'center'}}>
									<img src={obras} style={{width: '50%'}}/>
									<button style={saber_mas}>Saber Mas</button>
								</div>
								<div style={{width:'100%'}}>
									<span style={{descripcion_servicio}}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, ipsum morbi turpis feugiat eros enim. Nec nulla orci sed vitae nulla nam luctus mattis pellentesque. Amet elit tellus dolor fermentum felis. Nisi, enim vitae orci fames nunc mauris sagittis facilisis eu. Gravida sed purus placerat ultricies morbi. Sed eget tellus id nam pellentesque tincidunt luctus. 
									</span>
								</div>
							</div>
						</div>
					</div>				
				</div>

				<Footer/>

			</div>

		);
	}
}

