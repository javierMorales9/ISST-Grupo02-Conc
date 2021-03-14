import React from 'react';
import Habitacion from '../media/habitacion.png'
import '../public/booking.css'

export default function TarjetaReserva(props){
    return(

        //el texto no varia, siempre es mod reserva o cancelar reserva,
        //pero el link variará en función de la reserva.   
        
        <div className="booking_container">
            <div className="booking_smallcontainer">
                <div className='first_group'>
                    <div>
                        <img src={Habitacion} height='100%' width='300px' style={{minHeight:'200px', minWidth:'275px'}}/>
                    </div>       
                    <div className='tb'>
                        <div>
                            <p>Nº de habitación: 114 </p>
                            <p>Fecha de entrada: 12/09/2025</p>
                            <p>Fecha de salida: 15/09/2025</p>
                            <p>Tipo de habitación: premium</p>
                        </div>
                        <div className='buttons_container'>
                            <button className='booking_buttons'>Modifcar Reserva</button>
                            <button className='booking_buttons'>Cancelar Reserva</button>
                        </div>                
                    </div>
                </div>
                
                <div className='second_container'>
                    <div>
                        Normativa sobre uso de las habitaciones: <a href=''>guía</a>
                    </div>
                    <div style = {{paddingRight:'20%'}}> Contacto : 9108921</div> 
                </div>

                <p style = {{textAlign:'center'}}>hotels.com</p>
                                
            </div>
        </div>

    )
}