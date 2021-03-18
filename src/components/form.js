import React from 'react';
import '../public/form.css';

export default class Form extends React.Component {
	render() {
        switch(this.props.page){
            case 'room_service':  
            return (
                <div className="formulario_reserva">
                    <form>
                        <label id="form_hab">
                            N habitacion: <input type="text" name="name"/>
                        </label>
                        <label id="form_esp">
                            Algún otro requisito especial:
                            <br></br>
                            <textarea></textarea>
                        </label>
                        <input id="form_submit" type="submit" value="Enviar" style={{marginBottom:'30px'}}/>
                    </form>
                </div>
            ); 
            case 'transport':  
                return (
                    <div className="formulario_reserva">
                        <form>
                            <label id="form_hab">
                                Nº habitacion: <input type="text" name="name"/>
                            </label>
                            <label id="form_tipo">
                                Tipo de transporte: 
                                <select>
                                    <option selected value="none">--None--</option>
                                    <option value="uber">Uber</option>
                                    <option value="taxi">Taxi</option>
                                    <option value="avion">Avion</option>
                                    <option value="tren">Tren</option>
                                </select>
                            </label>
                            <label id="form_esp1">
                                Algún otro requisito especial:
                                <br></br>
                                <textarea></textarea>
                            </label>
                            <input id="form_submit" type="submit" value="Enviar" style={{marginBottom:'30px'}}/>
                        </form>
                    </div>
                );    
            case 'leisure':  
                return (
                    <div className="formulario_reserva">
                        <form>
                            <label id="form_hab">
                                Nº habitacion: <input type="text" name="name"/>
                            </label>
                            <div style={{marginBottom:'10px'}}>
                                <label id="form_tipo" for="date">Fecha:</label>
                                <input type="date" id="date" name="date"/>
                            </div>
                            <div>
                                <label id="form_tipo" for="appt">Hora:</label>
                                <input type="time" id="appt" name="appt"/>
                            </div>
                            <label id="form_esp">
                                Algún otro requisito especial:
                                <br></br>
                                <textarea></textarea>
                            </label>
                            <input id="form_submit" type="submit" value="Enviar" />
                        </form>
                    </div>
                );    
        }
	}
}
