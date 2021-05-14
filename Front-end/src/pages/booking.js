import React from "react";
import TarjetaReserva from "../components/tarjeta_reserva";
import Footer from "../components/footer.js";
import "../public/booking.css";

export default class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      f: [],
      open: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(
      "http://localhost:8080/Concierge/rest/request/clients/" +
        sessionStorage.getItem("cliente")
    )
      .then((res) => res.json())
      .then((f) => {
        this.setState({ f: f });
      });

    fetch(
      "http://localhost:8080/Concierge/rest/openPetition/clients/" +
        sessionStorage.getItem("cliente")
    )
      .then((res) => res.json())
      .then((open) => {
        this.setState({ open: open });
      });  
  };


  render() {
    if (sessionStorage.getItem("login") == null) {
      window.location.href =
        "http://localhost:3000" + process.env.PUBLIC_URL + "/login";
      return <div />;
    }

    let view;
    if (this.state.f.length == 0 && this.state.open.length == 0) {
      view = (
        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            marginTop: "200px",
            marginBottom: "200px",
          }}
        >
          Actualmente no tiene ninguna reserva
        </div>
      );
    } else {
      view = <h2></h2>;
    }

    return (
      <div>
        <h1 className="subtitulo">Gestión de Reserva</h1>
        <hr className="raya_titulo" />

        {view}

        <div>
          {this.state.open.reverse().map((el, id) => {
            return (
              <TarjetaReserva
                n_habitacion={el.cliente.numeroHabitacion}
                fecha_inicio={el.fecha_inicio}
                fecha_fin={el.fecha_fin}
                nombre={el.tipo}
                precio={el.precio}
                n_user={el.numero_usuarios}
                tipo={el.solicitud}
                disponibilidad={el.disponibilidad}
                id={el.id}
                key={el.id}
                open={true}
              />
            );
          })}
          {this.state.f.reverse().map((el, id) => {
            return (
              <TarjetaReserva
                n_habitacion={el.cliente.numeroHabitacion}
                fecha_inicio={el.fecha_inicio}
                fecha_fin={el.fecha_fin}
                nombre={el.service.nombre}
                precio={el.service.precio}
                n_user={el.numero_usuarios}
                tipo={el.service.tipo}
                solicitud={el.solicitud}
                disponibilidad={el.service.disponibilidad}
                service_id={el.service.id}
                id={el.id}
                key={el.id}
              />
            );
          })}
        </div>

        <Footer />
      </div>
    );
  }
}
