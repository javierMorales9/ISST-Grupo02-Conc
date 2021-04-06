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

	async componentDidMount(){

		let f = await fetch("http://localhost:8080/Concierge/rest/service/clients/" + this.props.id_cliente).then(res => res.json());
		this.setState({f})
	}


    render() {
		
	
        return (
          <div>

            <h1 className="subtitulo">Gestión de Reserva</h1> 
            <hr className="raya_titulo"/>

            <h2 className="category">Reservar</h2>

            <div id='container'> 
                <div id="imagen_reserva">
                    <h2 id='text_foto_top' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        In sagittis nulla turpis urna, gravida. Mattis mauris sagittis.
                    </h2>
                    <a href='https://booking.com/' target='_blank'  id='reservar_container'>
                        <p id ='span_butt'>RESERVAR</p>
                    </a> 
                </div>
            </div>
            
            <h2 className="category">Mis reservas</h2>

            <div>
		
		    {this.state.f.map((el,id) =>{
		    return <TarjetaReserva 
		    n_habitacion = {el.cliente.numeroHabitacion}
		    fecha_inicio = {el.fecha_inicio}
		    fecha_fin = {el.fecha_fin}
		    tipo = {el.tipo}
		    solicitud = {el.solicitud}
		    disponibilidad = {el.disponibilidad}
		    id = {el.id}
	   	     />;
		    })

		    }
		
            </div>                
            
            <Footer/>

          </div>
        );
    }
}
    
    
