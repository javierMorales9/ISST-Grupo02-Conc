import React from 'react';

export default class ProgressBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			initialtiemporestante: 60, tiemporestante: this.initialtiemporestante,
			intervall: null,
			currentOrderState: "Pedido realizado.",
			completed: 0,
  		}
  	}

	componentDidMount(){
		
		const default_state = {
		   initialtiemporestante: 60, tiemporestante: this.initialtiemporestante,
		   intervall:setInterval(this.manejadortemp,3000),
		   currentOrderState: "Pedido realizado.",
		   completed: 0
  		};
  
		const initialState = JSON.parse(localStorage.getItem("reserva"+this.props.idres)) || default_state
		
		if(JSON.parse(localStorage.getItem("reserva"+this.props.idres))!=null && JSON.parse(localStorage.getItem("reserva"+this.props.idres)).completed==4){this.props.disable_cancel();}
  		
		this.setState(initialState)
	}
	getRandomWorker= () => {
		const employees = ["Juan","María", "Marta", "Claudia", "Pedro", "Touré", "Débora"];
		const max = employees.length;
		return employees[parseInt(Math.random()* max)];


	}
	manejadortemp = () => {

	if (this.state.completed === 4) {
    	clearInterval(this.state.interval);
    	this.setState({interval:null});
    	this.props.disable_cancel();
    }
    else {
	    this.setState({tiemporestante: this.state.tiemporestante-1});   
	    const estados_pedido = ["Pedido realizado.","Su pedido ha sido aceptado.","Su pedido lo trae " + this.getRandomWorker() + ".", "Su pedido ya está en el hotel", "Pedido entregado correctamente." ] 
	    

	    this.setState({currentOrderState: estados_pedido[this.state.completed+1]})
	    this.setState({completed: this.state.completed+1})
	    
	    localStorage.setItem("reserva"+this.props.idres,JSON.stringify(this.state));
    }
  }


	
	render(){	
		const bgcolor = 'blue'
		
			//iner css style
		const containerStyles = {
			height: 20,
			backgroundColor: "#e0e0de",
			borderRadius: 50,
			margin: 20
		}

		const fillerStyles = {
			height: '100%',
			width: `${this.	state.completed*100/4}%`,
			backgroundColor: bgcolor,
			borderRadius: 'inherit',
			textAlign: 'right'
		}

		const labelStyles = {
			padding: 5,
			color: 'white',
			fontWeight: 'bold'
		}
		
		const forceDiv = {
			marginTop: '10px',
			whiteSpace: 'nowrap',
			alignSelf: 'flex-start'
		}
		return (
		    <div style ={containerStyles}>
		      <div style ={fillerStyles}>
		        <span style={labelStyles}>&#10026;</span>
		        <div style = {forceDiv} >&#10026;{this.state.currentOrderState}</div>
		      </div>
		    </div>
	  	);
	
	}
}
	