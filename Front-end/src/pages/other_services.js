import React from 'react';
import Footer from '../components/footer.js';
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



export default class RoomService extends React.Component {

  constructor(props){
		super(props);
		this.state = {
			receivedtext: "",
      //upload: false,
      //tipo: "",
      //not_authorized_to_paint: true
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

  async componentDidMount(){   
    console.log("printed")
    if(this.props.login){
      //let l = JSON.parse(this.props.entire_client)
      console.log()
    /*
        let client = await fetch("http://localhost:8080/Concierge/rest/client/"+this.props.id_cliente,{
            method: "GET",
            mode:'cors',
        }).then(res => res.json());
    */
        //this.setState({tipo:this.props.entire_client.tipo})

    }
    //paint now:
    //this.setState({not_authorized_to_paint: false})
}
  async updateServiceRequest() {
    if (this.state.receivedtext==="")
      alert("Introduce una petición antes de enviarla ")
    else{
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
  
      await fetch("http://localhost:8080/Concierge/rest/service",{
        method:'PUT', 
        mode: 'cors',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
      })
  
      this.setState({receivedtext:""});
    
    }
    }
 	/*  OLD
   async componentDidUpdate () { 
    //console.log("antwwwwwes" + this.state.tipo === "")
    //console.log("antes" + this.state.tipo === "Premium")
   	//if (this.state.upload || (this.state.tipo!=="Premium" && this.props.login)){
			
      //let cliente = await fetch("http://localhost:8080/Concierge/rest/client/"+this.props.id_cliente).then(res=>res.json());
      //console.log("dentro")
      //console.log(cliente)
      //console.log(cliente.tipo)
      //console.log(this.state)
      //update client - still premium?

      
			

			
		

			
		//}
    //if (this.state.tipo!="" && this.state.not_authorized_to_paint === true)
      //        this.setState({not_authorized_to_paint: false})
	}
*/
  render() {
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

      //console.log("state en render: " + this.state.tipo)
      console.log(this.props)
      return (
        <div>
          
        {this.props.entire_client.tipo==="" ? <div></div> : 
        this.props.entire_client.tipo!="Premium" ? 
            <div>
               <h1 className='subtitulo'>Premium</h1>
               <hr style={{ color: 'gray', width: '70%', border: '2px solid' }} />

              <div className='container' style={{marginTop:"200px",marginBottom:"280px",fontSize:"30px",color:"red"}}>
                  SU NIVEL DE USUARIO NO TIENE PERMITIDO EL ACCESO A ESTE SERVICIO
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
    
    
  //envuelve hasta aquí
  }
}

// COMENTARIO DE INTERÉS:

// form ya incluye que el botón se pulse cuando se pulsa intro y por tanto this.state.receivedtext = ''
// cuando metamos lógica habrá que anticiparnos a esto, probablemente enviando el this.state.receivedtext haciendo uso de onClick()



//                   <button id="form_submit" onClick={()=>this.setState({upload:true})}>Enviar</button>
