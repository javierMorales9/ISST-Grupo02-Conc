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
				password:document.getElementById("login_password").value
			};

			
			let login = await fetch("http://localhost:8080/Concierge/rest/security/login",{
				method: "POST",
				mode:'cors',
				headers:{"Content-Type":"application/json"},
				body:JSON.stringify(data)
			}).then(res => res.json());


			this.setState({updated:false});
			
			if(login !== false){
				this.props.login_info(true,login.id)
				this.props.loginUpdate();
				this.setState({error : <div/>});
			} else
				window.alert("Credenciales Incorrectas")
				//this.setState({error : <p>Credenciales Incorrectas</p>});

						
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
							Usuario:
							<input id="login_user" type="text" name="user"/>
						</label>

						<label className="usr">
							Constraseña:
							<input id="login_password" type="password" name="password"/>
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

