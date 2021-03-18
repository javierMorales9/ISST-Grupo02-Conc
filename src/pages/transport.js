import React from 'react';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
import MapContainer from '../components/map.js';
import Form from '../components/form.js';
import '../public/transport.css';
import '../public/main_styles.css';

export default class Transport extends React.Component {
    render() {
        return (
            <div>
                <h1 className="subtitulo">Transporte</h1>
                <hr className="raya_titulo"/>

                <h2 className="category">Mis reservas</h2>
                <div id="reseras_general_transporte"> 
                <div id="reservas_hechas">
                    <div id="mis_reservas">
                            {/*Aquí habría que extraer las resrvas del servidor y hacer un map para que te las meta*/}
                            <div className="reserva_transporte">
                                <p>Destino:C/ de la Fresa nº19 P12 3ºD</p>
                                <p>Hora de Recogida: 04/03/2024 12:31</p>
                                <p>Tipo de transporte: tren</p>
                            </div>
                            <div className="reserva_transporte">
                                <p>Destino:C/ de la Fresa nº19 P12 3ºD</p>
                                <p>Hora de Recogida: 04/03/2024 12:31</p>
                                <p>Tipo de transporte: tren</p>
                            </div>
                            <div className="reserva_transporte">
                                <p>Destino:C/ de la Fresa nº19 P12 3ºD</p>
                                <p>Hora de Recogida: 04/03/2024 12:31</p>
                                <p>Tipo de transporte: tren</p>
                            </div>
                            <div className="reserva_transporte">
                                <p>Destino:C/ de la Fresa nº19 P12 3ºD</p>
                                <p>Hora de Recogida: 04/03/2024 12:31</p>
                                <p>Tipo de transporte: tren</p>
                            </div>
                    </div>

                    <div className="map">
                        {/*para cada reserva habría que generar un pin y pasárselo como prop a MapContainer*/}
                        <MapContainer />
                    </div>
                </div>
                </div>
                
                <h2 className="category">Nueva Reserva</h2>
            
                <Form page='transport'/>

                <Footer/>
            </div>
        );
    }
}