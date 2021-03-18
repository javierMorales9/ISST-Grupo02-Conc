import React from 'react';
import Footer from '../components/footer.js';
import '../public/main_styles.css';

var SpeechRecognition = SpeechRecognition || window.webkitSpeechRecognition
//var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent

//var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];
//var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
//var speechRecognitionList = new SpeechGrammarList();
//speechRecognitionList.addFromString(grammar, 1);
//recognition.grammars = speechRecognitionList;
recognition.continuous = false;
//recognition.lang = 'en-US';
recognition.lang = 'es-es'
recognition.interimResults = false;
recognition.maxAlternatives = 1;

export default class RoomService extends React.Component {

  constructor(props){
		super(props);
		this.state = {
			receivedtext: ""
		}
	}

  recordvoice = () => {
		recognition.start();
    //console.log('Ready to receive a color command.');
	}

  
	changeState = (temp) =>{
		this.setState({receivedtext: temp});
	}

  comprobachioni= () => {
    console.log(this.state.receivedtext)
  }


  render() {

    recognition.onresult = (event)=>{
			var temp = event.results[0][0].transcript;   
			console.log(temp)
			this.changeState(temp)
    }

		recognition.onspeechend = function() {
			recognition.stop();
		}

		recognition.onerror = function(event) {
		    //diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
				//mb add something
	  }



    return (
      <div>
        <h1 className='subtitulo'>Premium</h1>
        <hr style={{ color: 'gray', width: '70%', border: '2px solid' }} />

        {/*OTRAS PETICIONES*/} 
        <div className='otros_container'>
          <div id='id_otros'>
          <div className='sin-background'>Otras peticiones</div>
          </div>

          <div className='formularioGrande_container'>
            <div className='formularioSolicitud'>
                <div style={{display:'flex', flexDirection:'column'}}> 
                  <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent: 'center'}}>
                    <div style={{margin:'10px 0px'}}>Pulse para introducir por voz:</div>
                    <div>
                      <button style={{marginLeft:'10px'}} onClick= {this.recordvoice}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 12V6C16 3.783 14.215 1.979 12.021 1.979C11.9506 1.97942 11.8805 1.98781 11.812 2.004C10.7853 2.05378 9.81693 2.49635 9.10738 3.24015C8.39783 3.98395 8.00136 4.97204 8 6V12C8 14.206 9.794 16 12 16C14.206 16 16 14.206 16 12ZM10 12V6C10 4.897 10.897 4 12 4C12.0547 4.00002 12.1092 3.995 12.163 3.985C13.188 4.06 14 4.935 14 6V12C14 13.103 13.103 14 12 14C10.897 14 10 13.103 10 12Z" fill="black"/>
                          <path d="M6 12H4C4 16.072 7.061 19.436 11 19.931V22H13V19.931C16.939 19.436 20 16.073 20 12H18C18 15.309 15.309 18 12 18C8.691 18 6 15.309 6 12Z" fill="black"/>
                        </svg>
                      </button>
                    </div>    
                  </div>
                  <div style={{margin:'10px 0px'}}>Introduzca su petición aquí:</div>  
                </div>
            </div>

            <form className='formularioGrande_container'>
              <input id='inputGrande' type="text" value={this.state.receivedtext || '' } onChange = {(e)=> this.changeState(e.target.value)}/>
              <div className='formulario'>
                <input id="form_submit" type="submit" value="Enviar" style={{marginBottom:'30px'}} />
              </div>
            </form>
            
          </div>
        </div>
        <Footer/>
        
      </div>
    );
  }
}

// COMENTARIO DE INTERÉS:

// form ya incluye que el botón se pulse cuando se pulsa intro y por tanto this.state.receivedtext = ''
// cuando metamos lógica habrá que anticiparnos a esto, probablemente enviando el this.state.receivedtext haciendo uso de onClick()