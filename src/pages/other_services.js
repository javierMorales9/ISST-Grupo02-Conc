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
        <h1 className='subtitulo'>Otros servicios</h1>
        <hr style={{ color: 'gray', width: '70%', border: '2px solid' }} />

        {/*OTRAS PETICIONES*/} 
        <div className='otros_container'>
          <div id='id_otros'>
          <div className='sin-background'>Otras peticiones</div>
          </div>
          <form className='formularioGrande_container'>
            <div className='formulario'>
              <p> Número habitación: </p>
              <input className='formulario' type='text'></input>
            </div>
            <div className='formularioSolicitud'>
              <p> Introduzca su petición aquí: </p>
            <input id='inputGrande' type='text'></input>
            </div>
            <div className='formulario'>
              <input id="form_submit" type="submit" value="Enviar" style={{marginBottom:'30px'}}/>
            </div>
          </form>
        </div>

        <div>
          <button onClick= {this.recordvoice}>
              APRIETA AQUÍ Y HABLA PARA PEDIR UNAS BUENAS PUT4S
          </button>
          <h1>{this.state.receivedtext ? "Pediste: " + this.state.receivedtext : "Pide algo :)"}</h1>  
			  </div>

        <Footer/>

      </div>
    );
  }
}