import React from 'react';
import Form from '../components/form.js';
import '../public/tarjeta_ocio.css';

function rutaImg(props){
    return '/conciergeWeb/media/' + props;
    }

export default class TarjetaOcio extends React.Component {
	render() {
		return (
            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <img src={rutaImg(this.props.imagen)} style={{width:'1000px',height:'500px'}}/>
                        <div className='leisure_title'>
                            <h1 className='leisure_name'>{this.props.name}</h1>
                        </div>
                    </div>
                    <div className="flip-box-back">
                        <h2 className="titulo_ocio">Nueva Reserva</h2>
                        <Form page='leisure'/>
                    </div>
                </div>
            </div>
        );    
	}
}