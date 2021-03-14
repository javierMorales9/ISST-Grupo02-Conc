import React from 'react';
import obras from '../media/obras.png';
import '../public/tarjeta.css';

export default class Tarjeta extends React.Component {
	render() {
		return (
			<div className='tarjeta'>
                <div style={{display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <hr style={{color:'#5A5847', width: '9em'}}/>
                        <h2 className='titulo_servicio'>{this.props.titulo}</h2>
                        <hr style={{color:'#5A5847', width: '9em'}}/>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-around'}}>
                        <img src={obras} style={{width: '50%'}}/>
                        <a className='text' href={this.props.navigate}>Saber Mas</a>

                    </div>
                    <div style={{width:'100%', paddingTop:'20px'}}>
                        <span className='descripcion_servicio'>
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