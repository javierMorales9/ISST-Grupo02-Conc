package es.upm.dit.isst.grupo02.concierge.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;


@Entity(name="OpenPetition")
public class OpenPetition implements Serializable {

		private static final long serialVersionUID = 1L;
		
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private int id;
		@ManyToOne
		@JoinColumn(name = "cliente", referencedColumnName = "id")
		private Client cliente;
		private int numero_usuarios;
		private Date fecha_inicio;
		private Date fecha_fin;
		private String tipo;
		private String solicitud;
		private double precio;
		private boolean disponibilidad;
		
		public String getTipo() {
			return tipo;
		}
		public void setTipo(String tipo) {
			this.tipo = tipo;
		}
		public String getSolicitud() {
			return solicitud;
		}
		public void setSolicitud(String solicitud) {
			this.solicitud = solicitud;
		}
		public double getPrecio() {
			return precio;
		}
		public void setPrecio(double precio) {
			this.precio = precio;
		}
		public boolean isDisponibilidad() {
			return disponibilidad;
		}
		public void setDisponibilidad(boolean disponibilidad) {
			this.disponibilidad = disponibilidad;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public Client getCliente() {
			return cliente;
		}
		public void setCliente(Client cliente) {
			this.cliente = cliente;
		}
		public int getNumero_usuarios() {
			return numero_usuarios;
		}
		public void setNumero_usuarios(int numero_usuarios) {
			this.numero_usuarios = numero_usuarios;
		}
		public Date getFecha_inicio() {
			return fecha_inicio;
		}
		public void setFecha_inicio(Date fecha_inicio) {
			this.fecha_inicio = fecha_inicio;
		}
		public Date getFecha_fin() {
			return fecha_fin;
		}
		public void setFecha_fin(Date fecha_fin) {
			this.fecha_fin = fecha_fin;
		}

		
		
}		
		