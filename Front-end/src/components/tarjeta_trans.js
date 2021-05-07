import React from 'react';
import '../public/tarjeta_ocio.css';
import MapContainer from '../components/map.js';
import { withAlert } from "react-alert";
function rutaImg(props){
    return '/conciergeWeb/media/' + props;
    }

class TarjetaTrans extends React.Component {
    constructor(props){
		super(props);
		this.state = {
			receivedtext: "",
            num_usrs:0,
            //date: "",
		}
    this.updateServiceRequest = this.updateServiceRequest.bind(this)
	}

    changeState = (temp) =>{
        this.setState({receivedtext: temp});
        }

    changeState2 = (temp) =>{
        if (isNaN(parseInt(temp))){
            this.props.alert.show("Introduce un valor númerico en el campo número de personas.",{closeCopy: "Aceptar",});
            //alert("tuvi")
            this.setState({num_usrs: parseInt(0)});
        }
        else{
            this.setState({num_usrs: parseInt(temp)});
        }

    }
    


    async updateServiceRequest() {
        if (this.state.receivedtext===""){
            //alert("xd")
            this.props.alert.show("Introduce una dirección antes de enviar la petición.",{closeCopy: "Aceptar",});
        }
//        else if (this.state.date === ""){
//            this.props.alert.show("Introduce una dirección antes de enviar la petición.",{closeCopy: "Aceptar",});
        
//        }
        else{

        let data = {
            //fecha_fin: this.state.date,
            //fecha_inicio:this.state.date,
            fecha_inicio:"2021-02-02",
            fecha_fin:"2021-02-03",
            numero_usuarios: parseInt(this.state.num_usrs),
            cliente: this.props.client,
            service: this.props.serv,
            solicitud: this.state.receivedtext
            };
            console.log(this.props.client)
            console.log(this.props.serv)
            console.log(data)        
       		
    
        await fetch("http://localhost:8080/Concierge/rest/request",{
            method:'PUT', 
            mode: 'cors',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
    
        this.setState({receivedtext:"",num_usrs:0});
        
        this.props.alert.show("La petición ha sido completada",{timeout:0,closeCopy: "Aceptar",onClose: () => {window.location.href='http://localhost:3000' + process.env.PUBLIC_URL + '/booking';}});
        }
    }

	render() {
     //   console.log(this.props.client.id)
		return (
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <img src={rutaImg(this.props.imagen)} style={{width:'1000px',height:'500px'}}/>
                        <div className='leisure_title'>
                            <h1 className='leisure_name'>{this.props.name.toUpperCase()}</h1>
                        </div>
                    </div>
                    <div className="flip-box-back">
                        <h2 className="titulo_ocio">Nueva Reserva</h2>
                            <div className="formulario_reserva">
                            <form>
                                <div style={{marginBottom:'10px'}}>
                                    <label id="form_tipo" for="date">Fecha:</label>
                                    <input type="date" id="date" name="date"/>
                                </div>
                                <div>
                                    <label id="form_tipo" for="appt">Hora:</label>
                                    <input type="time" id="appt" name="appt"/>
                                </div>
                                <label id = "form_tipo">
                                    Lugar de destino:  
                                    <input type = "text" style = {{paddingLeft: '5px' ,marginLeft: '5px'}} value={this.state.receivedtext || '' } onChange = {(e)=> this.changeState(e.target.value)}/>
                                </label>
                                <label id = "form_tipo">
                                    Número de personas:  
                                    <input type = "text" style = {{paddingLeft: '5px' ,marginLeft: '5px'}} value={this.state.num_usrs || '' } onChange = {(e)=> this.changeState2(e.target.value)}/>
                                </label>
                              
                                <label id="form_esp">
                                    Número de habitación: {this.props.client.numeroHabitacion}
                                </label>
                                <label id="form_esp">
                                    Tipo de vehículo: {this.props.name}
                                </label>

                                <button id="form_submit" onClick = {this.updateServiceRequest}>Enviar</button>
                            </form>
                            <div className="map">
                                {/*para cada reserva habría que generar un pin y pasárselo como prop a MapContainer*/}
                                <MapContainer />
                            </div>

                            </div>
    
                    </div>
                </div>
            </div>
        );    
	}
}

export default withAlert()(TarjetaTrans);