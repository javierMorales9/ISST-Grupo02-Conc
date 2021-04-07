import React from 'react';
import NavBar from '../components/navbar.js';
import TarjetaReserva from '../components/tarjeta_reserva';
import Footer from '../components/footer.js';
import '../public/booking.css';

export default class Booking extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			f:[],
		};
	}

	componentDidMount(){
		this.fetchData();
	}

	fetchData = () => {

		fetch("http://localhost:8080/Concierge/rest/service/clients/" + sessionStorage.getItem('cliente')) 
			.then(res => res.json())
			.then( (f) =>{
				this.setState({f:f})

			});
	}



    render() {

    if (sessionStorage.getItem('login') == null){
   	 window.location.href = 'http://localhost:3000' + process.env.PUBLIC_URL + '/login';
       	 return <div/>;
	}
		
        let view;
        if(this.state.f.length==0){
            view=<h2 className="category" style={{marginBottom:"380px"}}>Mis reservas</h2>
        }else{
            view=<h2 className="category">Mis reservas</h2>
        }

	
        return (
          <div>

            <h1 className="subtitulo">Gestión de Reserva</h1> 
            <hr className="raya_titulo"/>
            
            {view}

            <div>
				{this.state.f.map((el,id) =>{
					return <TarjetaReserva 
							n_habitacion = {el.cliente.numeroHabitacion}
							fecha_inicio = {el.fecha_inicio}
							fecha_fin = {el.fecha_fin}
							tipo = {el.tipo}
							n_user = {el.numero_usuarios}
							solicitud = {el.solicitud}
							disponibilidad = {el.disponibilidad}
							id = {el.id}
							key = {el.id}
						/>;
					})
				}
            </div>                
            
            <Footer/>

          </div>
        );
    }
}
    
    
