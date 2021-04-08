import React from 'react';
import Footer from '../components/footer.js';
import { withAlert } from "react-alert";
import '../public/main_styles.css';
import '../public/login.css';


class Login extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			updated : false,
			error: <div/>
		}
	}

	handleClick = () =>{
		this.setState({updated:true});		
	}

	async componentDidUpdate(){
		
		if(this.state.updated){

			let data ={ 
				dni:document.getElementById("login_user").value,
				numeroHabitacion:document.getElementById("login_password").value
			};

			
			let login = await fetch("http://localhost:8080/Concierge/rest/security/login",{
				method: "POST",
				mode:'cors',
				headers:{"Content-Type":"application/json"},
				body:JSON.stringify(data)
			}).then(res => res.json());			
		
			this.setState({updated:false});
			
			if(login !== false){
				let entire_client = await fetch("http://localhost:8080/Concierge/rest/client/"+login.id,{
					method: "GET",
					mode:'cors',
				}).then(res => res.json());
				this.props.login_info(true,login.id)
				this.props.savetheuser(entire_client)
				this.props.loginUpdate();
				this.setState({error : <div/>});
			} else
				this.props.alert.show("Credenciales Incorrectas",{timeout:0,closeCopy: "Reintentar",});
		}
	}

	render() {
		return (
			<div>
				<div className='fondo'>
					<div className="login_container">
						<div className="wrapper">
							<h1 className="subtitulo">Acceso clientes</h1>
							<hr className="raya_titulo"/>
							<form className='form_login' onSubmit={() => {this.handleClick()}} >
								<label className="usr">
									<input placeholder="DNI" id="login_user" className='login_input' type="text" name="user"/>
								</label>

								<label className="usr">
									<input placeholder="Habitación" id="login_password" className='login_input' type="number" name="password"/>
								</label>
							</form>
							<button className="spinner" onClick={() => { this.handleClick();}}><span className="state">Enviar</span></button>
							{this.state.error}
						</div>
					</div>	
				</div>

				<Footer/>

			</div>
		);
	}
}

export default withAlert()(Login);