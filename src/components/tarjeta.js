import React from 'react';
import obras from '../media/obras.png';
import {cuadrados_servicios, descripcion_servicio, saber_mas, titulo_servicio} from '../public/estilos_inicio';

export default class Tarjeta extends React.Component {
	render() {
		return (
			<div style={cuadrados_servicios}>
                <div style={{display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <hr style={{color:'#5A5847', width: '9em'}}/>
                        <h2 style={titulo_servicio}>Reserva Estancia</h2>
                        <hr style={{color:'#5A5847', width: '9em'}}/>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src={obras} style={{width: '50%'}}/>
                        <button style={saber_mas}>Saber Mas</button>
                    </div>
                    <div style={{width:'100%', paddingBottom:'10px'}}>
                        <span style={{descripcion_servicio}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, ipsum morbi turpis feugiat eros enim. 
                            Nec nulla orci sed vitae nulla nam luctus mattis pellentesque. Amet elit tellus dolor fermentum felis. 
                            Nisi, enim vitae orci fames nunc mauris sagittis facilisis eu. Gravida sed purus placerat ultricies morbi.
                            Sed eget tellus id nam pellentesque tincidunt luctus. 
                        </span>
                    </div>
                </div>
            </div>
		);
	}
}