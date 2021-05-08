import React from "react";
import Habitacion from "../media/habitacion.png";
import ProgressBar from "../components/progressBar.js";
import Chatbot from "../components/chatbot.js";
import { withAlert } from "react-alert";
import "../public/booking.css";
function rutaImg(props) {
  return "/conciergeWeb/media/" + props;
}
const opts = ["Taxi", "Tren", "Avion", "Uber", "Private driver", "Premium","Desayuno" ];
const ocio = ["Cine", "Spa", "Gym", "Teatro", "Premium"];

class TarjetaReserva extends React.Component {
  constructor(props) {
    super(props);
    this.handleCancelation = this.handleCancelation.bind(this);
    let fecha_fin = new Date(this.props.fecha_fin);
    let fecha_inicio = new Date(this.props.fecha_inicio);
    this.state = {
      edit: false,
      n_habitacion: this.props.n_habitacion,
      n_user: this.props.n_user,
      nombre: this.props.nombre,
      tipo: this.props.tipo,
      fecha_fin: fecha_fin,
      fecha_inicio: fecha_inicio,
      solicitud: this.props.solicitud,
      chat: false,
      cancel_allowed: false,
      alert: "anulada",
      cancel_button: "Cancelar",
    };
  }
  changeState = (temp) => {
    this.setState({ receivedtext: temp });
  };

  /********************************
   *   REALIZACIÓN CANCELACIÓN     *
   ********************************/

  async handleCancelation() {
    await fetch(
      "http://localhost:8080/Concierge/rest/" +
        (this.props.open ? "openPetition/" : "request/") +
        this.props.id,
      {
        method: "DELETE",
      }
    ).then((res) => res.text());
    this.props.alert.show(
      "La reserva " +
        this.props.tipo +
        " fué " +
        this.state.alert +
        " exitosamente.",
      {
        timeout: 0,
        closeCopy: "Aceptar",
        onClose: () => {
          window.location.href =
            "http://localhost:3000" + process.env.PUBLIC_URL + "/booking";
        },
      }
    );
  }

  /*******************************
   *   INHABILITA CANCELACIÓN     *
   ********************************/

  disable_cancel = () => {
    //this.setState({cancel_allowed: true})
    this.setState({ cancel_button: "Eliminar" });
    this.setState({ alert: "eliminada" });
  };

  contactoPremium = (type) => {
    if (type != "Premium" && !this.state.edit) {
      return (
        <button
          className="booking_buttons"
          style={{ marginLeft: "40px", marginRight: "40px" }}
          onClick={() => this.setState({ edit: true })}
        >
          Modifcar Reserva
        </button>
      );
    } else if (!this.state.edit) {
      return (
        <div>
          <button
            className="booking_buttons"
            style={{ marginRight: "40px" }}
            onClick={() => this.setState({ chat: true })}
          >
            Habla con nosotros
          </button>
        </div>
      );
    }
  };
  //para guardar en la bbdd la fecha en el formato correcto
  toTimestamp(date) {
    var datum = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
    );
    return datum.getTime();
  }

  async updateService() {
    let data = {
      id: this.props.id,
      cliente: JSON.parse(sessionStorage.getItem("entire_client")),
      fecha_inicio: this.toTimestamp(this.state.fecha_inicio),
      fecha_fin: this.toTimestamp(this.state.fecha_fin),
      solicitud:
        this.state.solicitud == ""
          ? this.props.solicitud
          : this.state.solicitud,
      numero_usuarios:
        this.state.n_user == "" ? this.props.n_user : this.state.n_user,
      service: await fetch(
        "http://localhost:8080/Concierge/rest/service/" + this.props.service_id
      ).then((res) => res.json()),
    };

    await fetch(
      "http://localhost:8080/Concierge/rest/request/" + this.props.id,
      {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    this.props.alert.show(
      "La reserva " + this.state.tipo + " fué modificada exitosamente.",
      {
        timeout: 0,
        closeCopy: "Aceptar",
        onClose: () => {
          window.location.href =
            "http://localhost:3000" + process.env.PUBLIC_URL + "/booking";
        },
      }
    );
    this.setState({ edit: false });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDateChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: new Date(value) });
  };

  render() {
    const chat = this.state.chat;
    console.log(this.props.nombre);
    if (this.state.edit) {
      return (
        //el texto no varia, siempre es mod reserva o cancelar reserva,
        //pero el link variará en función de la reserva.

        <div className="booking_container">
          <div className="booking_smallcontainer">
            <div className="first_group">
              <div>
                {this.props.nombre === "Premium" ? (
                  <img
                    src={rutaImg(
                      this.props.nombre.toLowerCase().replace(/\s/g, "") +
                        ".png"
                    )}
                    height="100px"
                    width="200px"
                    style={{
                      minHeight: "200px",
                      paddingTop: "23px",
                      paddingLeft: "15px",
                      minWidth: "275px",
                    }}
                  />
                ) : (
                  <img
                    src={
                      ocio.includes(this.props.tipo)
                        ? rutaImg(
                            this.props.tipo.toLowerCase().replace(/\s/g, "") +
                              ".png"
                          )
                        : opts.includes(this.props.tipo)
                        ? rutaImg(
                            this.props.tipo.toLowerCase().replace(/\s/g, "") +
                              ".jpg"
                          )
                        : Habitacion
                    }
                    height="220px"
                    width="300px"
                    style={{
                      minHeight: "200px",
                      paddingTop: "0px",
                      minWidth: "275px",
                    }}
                  />
                )}
                {this.props.nombre === "Premium" ? (
                  <div>
                    <ProgressBar
                      text={this.state.cancel_button}
                      idres={this.props.id}
                      disable_cancel={this.disable_cancel}
                    />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="tb">
                <div>
                  <p style={{ margin: "10px 0px 10px 0px" }}>
                    Nº de usuarios:{" "}
                  </p>
                  <input
                    type="text"
                    name="n_user"
                    style={{ width: "163px" }}
                    placeholder={this.props.n_user}
                    onChange={this.handleChange}
                  />
                  <p style={{ margin: "10px 0px 10px 0px" }}>
                    Fecha de entrada:{" "}
                  </p>
                  <input
                    type="date"
                    name="fecha_inicio"
                    placeholder={this.props.fecha_inicio}
                    onChange={this.handleDateChange}
                  ></input>
                  <p style={{ margin: "10px 0px 10px 0px" }}>
                    Fecha de salida:{" "}
                  </p>
                  <input
                    type="date"
                    name="fecha_fin"
                    placeholder={this.props.fecha_fin}
                    onChange={this.handleDateChange}
                  ></input>
                  <p style={{ margin: "10px 0px 10px 0px" }}>Solicitud: </p>
                  <input
                    type="text"
                    name="solicitud"
                    style={{ width: "163px" }}
                    placeholder={this.props.solicitud}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="second_container" style={{ marginBottom: "20px" }}>
              {this.contactoPremium(this.props.nombre)}
              <button
                className="booking_buttons"
                style={{ marginLeft: "40px", marginRight: "40px" }}
                onClick={() => {
                  this.updateService();
                }}
              >
                Confirmar
              </button>
              <button
                className="booking_buttons"
                disabled={this.state.cancel_allowed}
                onClick={() => this.setState({ edit: false })}
              >
                {this.state.cancel_button}
              </button>
            </div>

            {chat ? (
              <Chatbot
                n_habitacion={this.props.n_habitacion}
                solicitud={this.props.tipo}
              />
            ) : (
              <span></span>
            )}
          </div>
        </div>
      );
    } else {
      return (
        //el texto no varia, siempre es mod reserva o cancelar reserva,
        //pero el link variará en función de la reserva.

        <div className="booking_container">
          <div className="booking_smallcontainer">
            <div className="first_group">
              <div>
                {this.props.nombre === "Premium" ? (
                  <img
                    src={rutaImg(
                      this.props.nombre.toLowerCase().replace(/\s/g, "") +
                        ".png"
                    )}
                    height="100px"
                    width="200px"
                    style={{
                      minHeight: "200px",
                      paddingTop: "23px",
                      paddingLeft: "15px",
                      minWidth: "275px",
                    }}
                  />
                ) : (
                  <img
                    src={
                      ocio.includes(this.props.tipo)
                        ? rutaImg(
                            this.props.tipo.toLowerCase().replace(/\s/g, "") +
                              ".png"
                          )
                        : opts.includes(this.props.tipo)
                        ? rutaImg(
                            this.props.tipo.toLowerCase().replace(/\s/g, "") +
                              ".jpg"
                          )
                        : Habitacion
                    }
                    height="220px"
                    width="300px"
                    style={{
                      minHeight: "200px",
                      paddingTop: "50px",
                      minWidth: "275px",
                    }}
                  />
                )}
                {this.props.nombre === "Premium" ? (
                  <div>
                    <ProgressBar
                      text={this.state.cancel_button}
                      idres={this.props.id}
                      disable_cancel={this.disable_cancel}
                    />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="tb">
                <div>
                  <p>Nº de habitación: {this.state.n_habitacion}</p>
                  <p>Nº de usuarios: {this.state.n_user}</p>
                  <p>
                    Fecha de entrada: {this.state.fecha_inicio.getDate()}
                    {"-"}
                    {this.state.fecha_inicio.getMonth() + 1}
                    {"-"}
                    {this.state.fecha_inicio.getFullYear()}
                  </p>
                  <p>
                    Fecha de salida: {this.state.fecha_fin.getDate()}
                    {"-"}
                    {this.state.fecha_fin.getMonth() + 1}
                    {"-"}
                    {this.state.fecha_fin.getFullYear()}
                  </p>
                  <p>Servicio: {this.state.nombre}</p>
                  {this.props.nombre === "Premium" ? (
                    <p>Solicitud: {this.state.tipo} </p>
                  ) : (
                    <div>
                      <p>Tipo: {this.state.tipo} </p>{" "}
                      <p>Solicitud: {this.state.solicitud} </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="second_container" style={{ marginBottom: "20px" }}>
              {this.contactoPremium(this.props.nombre)}

              <button
                className="booking_buttons"
                disabled={this.state.cancel_allowed}
                onClick={this.handleCancelation}
              >
                {this.state.cancel_button}
              </button>
            </div>

            {chat ? (
              <Chatbot
                n_habitacion={this.props.n_habitacion}
                solicitud={this.props.tipo}
              />
            ) : (
              <span></span>
            )}
          </div>
        </div>
      );
    }
  }
}

export default withAlert()(TarjetaReserva);
