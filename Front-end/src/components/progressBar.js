import React from 'react';

export default class ProgressBar extends React.Component {
	constructor(props){
	  super(props);
	  this.state = {
	   initialtiemporestante: 60, tiemporestante: this.initialtiemporestante,
	   intervall: null,
	   currentOrderState: "Pedido realizado.",
	   completed: 0
  		}
  	}

	componentDidMount(){
		const default_state = {
		   initialtiemporestante: 60, tiemporestante: this.initialtiemporestante,
		   intervall:setInterval(this.manejadortemp,6000*Math.random()),
		   currentOrderState: "Pedido realizado.",
		   completed: 0
  		};
		const initialState = JSON.parse(localStorage.getItem("reserva"+this.props.idres)) || default_state
  		console.log(initialState)
  		this.setState(initialState)
/*		

		this.setState({})
		this.setState({interval: } );
		this.setState({count: 0})
*/
	}
	getRandomWorker= () => {
		const employees = ["Juan","María", "Marta", "Claudia", "Ongombo", "Eren Jaeger"];
		const max = employees.length;
		return employees[parseInt(Math.random()* max)];


	}
	manejadortemp = () => {

	if (this.state.completed === 4) {
    	clearInterval(this.state.interval);
    	this.setState({interval:null});
    }
    else {
	    this.setState({tiemporestante: this.state.tiemporestante-1});   
	    const estados_pedido = ["Pedido realizado.","Su pedido ha sido aceptado.","Su pedido está de camino, lo trae " + this.getRandomWorker() + ".", "Su pedido ya está en el hotel, en breve lo recibirá.", "Pedido entregado correctamente." ] 
	    

	    this.setState({currentOrderState: estados_pedido[this.state.completed+1]})
	    this.setState({completed: this.state.completed+1})
	    console.log(this.state.completed)
	    localStorage.setItem("reserva"+this.props.idres,JSON.stringify(this.state));
    }
    //document.getElementById("tmr").innerText = "Tiempo restante: "+this.state.tiemporestante+" segundos";
    

  }


	
	render(){	
	const bgcolor = 'blue'
	
		//iner css style
    const containerStyles = {
	    height: 20,
	    width: '90%',
	    backgroundColor: "#e0e0de",
	    borderRadius: 50,
	    margin: 20
  	}

  	const fillerStyles = {
	    height: '100%',
	    width: `${this.state.completed*100/4}%`,
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
  		//border: '1px solid black',
	    //width: '70%',
	    //overflow: 'hidden',
	    whiteSpace: 'nowrap',
	}
		return (
		    <div style ={containerStyles}>
		      <div style ={fillerStyles}>
		        <span style={labelStyles}>&#10026;</span>
		        <div style = {forceDiv} >&#10026;{this.state.currentOrderState}</div>
		      </div>
		    </div>
	  	);}
	}
	
