import React from 'react';
import Habitacion from '../media/habitacion.png';
import ProgressBar from '../components/progressBar.js';
import Chatbot from '../components/chatbot.js';
import { withAlert } from "react-alert";
import '../public/booking.css';

class TarjetaReserva extends React.Component {
    constructor(props){
        super(props);
        this.handleCancelation = this.handleCancelation.bind(this)
        this.state = {
            chat: false,
            cancel_allowed: false,
            alert: "anulada",
            cancel_button: "Cancelar"
        }
    }
    changeState = (temp) => {
    this.setState({receivedtext: temp});
    }

    /********************************
    *   REALIZACIÓN CANCELACIÓN     *
    ********************************/

     async handleCancelation(){
        var dele = await fetch('http://localhost:8080/Concierge/rest/service/'+this.props.id, {
             method: 'DELETE',
        }).then(res => res.text())
        .then(res => console.log(res))
        this.props.alert.show("La reserva "+ this.props.solicitud+ ' fué '+ this.state.alert +' exitosamente.',{timeout:0,closeCopy: "Aceptar",onClose: () => {window.location.href='http://localhost:3000' + process.env.PUBLIC_URL + '/booking';}});
    }
    
    /*******************************
    *   INHABILITA CANCELACIÓN     *
    ********************************/

    disable_cancel = () => {
        //this.setState({cancel_allowed: true})
        this.setState({cancel_button:"Eliminar"})
        this.setState({alert:"eliminada"});
    }

    contactoPremium = (type) => {
        if(type != 'Premium'){
            return(
                    <div> </div>
                ); 
        }
        else{
            return(
                    <div>
                        <button className='booking_buttons' onClick={() => this.setState({chat: true})}>Habla con nosotros</button> 
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
                            {this.props.tipo === "Premium" ? <img src={Habitacion} height='100px' width='300px' style={{minHeight:'200px', paddingTop:'23px', minWidth:'275px'}}/>:
                            <img src={Habitacion} height='220px' width='300px' style={{minHeight:'200px', paddingTop:'50px', minWidth:'275px'}}/>}
                            {this.props.tipo === "Premium" ? <div><ProgressBar text={this.state.cancel_button} idres = {this.props.id} disable_cancel= {this.disable_cancel}/></div>:<div></div>}
                        </div>       
                        <div className='tb'>
                            <div>
                                <p>Nº de habitación: {this.props.n_habitacion}</p>
                                <p>Nº de usuarios: {this.props.n_user}</p>
                                <p>Fecha de entrada: 2021-02-02 </p>
                                <p>Fecha de salida: 2021-02-03</p>
                                <p>Tipo de Servicio: {this.props.tipo}</p>
                                <p>Solicitud: {this.props.solicitud} </p>
                            </div>              
                        </div>
                    </div>
                    
                    <div className="second_container" style={{marginBottom:"20px"}}>
                        {this.contactoPremium(this.props.tipo)}
                        <button className='booking_buttons' style={{marginLeft:'40px',marginRight:'40px'}}>Modifcar Reserva</button>
                        <button className='booking_buttons' disabled = {this.state.cancel_allowed} onClick={this.handleCancelation}>{this.state.cancel_button}</button>    
                    </div>

                    {chat ? <Chatbot n_habitacion={this.props.n_habitacion} solicitud={this.props.solicitud}/> : <span></span>}
                 
                </div>
            </div>
    
        );
    }
    
}

export default withAlert()(TarjetaReserva);