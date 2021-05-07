import React from "react";
import NavBar from "../components/navbar.js";
import Footer from "../components/footer.js";
import "../public/main_styles.css";
import "../public/room_service.css";
import { withAlert } from "react-alert";

export default class RoomService extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      horaLavanderia: "12:00",
      tipoAlmohada: "Fibra",
      horaLimpieza: "12:00",
      tipoDesayuno: "Desayuno Continental",
      nDesayuno: 2,
    };
  }

  //   this.props.services.map((k) => {
  //     if (k["tipo"] === "Toallas") {
  //       return k;
  //     }
  //   })
  async sendRequest(solicitud, serv, n) {
    var date = new Date();
    var datum = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
    );

    let data = {
      cliente: this.props.cliente,
      service: serv, //es el servicio entero
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
    // recuerda pasar en el body el objeto servicio entero para que
    // no se creen filas en la tabla services

    // this.props.alert.show("La petición ha sido completada", {
    //   timeout: 0,
    //   closeCopy: "Aceptar",
    //   onClose: () => {
    //     window.location.href =
    //       "http://localhost:3000" + process.env.PUBLIC_URL + "/booking";
    //   },
    // });
  }

  handleChangeAlmohada = (event) => {
    this.setState({ tipoAlmohada: event.target.value });
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
                <div className="sin-background">Cafeteria</div>
              </div>
              <div>
                <p>
                  Seleccione el desayuno
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
                <p>
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

                <p>
                  <input
                    id="form_submit"
                    type="submit"
                    value="Pedir"
                    style={{ marginBottom: "30px", width: "400px" }}
                    onClick={() => {
                      this.sendRequest(
                        this.state.tipoDesayuno,
                        this.props.services[16],
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
              <div>
                <ul>
                  <li>
                    Almohadas{" "}
                    <select
                      id="select"
                      value={this.state.tipoAlmohada}
                      onChange={this.handleChangeAlmohada}
                    >
                      <option value="Viscoelástica">Viscoelástica</option>
                      <option value="Fibra" selected>
                        Fibra
                      </option>
                      <option value="Látex">Látex</option>
                      <option value="Duvet/Plumón">Duvet/Plumón</option>
                      <option value="Cervical">Cervical</option>
                      <option value="embarazadas">Para embarazadas</option>
                    </select>
                    <input
                      id="form_submit"
                      type="submit"
                      value="Pedir"
                      onClick={() => {
                        this.sendRequest(
                          "LLevar almohada " + this.state.tipoAlmohada,
                          this.props.services[12],
                          1
                        );
                      }}
                      style={{ marginBottom: "30px", width: "400px" }}
                    />
                  </li>
                  <li>
                    Cambio Toallas
                    <input
                      id="form_submit"
                      type="submit"
                      value="Pedir"
                      onClick={() => {
                        this.sendRequest(
                          "Cambio toallas",
                          this.props.services[13],
                          1
                        );
                      }}
                      style={{ marginBottom: "30px", width: "400px" }}
                    />
                  </li>
                  <li>
                    <p>Limpieza</p>
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
                        onChange={this.handleHour}
                      />
                    </div>
                    <input
                      id="form_submit"
                      type="submit"
                      value="Pedir"
                      style={{ marginBottom: "30px", width: "400px" }}
                      onClick={() => {
                        this.sendRequest(
                          "Servicio de limpieza a las " +
                            this.state.horaLimpieza,
                          this.props.services[14],
                          1
                        );
                      }}
                    />
                  </li>
                  <li>
                    Cambio sábanas{" "}
                    <input
                      id="form_submit"
                      type="submit"
                      value="Pedir"
                      style={{ marginBottom: "30px", width: "400px" }}
                      onClick={() => {
                        this.sendRequest(
                          "Cambiar las sábanas",
                          this.props.services[15],
                          1
                        );
                      }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/*Lavanderia*/}
        <div className="laundry_container">
          <div id="id_lavanderia">
            <div className="sin-background">Lavanderia</div>
          </div>

          <form className="formulario_container">
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
                    this.props.services[17],
                    1
                  );
                }}
              />
            </div>
          </form>
        </div>

        <Footer />
      </div>
    );
  }
}
