import React from 'react';
import Habitacion from '../media/habitacion.png'
import '../public/booking.css'
import ProgressBar from './progressBar';

export default function TarjetaReserva(props){
    return(

        //el texto no varia, siempre es mod reserva o cancelar reserva,
        //pero el link variará en función de la reserva.   
        
        <div className="booking_container">
            <div className="booking_smallcontainer">
                <div className='first_group'>
                    <div>
                        <img src={Habitacion} height='100px' width='300px' style={{minHeight:'200px', paddingTop:'23px', minWidth:'275px'}}/>
                            {props.tipo === "Premium" ? <div>
                        <ProgressBar idres = {props.id}/>
            </div>:<div></div>}
        
                    </div>       
                    <div className='tb'>
			    <div>
                            <p>Nº de habitación: {props.n_habitacion}</p>
                            <p>Nº de usuarios: {props.n_user}</p>
                            <p>Fecha de entrada: {props.fecha_inicio} </p>
                            <p>Fecha de salida: {props.fecha_fin}</p>
                            <p>Tipo de Servicio: {props.tipo}</p>
			    <p>Solicitud: {props.solicitud} </p>
                        </div>
                        <div className='buttons_container'>
                            <button className='booking_buttons' style={{marginRight:'40px'}}>Modifcar Reserva</button>
                            <button className='booking_buttons'>Cancelar Reserva</button>
                        </div>                
                    </div>
                </div>
                
                <div className='second_container'>
                    <div>
                        Normativa de las habitaciones: <a href=''>guía</a>
                    </div>
                    <div> Contacto : 9108921</div> 
                </div>

                <div className='third_container'>
                    <p>hotels.com</p>
                </div>                
            </div>
        
        </div>


    )
}
