import React from 'react';
import '../public/leisure.css';

export default class TarjetaOcio extends React.Component {
	render() {
		return (
            <div className='leisure_tarjet' style={{backgroundImage:`url(/media/${this.props.imagen})`}}>
                <div className='leisure_title'>
                    <h1 className='leisure_name'>{this.props.name}</h1>
                </div>
            </div>
		);
	}
}