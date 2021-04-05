import React from 'react';
import NavBarInicio from '../components/navbar.js';
import Footer from '../components/footer.js';
import Tarjeta from '../components/tarjeta.js';
import Habitacion from '../media/habitacion.png';
import Confort from '../media/confort.jpg';
import Transporte from '../media/avion.jpg';
import Ocio from '../media/spa.png';
import Otros from '../media/otros.jpg';
import '../public/main_styles.css';
import { withRouter } from 'react-router-dom';


export default class Login extends React.Component {

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
		
		//Comentario de interés
		//No lo he hecho porque es un poco lio. Pero en la respuesta desde el java habría que meterle la info del cliente y desde react 
		//almacenarla en el redux.
		
		if(this.state.updated){

			let data ={ 
				dni:document.getElementById("login_user").value,
				password:document.getElementById("login_password").value
			}
			
			let login = await fetch("http://localhost:8080/Concierge/rest/security/login",{
				method: "POST",
				mode:'cors',
				headers:{"Content-Type":"application/json"},
				body:JSON.stringify(data)
			}).then(res => res.json());

			this.setState({updated:false});
			
			if(login == true){
				this.props.loginUpdate(login);
				this.setState({error : <div/>});
			} else
				this.setState({error : <p>Credenciales Incorrectas</p>});
						
		}
	}

	render() {
		return (
			<div>
				
		<form className='form_login' onSubmit={() => {this.handleClick()}} >
		      <label>
			      Usuario:
			      <input id="login_user" type="text" name="user"/>
		      </label>

		      <label>
			      Constraseña:
			      <input id="login_password" type="text" name="password"/>
		      </label>
		
              </form>

		    <button onClick={() => { this.handleClick();}}> Enviar </button>
		    {this.state.error}

				<Footer/>

			</div>

		);
	}
}

