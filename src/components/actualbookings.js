import React from 'react';
import Hotel from '../media/descarga.jpg'
import '../public/booking.css'
export default function ActualBooking(props){
    return(
        //el texto no varia, siempre es mod reserva o cancelar reserva,
        //pero el link variará en función de la reserva.   
        
        <div className="booking_container">
                
            <div className="booking_smallcontainer">

                <div>
                    <img src = {Hotel} alt = "imagen servicio"></img>

                </div>       

                <div >
                    <div style={{paddingLeft:'10%'}}>

                    <p>nº de habitación: 114 </p>
                    <p>fecha de entrada: 12/09/2025</p>
                    <p>fecha de salida: 15/09/2025</p>
                    <p>tipo de habitación: premium</p>
                    </div>
                
                
                    
                    <div className= 'booking_buttonscontainer'>
                        <button className= 'booking_buttons'>Modifcar Reserva</button>
                        
                        <button className= 'booking_buttons'>Cancelar Reserva</button>

                        
                    </div>
                
                </div>
                
            </div>
            <div className= 'booking_buttonscontainer'>
                <div>
                    Normativa sobre uso de las habitaciones <a href="url">guía</a>
                </div >
                <div style = {{paddingRight:'20%'}}> Contacto : 9108921</div> 
            </div>

            <p style = {{textAlign:'center'}}>hotels.com</p>
                
        </div>

    )
}