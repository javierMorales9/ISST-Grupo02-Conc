import React from "react";
import Form from "../components/form.js";
import "../public/tarjeta_ocio.css";
import { withAlert } from "react-alert";

function rutaImg(props) {
  return "/conciergeWeb/media/" + props;
}

class TarjetaOcio extends React.Component {
  constructor(props) {
    super(props);
    let fecha_inicio = new Date(this.props.fecha_inicio);
    this.state = {
      n_user: "",
      tipo: this.props.tipo,
      service: this.props.name,
      fecha_fin: fecha_inicio,
      fecha_inicio: fecha_inicio,
      solicitud: "",
      service_id: "",
    };
    this.createLeisureReq = this.createLeisureReq.bind(this);
  }

  toTimestamp(date) {
    var datum = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
    );
    return datum.getTime();
  }

  async createLeisureReq() {
    if (
      this.state.n_user === "" ||
      this.state.fecha_inicio === "" ||
      this.state.solicitud === ""
    ) {
      this.props.alert.show(
        "Rellena los campos restantes para completar la reserva.",
        { closeCopy: "Aceptar" }
      );
    } else {
      let data = {
        cliente: JSON.parse(sessionStorage.getItem("entire_client")),
        fecha_inicio: this.toTimestamp(this.state.fecha_inicio),
        fecha_fin: this.toTimestamp(this.state.fecha_inicio),
        solicitud: this.state.solicitud,
        numero_usuarios: this.state.n_user,
        service: this.props.serv
      };

      await fetch("http://localhost:8080/Concierge/rest/request/", {
        method: "PUT",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      this.props.alert.show("La reserva se ha realizado exitosamente.", {
        timeout: 0,
        closeCopy: "Aceptar",
        onClose: () => {
          window.location.href =
            "http://localhost:3000" + process.env.PUBLIC_URL + "/booking";
        },
      });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDateChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: new Date(value) });
  };

  getParrafo(){
    switch(this.props.serv.tipo.toLowerCase()){
        case "cine":
            return <p>Indique su cine y pelicula:</p>
        case "gym":
            return <p>Indique la clase a la que quiere asistir:</p>
        case "teatro":
            return <p>Indique su teatro y obra:</p>
        case "spa":
            return <p>Indique el servicio que desee:</p>
        default:
            return <p>Indique su petición:</p>
    }
  }

  render() {
    return (
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img
              src={rutaImg(this.props.imagen)}
              style={{ width: "1000px", height: "500px" }}
            />
            <div className="leisure_title">
              <h1 className="leisure_name">
                {this.props.serv.tipo.toUpperCase()}
              </h1>
            </div>
          </div>
          <div className="flip-box-back">
            <h2 className="titulo_ocio">Nueva Reserva</h2>
            <div className="formulario_reserva">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: "5px", marginTop: "10px" }}>
                  <label id="form_tipo" for="date">
                    Fecha:
                  </label>
                  <input
                    type="datetime-local"
                    id="date"
                    name="fecha_inicio"
                    onChange={this.handleDateChange}
                  />
                </div>
                <div >
                  <p style={{ marginBottom: "3px"}}>
                    Número de personas:{" "}
                    <input
                      id="form_esp1"
                      type="text"
                      name="n_user"
                      value={this.state.n_user}
                      onChange={this.handleChange}
                    />
                  </p>
                </div>
                <div>
                  {this.getParrafo()}
                </div>
                <textarea
                  id="form_esp1"
                  type="text"
                  name="solicitud"
                  value={this.state.specialreq}
                  onChange={this.handleChange}
                />
                <button id="form_submit" onClick={this.createLeisureReq}>
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAlert()(TarjetaOcio);
