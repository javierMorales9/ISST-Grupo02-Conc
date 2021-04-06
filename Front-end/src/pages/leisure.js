import React from 'react';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
import TarjetaOcio from '../components/tarjeta_ocio.js';
import '../public/leisure.css';

export default class Leisure extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tipo: ""
        }
    }

    async componentDidMount(){

        if(this.props.login){
            let client = await fetch("http://localhost:8080/Concierge/rest/client/"+this.props.id_cliente,{
                method: "GET",
                mode:'cors',
            }).then(res => res.json());
            this.setState({tipo:client.tipo})
        }
	}


    async componentDidUpdate(){

        if(this.props.login){
            let client = await fetch("http://localhost:8080/Concierge/rest/client/"+this.props.id_cliente,{
                method: "GET",
                mode:'cors',
            }).then(res => res.json());
            this.setState({tipo:client.tipo})
        }
	}

    render() {

        if (this.state.tipo=="Estandar"){
            return (
                <div>
                    <h1 className='subtitulo'>Ocio</h1>
                    <hr style={{color:'gray', width: '70%', border:'2px solid'}}/>

                    <div className='container' style={{marginTop:"200px",marginBottom:"280px",fontSize:"30px",color:"red"}}>
                        SU NIVEL DE USUARIO NO TIENE PERMITIDO EL ACCESO A ESTE SERVICIO
                    </div>

                    <Footer/>
                </div>
            );
        } else {
            return (
                <div>
                    <h1 className='subtitulo'>Ocio</h1>
                    <hr style={{color:'gray', width: '70%', border:'2px solid'}}/>
        
                    <div className='container'>
                        <TarjetaOcio name={'GYM'} imagen={'gym.png'}/>
                        <TarjetaOcio name={'SPA'} imagen={'spa.png'}/>
                        <TarjetaOcio name={'CINE'} imagen={'cine.png'}/>
                        <TarjetaOcio name={'TEATRO'} imagen={'teatro.png'}/>
                    </div>
        
                    <Footer/>
                  </div>
                );
        }
    }
}