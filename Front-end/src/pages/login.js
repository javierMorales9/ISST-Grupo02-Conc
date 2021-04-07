import React from 'react';
import Footer from '../components/footer.js';
import '../public/main_styles.css';
import '../public/login.css';


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
			
			let entire_client = await fetch("http://localhost:8080/Concierge/rest/client/"+login.id,{
            method: "GET",
            mode:'cors',
        }).then(res => res.json());
		
			this.setState({updated:false});
			
			if(login !== false){
				this.props.login_info(true,login.id)
				this.props.savetheuser(entire_client)
				this.props.loginUpdate();
				this.setState({error : <div/>});
			} else
				alert("Credenciales Incorrectas");						
		}
	}

	render() {
		return (
			<div>
				<h1 className="subtitulo">Acceso clientes</h1>
				<hr className="raya_titulo"/>
				
				<div className="container" style={{marginTop:"150px",marginBottom:"200px"}}>
					<form className='form_login' onSubmit={() => {this.handleClick()}} >
						<label className="usr">
							DNI:
							<input id="login_user" type="text" name="user"/>
						</label>

						<label className="usr">
							Habitacion:
							<input id="login_password" type="text" name="password"/>
						</label>
					</form>
					<button onClick={() => { this.handleClick();}}> Enviar </button>
					{this.state.error}
				</div>	

				<Footer/>

			</div>

		);
	}
}

