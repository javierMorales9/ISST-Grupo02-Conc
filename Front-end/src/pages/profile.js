import React from 'react';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
import Calendar from '../components/calendar.js';
import default_profile from '../media/default_profile.jpeg';
import '../public/profile.css';
import '../public/main_styles.css';

export default class Profile extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			modificar: false,
			nombre: "",
			apellidos: "",
			metodoPago: "",
			email: "",
			dni: ""
		}

	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	async updateClientRequest() {
		let data = {
			id: this.props.entire_client.id,
			nombre: this.state.nombre=="" ? this.props.entire_client.nombre:this.state.nombre,
			apellidos: this.state.apellidos=="" ? this.props.entire_client.apellidos:this.state.apellidos,
			email: this.state.email=="" ? this.props.entire_client.email:this.state.email,
			metodo_pago: this.state.metodoPago=="" ? this.props.entire_client.metodo_pago:this.state.metodoPago,
			dni: this.state.dni=="" ? this.props.entire_client.dni:this.state.dni,

			coste: this.props.entire_client.coste,
			tipo: this.props.entire_client.tipo,
			numeroHabitacion: this.props.entire_client.numeroHabitacion,
			programa_fidelizacion: this.props.entire_client.programa_fidelizacion
		};



		await fetch("http://localhost:8080/Concierge/rest/client/" + this.props.entire_client.id, {
			method: 'POST',
			mode: 'cors',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		})

		let entire_client = await fetch("http://localhost:8080/Concierge/rest/client/" + this.props.entire_client.id, {
			method: "GET",
			mode: 'cors',
		}).then(res => res.json());
		this.props.savetheuser(entire_client)
		sessionStorage.setItem("entire_client",JSON.stringify(entire_client))


		alert("La petición ha sido completada")
		this.setState({ modificar: false });

		this.setState({nombre: "", apellidos: "", metodoPago: "", email: "",dni: ""});

	}

	render() {

		
		if (sessionStorage.getItem('login') == null) {
			window.location.href = 'http://localhost:3000' + process.env.PUBLIC_URL + '/login';
			return <div />;
		}

		if (this.state.modificar) {
			console.log()

			console.log("ESTADO")
		console.log(this.state);
		console.log("CLIENT")
		console.log( this.props.entire_client);
			return (
				

				<div>
					<h1 className='subtitulo'>Profile</h1>
					<hr style={{ color: 'gray', width: '70%', border: '2px solid' }} />

					<div style={{ height: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '50px 0px 50px 0px' }}>
						<div style={{ flex: '1', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '950px' }}>
							<div style={{ flex: '1', paddingTop: "24px"}}>
								<img src={default_profile} style={{}} width='525px' />
							</div>
							<div style={{ flex: '1', padding: '10px 10px 10px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
							<span className='datos'>Nombre:</span>
							<input type="text" name="nombre" value={this.state.nombre} placeholder={this.props.entire_client.nombre} onChange={this.handleChange} />
							<span className='datos'>Apellidos:</span> 
							<input type="text" name="apellidos" value={this.state.apellidos} placeholder={this.props.entire_client.apellidos} onChange={this.handleChange} />
							<span className='datos'>Email:</span>
							<input type="text" name="email" value={this.state.email} placeholder={this.props.entire_client.email} onChange={this.handleChange} />	
							<span className='datos'>DNI:</span> 
							<input type="text" name="dni" value={this.state.dni} placeholder={this.props.entire_client.dni} onChange={this.handleChange} />
							<span className='datos'>Metodo de pago:</span> 
							<input type="text" name="metodoPago" value={this.state.metodoPago} placeholder={this.props.entire_client.metodo_pago} onChange={this.handleChange} />
						
							

								<div style={{ display: 'flex', marginTop: '15px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
									<button className='profile_actions' onClick={() => { this.updateClientRequest() }}>Guardar</button>
									<button className='profile_actions' onClick={() => this.setState({ modificar: false })}>Cancelar</button>

								</div>
							</div>
						</div>
						<div style={{ flex: '1' }}>
							<Calendar />
						</div>
					</div>

					<Footer />
				</div>
			);


		} else {

			console.log("ESTADO")
		console.log(this.state);
		console.log("CLIENT")
		console.log( this.props.entire_client);

			return (

				<div>
					<h1 className='subtitulo'>Profile</h1>
					<hr style={{ color: 'gray', width: '70%', border: '2px solid' }} />

					<div style={{ height: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '50px 0px 50px 0px' }}>
						<div style={{ flex: '1', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '950px' }}>
							<div style={{ flex: '1', paddingTop: "24px"}}>
								<img src={default_profile} style={{}} width='525px' />
							</div>
							<div style={{ flex: '1', padding: '10px 10px 10px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
								<span className='datos'>Nombre: {this.props.entire_client.nombre}</span>
								<span className='datos'>Apellidos: {this.props.entire_client.apellidos}</span>
								<span className='datos'>Email: {this.props.entire_client.email}</span>
								<span className='datos'>DNI: {this.props.entire_client.dni}</span>
								<span className='datos'>Metodo de pago: {this.props.entire_client.metodo_pago}</span>
								<span className='datos'>Número de habitación: {this.props.entire_client.numeroHabitacion}</span>
								<span className='datos'>Tipo de cliente: {this.props.entire_client.tipo}</span>
								<span className='datos'>Programa fidelización: {this.props.entire_client.programa_fidelizacion ? 'Sí' : 'No'}</span>
								<span className='datos'>Coste acumulado: {this.props.entire_client.coste}</span>

								<div style={{ display: 'flex', marginTop: '15px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
									<button className='profile_actions' onClick={() => this.setState({ modificar: true })}>Cambiar Datos</button>
									<button className='profile_actions' onClick={() => this.props.logOut()}>Cerrar sesion</button>
								</div>
							</div>
						</div>
						<div style={{ flex: '1' }}>
							<Calendar />
						</div>
					</div>

					<Footer />
				</div>
			);
		}
	}
}

/*
<span className='datos'>Nombre: <input type="text" name="nombre" value={this.state.nombre} placeholder={this.props.entire_client.nombre} onChange={this.handleChange} /></span>
							<span className='datos'>Apellidos: <input type="text" name="apellidos" value={this.state.apellidos} placeholder={this.props.entire_client.apellidos} onChange={this.handleChange} /></span>	
							<span className='datos'>Email: <input type="text" name="email" value={this.state.email} placeholder={this.props.entire_client.email} onChange={this.handleChange} /></span>	
							<span className='datos'>DNI: <input type="text" name="dni" value={this.state.dni} placeholder={this.props.entire_client.dni} onChange={this.handleChange} />s</span>	
							<span className='datos'>Metodo de pago: <input type="text" name="metodoPago" value={this.state.metodoPago} placeholder={this.props.entire_client.metodo_pago} onChange={this.handleChange} /></span>
							*/	