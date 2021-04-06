import React from 'react';
import Habitacion from '../media/habitacion.png'
import '../public/booking.css'
import ProgressBar from './progressBar';
import Chatbot from '../components/chatbot.js'
export default class TarjetaReserva extends React.Component{
    constructor(props){
        super(props);
        this.handleCancelation = this.handleCancelation.bind(this)
        this.state = {
            chat: false,
            cancel_allowed: false
        }
    }
    changeState = (temp) =>{
    this.setState({receivedtext: temp});
    }
        
    /********************************
    *   REALIZACIÓN CANCELACIÓN     *
    ********************************/

    async handleCancelation(){
        var dele = await fetch('http://localhost:8080/Concierge/rest/service/'+this.props.id, {
             method: 'DELETE',
        }).then(res => res.text()) // or res.json()
        .then(res => console.log(res))

        alert("La reserva "+ this.props.solicitud+ ' fué anulada exitosamente.')    
        window.location.href = "http://localhost:3000"+ process.env.PUBLIC_URL + "/booking"
        //this.props.forceUpdt()

    }
    
    /*******************************
    *   INHABILITA CANCELACIÓN     *
    ********************************/

    disable_cancel = () => {
        this.setState({cancel_allowed: true})
    }

    contactoPremium = (type) => {
        if(type != 'Premium'){
            return(
                    <div className='second_container'>
                        <div>
                            <span>Normativa de las habitaciones: <a href=''>guía</a></span>
                        </div>
                        <div> Contacto : 9108921</div> 
                    </div>
                ); 
        }
        else{
            return(
                    <div className='second_container'>
                            <button className='chat_button' onClick={() => this.setState({chat: true})}>Habla con nosotros</button> 
                            <span>Contacto : 9108921</span>
                    </div>
            ); 
        }
    }
    render(){
        const chat = this.state.chat
        return(

        //el texto no varia, siempre es mod reserva o cancelar reserva,
        //pero el link variará en función de la reserva.   
        
        <div className="booking_container">
            <div className="booking_smallcontainer">
                <div className='first_group'>
                    <div>
                        <img src={Habitacion} height='100px' width='300px' style={{minHeight:'200px', paddingTop:'23px', minWidth:'275px'}}/>
                        {this.props.tipo === "Premium" ? <div>
                                <ProgressBar idres = {this.props.id} disable_cancel= {this.disable_cancel}/>
                            </div>:<div></div>}
        
                    </div>       
                    <div className='tb'>
                        <div>
                            <p>Nº de habitación: {this.props.n_habitacion}</p>
                            <p>Nº de usuarios: {this.props.n_user}</p>
                            <p>Fecha de entrada: {this.props.fecha_inicio} </p>
                            <p>Fecha de salida: {this.props.fecha_fin}</p>
                            <p>Tipo de Servicio: {this.props.tipo}</p>
                            <p>Solicitud: {this.props.solicitud} </p>
                        </div>
                        <div className='buttons_container'>
                            <button className='booking_buttons' style={{marginRight:'40px'}}>Modificar Reserva</button>
                            <button className='booking_buttons' disabled = {this.state.cancel_allowed} onClick={this.handleCancelation}>Cancelar Reserva</button>
                        </div>                
                    </div>
                </div>
                
                  {this.contactoPremium(this.props.tipo)}
                {chat ? <Chatbot n_habitacion={this.props.n_habitacion} solicitud={this.props.solicitud}/> : <span></span>}

                <div className='third_container'>
                    <p>hotels.com</p>
                </div>                
            </div>
        
        </div>


    )
    
    }

    }
