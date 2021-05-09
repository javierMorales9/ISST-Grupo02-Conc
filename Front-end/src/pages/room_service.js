import React from "react";
import NavBar from "../components/navbar.js";
import Footer from "../components/footer.js";
import "../public/main_styles.css";
import "../public/room_service.css";
import { withAlert } from "react-alert";

class RoomService extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      horaLavanderia: "12:00",
      tipoAlmohada: "Fibra",
      tipoToalla: "Toalla de cara",
      horaLimpieza: "12:00",
      tipoDesayuno: "Desayuno Continental",
      nDesayuno: 2,
    };
  }

  async sendRequest(solicitud, serv, n) {
    var date = new Date();
    var datum = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
    );

    var ser_id = 0;

    this.props.services.map((el, id) =>
      el.tipo == serv ? (ser_id = el.id) : ser_id
    );

    let data = {
      cliente: this.props.cliente,
      service: await fetch(
        "http://localhost:8080/Concierge/rest/service/" + ser_id
      ).then((res) => res.json()),
      solicitud: solicitud,
      numero_usuarios: n,
      fecha_inicio: datum.getTime(),
      fecha_fin: datum.getTime(),
    };
    await fetch("http://localhost:8080/Concierge/rest/request/", {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    this.props.alert.show("La petición ha sido completada", {
      timeout: 0,
      closeCopy: "Aceptar",
      onClose: () => {
        window.location.href =
          "http://localhost:3000" + process.env.PUBLIC_URL + "/booking";
      },
    });
  }

  handleChangeAlmohada = (event) => {
    this.setState({ tipoAlmohada: event.target.value });
  };

  handleChangeToalla = (event) => {
    this.setState({ tipoToalla: event.target.value });
  };

  handleHour = (event) => {
    this.setState({ horaLimpieza: event.target.value });
  };

  handleHourLavanderia = (event) => {
    this.setState({ horaLavanderia: event.target.value });
  };

  handleTipoDesayuno = (event) => {
    this.setState({ tipoDesayuno: event.target.value });
  };

  handleNDesayuno = (event) => {
    this.setState({ nDesayuno: event.target.value });
  };

  render() {
    if (sessionStorage.getItem("login") == null) {
      window.location.href =
        "http://localhost:3000" + process.env.PUBLIC_URL + "/login";
      return <div />;
    }

    return (
      <div>
        <h1 className="subtitulo">Room Service</h1>
        <hr style={{ color: "gray", width: "70%", border: "2px solid" }} />

        <div className="cafeconf">
          <div className="cafeconf_container">
            <div className="room_container">
              <div id="id_cafeteria">
                <div className="sin-background">Cafetería</div>
              </div>
              <div className="secondcont">
                <p style={{ margin: "23px" }}>
                  Seleccione el desayuno:
                  <select id="select" onChange={this.handleTipoDesayuno}>
                    <option value="Desayuno inglés">Desayuno inglés</option>
                    <option value="Desayuno Continental" selected>
                      Desayuno Continental
                    </option>
                    <option value="Desayuno americano">
                      Desayuno americano
                    </option>
                    <option value="Desayuno vienés">Desayuno vienés</option>
                  </select>
                </p>
                <p style={{ margin: "5px" }}>
                  Cantidad
                  <select id="select" onChange={this.handleNDesayuno}>
                    <option value="1">1</option>
                    <option value="2" selected>
                      2
                    </option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </p>

                <p style={{ margin: "5px" }}>
                  <input
                    id="form_submit"
                    type="submit"
                    value="Pedir"
                    style={{ marginBottom: "30px", width: "440px" }}
                    onClick={() => {
                      this.sendRequest(
                        this.state.tipoDesayuno,
                        "Desayuno",
                        this.state.nDesayuno
                      );
                    }}
                  />
                </p>
              </div>
            </div>

            {/*CONFORT*/}
            <div className="room_container">
              <div id="id_confort">
                <div className="sin-background">Confort</div>
              </div>
              <div className="secondcont">
                              <div>


                                <div className="formulario">
                                  <div style={{display: "flex",flexDirection: "column", alignItems: "center",}}>

                                    <p>Almohadas:</p>

                                    <select id="select" value={this.state.tipoAlmohada} onChange={this.handleChangeAlmohada} style={{ marginLeft: "0px" }}>

                                        <option value="Viscoelástica">Viscoelástica</option>
                                        <option value="Fibra" selected>Fibra</option>
                                        <option value="Látex">Látex</option>
                                        <option value="Duvet/Plumón">Duvet/Plumón</option>
                                        <option value="Cervical">Cervical</option>
                                        <option value="embarazadas">Para embarazadas</option>

                                    </select>
                                  
                                  </div>
                                </div>

                                <input id="form_submit" style={{marginBottom: "3px", width: "180px", marginTop: "20px",}} type="submit" value="Pedir"
                                                  onClick={() => { this.sendRequest("Llevar almohada " + this.state.tipoAlmohada, "Almohada", 1 );}}/>

                              </div>
                              


                              <div>
                                <div className="formulario">
                                 <div style={{display: "flex",flexDirection: "column",alignItems: "center", justifyContent: "center"}}>
                                 
                                    <p>Toallas:</p>
                                    <select id="select" value={this.state.tipoToalla} onChange={this.handleChangeToalla} style={{ marginLeft: "0px" }}>

                                        <option >Toalla de manos</option>
                                        <option selected>Toalla de cara</option>
                                        <option>Toalla de ducha</option>
                                        <option>Toalla para la playa</option>
                                        <option>Todas</option>
                                        
                                    </select>
                                  </div>
                                </div>
                                <input id="form_submit" type="submit" value="Pedir" style={{marginBottom: "3px",width: "180px",marginTop: "20px"}}
                                        onClick={() => { this.sendRequest(""+this.state.tipoToalla, "Toallas", 1);}}/>
                              </div>
                {
                  /////////////////////////////////////////
                  //          LA PARTE DE ABAJO          
                  ////////////////////////////////////////
                }


                <div>
                  <div
                    className="formulario"
                    style={{ justifyContent: "center" }}
                  >
                    <p>Limpieza:</p>
                    <label
                      id="form_tipo"
                      for="appt"
                      style={{ margin: "5px" }}
                    ></label>
                    <input
                      type="time"
                      id="appt"
                      name="appt"
                      onChange={this.handleHour}
                    />
                  </div>
                  <input
                    id="form_submit"
                    type="submit"
                    value="Pedir"
                    style={{
                      marginBottom: "3px",
                      width: "180px",
                      marginTop: "0px",
                    }}
                    onClick={() => {
                      this.sendRequest(
                        "Servicio de limpieza a las " + this.state.horaLimpieza,
                        "Limpieza",
                        1
                      );
                    }}
                  />
                </div>
                <div style={{ justifyContent: "center" }}>
                  <div
                    className="formulario"
                    style={{ justifyContent: "center" }}
                  >
                    <p>Cambio sábanas</p>{" "}
                  </div>
                  <input
                    id="form_submit"
                    type="submit"
                    value="Pedir"
                    style={{
                      marginBottom: "3px",
                      width: "180px",
                      marginTop: "00px",
                    }}
                    onClick={() => {
                      this.sendRequest("Cambiar las sábanas", "Sabanas", 1);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Lavanderia*/}
        <div className="laundry_container">
          <div id="id_lavanderia">
            <div className="sin-background">Lavandería</div>
          </div>

          <div
            className="formulario_container"
            style={{ alignItems: "center" }}
          >
            <div className="formulario">
              <p> Elija la hora: </p>
              <div className="formulario">
                <label
                  id="form_tipo"
                  for="appt"
                  style={{ margin: "5px" }}
                ></label>
                <input
                  type="time"
                  id="appt"
                  name="appt"
                  onChange={this.handleHourLavanderia}
                />
              </div>
            </div>
            <div
              className="formulario"
              style={{ alignSelf: "center", width: "400px" }}
            >
              <input
                id="form_submit"
                type="submit"
                value="Enviar"
                style={{ marginBottom: "30px", width: "400px" }}
                onClick={() => {
                  this.sendRequest(
                    "Servicio de lavandería a las " + this.state.horaLavanderia,
                    "Lavanderia",
                    1
                  );
                }}
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withAlert()(RoomService);
