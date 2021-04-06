import React from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import obras from '../media/obras.png'
import '../public/chatbot.css'

export default class Chatbot extends React.Component {


	handleNewUserMessage = (newMessage) => {
		console.log(`New message incomig! ${newMessage}`);
		addResponseMessage('No te preocupes, estamos trabajando en ello')
    // Now send the message throught the backend API
}
	titulo = () =>  {return "Chat de la habitacion " + this.props.n_habitacion}
	render(){
		return(
			<div>
			<Widget
			handleNewUserMessage={this.handleNewUserMessage}
			profileAvatar={obras}
			title={this.titulo()}
			subtitle="Pidenos lo que quieras"
			/>
			</div>

		);
}


  componentDidMount() {
    addResponseMessage("Tu solicitud: " + this.props.solicitud + " está en proceso. Haznos saber si necesitas algo más por aquí, o bien ve a la sección premium a pedir algo nuevo");
  }

  componentDidUpdate(){
  	addLinkSnippet({title: 'Mira esto mientras te llega el pedido!', link: ''})
  }

}