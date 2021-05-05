package es.upm.dit.isst.grupo02.concierge.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity(name="Service")
public class Service implements Serializable {

		private static final long serialVersionUID = 1L;
		
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private int id;
		private String tipo;
		private String solicitud;
		private double precio;
		private boolean disponibilidad;
		
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
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

}		
		
		
		