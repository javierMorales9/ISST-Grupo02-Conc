import React from 'react';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
import Calendar from '../components/calendar.js';
import default_profile from '../media/default_profile.jpeg';
import '../public/profile.css';
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

	
export default class Profile extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			receivedtext: ""
		}
	}
		
	recordvoice = () => {
		recognition.start();
//		console.log('Ready to receive a color command.');
	}
	changeState = (temp) =>{
		this.setState({receivedtext: temp});
	}
	render() {
		recognition.onresult = (event)=>{
			var temp = event.results[0][0].transcript;   
			console.log(temp)
			this.changeState(temp)}


		recognition.onspeechend = function() {
			recognition.stop();
		}

		recognition.onerror = function(event) {
		//diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
				//mb add something
	}
		



        return (
			<div>
				<button onClick= {this.recordvoice}>
					  APRIETA AQUÍ Y HABLA PARA PEDIR UNAS BUENAS PUT4S
				</button>
				<h1>{this.state.receivedtext ? "Pediste: " + this.state.receivedtext : "Pide algo :)"}</h1>  
			</div>
		

	)
    }
}
