import React from 'react';
import Footer from '../components/footer.js';
import { withAlert } from "react-alert";
import '../public/main_styles.css';

if (window.hasOwnProperty('webkitSpeechRecognition')){
  var SpeechRecognition = SpeechRecognition || window.webkitSpeechRecognition
  var SpeechRecognitionEvent = SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent
  var recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'es-es'
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
};

class Premium extends React.Component {

  constructor(props){
		super(props);
		this.state = {
			receivedtext: "",
		}
    this.updateServiceRequest = this.updateServiceRequest.bind(this)
	}

  recordvoice = () => {
    if (window.hasOwnProperty('webkitSpeechRecognition')){
		  recognition.start();
    } else {
      console.log ("No es compatible")
    }
	}
  
	changeState = (temp) =>{
    this.setState({receivedtext: temp});
	}

  async updateServiceRequest() {
    if (this.state.receivedtext===""){
        this.props.alert.show("Introduce una petición antes de enviarla",{closeCopy: "Aceptar",});
    }else{
      let data = {
        disponibilidad:true,
        fecha_inicio:"2021-02-02",
        fecha_fin:"2021-02-03",
        numero_usuarios:1,
        precio:20.1,
        solicitud: this.state.receivedtext,
        tipo: "Premium",
        cliente: this.props.entire_client,
           };
  
      await fetch("http://localhost:8080/Concierge/rest/openPetition",{
        method:'PUT', 
        mode: 'cors',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
      })
  
      this.setState({receivedtext:""});
      this.props.alert.show("La petición ha sido completada",{timeout:0,closeCopy: "Aceptar",onClose: () => {window.location.href='http://localhost:3000' + process.env.PUBLIC_URL + '/booking';}});
    }
  }
  render() {

    if (this.props.entire_client == null){
   	 window.location.href = 'http://localhost:3000' + process.env.PUBLIC_URL + '/login';
       	 return <div/>;
	}


      let t = window.hasOwnProperty('webkitSpeechRecognition')
      if (t){
        recognition.onresult = (event)=>{
          var temp = event.results[0][0].transcript;   
          this.changeState(temp)
        }
    
        recognition.onspeechend = function() {
          recognition.stop();
        }
      } 
      return (
        <div>
          
        {this.props.entire_client.tipo==="" ? <div></div> : 
        this.props.entire_client.tipo!="Premium" ? 
            <div>
               <h1 className='subtitulo'>Premium</h1>
               <hr style={{ color: 'gray', width: '70%', border: '2px solid' }} />

               <div className='container' style={{marginTop:"150px",marginBottom:"220px",fontSize:"30px",color:"red"}}>
                    <span>SU NIVEL DE USUARIO NO TIENE AUTORIZACIÓN AL ACCESO DE ESTE SERVICIO</span>
                    <span style={{marginTop:"20px"}}>AUMENTE SU NIVEL A CLIENTE PREMIUM PARA DISFRUTAR DEL SERVICIO</span>
                </div>
              <Footer/>
            </div>

            :
            <div>
              <h1 className='subtitulo'>Premium</h1>
              <hr style={{ color: 'gray', width: '70%', border: '2px solid' }} />
      
              {/*OTRAS PETICIONES*/} 
              <div className='otros_container'>
                <div id='id_otros'>
                <div className='sin-background'>Petición abierta</div>
                </div>
      
                <div className='formularioGrande_container'>
                  <div className='formularioSolicitud'>
                      <div style={{display:'flex', flexDirection:'column'}}> 
                        {t ? <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent: 'center'}}>
                          <div style={{margin:'10px 0px'}}>Pulse para introducir por voz:</div>
                          <div>
                            <button style={{marginLeft:'10px'}} onClick={this.recordvoice}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 12V6C16 3.783 14.215 1.979 12.021 1.979C11.9506 1.97942 11.8805 1.98781 11.812 2.004C10.7853 2.05378 9.81693 2.49635 9.10738 3.24015C8.39783 3.98395 8.00136 4.97204 8 6V12C8 14.206 9.794 16 12 16C14.206 16 16 14.206 16 12ZM10 12V6C10 4.897 10.897 4 12 4C12.0547 4.00002 12.1092 3.995 12.163 3.985C13.188 4.06 14 4.935 14 6V12C14 13.103 13.103 14 12 14C10.897 14 10 13.103 10 12Z" fill="black"/>
                                <path d="M6 12H4C4 16.072 7.061 19.436 11 19.931V22H13V19.931C16.939 19.436 20 16.073 20 12H18C18 15.309 15.309 18 12 18C8.691 18 6 15.309 6 12Z" fill="black"/>
                              </svg>
                            </button>
                          </div>    
                        </div> 
                        : <div></div>}
                        <div style={{margin:'10px 0px'}}>Introduzca su petición aquí:</div>  
                      </div>
                  </div>
      
                  <div className='formularioGrande_container' >
                    <input id='inputGrande' type="text" value={this.state.receivedtext || '' } onChange = {(e)=> this.changeState(e.target.value)}
                    onKeyUp = {key => {
                      if (key.keyCode === 13){this.updateServiceRequest()}
                    }}
                    />
                    <div className='formulario'>
                      <button id="form_submit" onClick = {this.updateServiceRequest}>Enviar</button>
                    </div>
                  </div>
                
                  
                  
                </div>
              </div>
              <Footer/>
          
            </div>
      
      }
      </div>
        
      );
  }
}

export default withAlert()(Premium);