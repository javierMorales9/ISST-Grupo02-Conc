package es.upm.dit.isst.grupo02.concierge.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="Client")
public class Client implements Serializable {

		private static final long serialVersionUID = 1L;
		
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private int id;
		private String nombre;
		private String apellidos;
		private String DNI;
		private int numeroHabitacion;
		private String email;
		private String tipo;
		private String metodo_pago;
		private double coste;
		private boolean programa_fidelizacion;
		
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getNombre() {
			return nombre;
		}
		public void setNombre(String nombre) {
			this.nombre = nombre;
		}
		public String getApellidos() {
			return apellidos;
		}
		public void setApellidos(String apellidos) {
			this.apellidos = apellidos;
		}
		public String getDNI() {
			return DNI;
		}
		public void setDNI(String dNI) {
			DNI = dNI;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getTipo() {
			return tipo;
		}
		public void setTipo(String tipo) {
			this.tipo = tipo;
		}
		public String getMetodo_pago() {
			return metodo_pago;
		}
		public void setMetodo_pago(String metodo_pago) {
			this.metodo_pago = metodo_pago;
		}
		public double getCoste() {
			return coste;
		}
		public void setCoste(double coste) {
			this.coste = coste;
		}
		public boolean isPrograma_fidelizacion() {
			return programa_fidelizacion;
		}
		public void setPrograma_fidelizacion(boolean programa_fidelizacion) {
			this.programa_fidelizacion = programa_fidelizacion;
		}
		public int getNumeroHabitacion() {
			return numeroHabitacion;
		}
		public void setNumeroHabitacion(int numeroHabitacion) {
			this.numeroHabitacion = numeroHabitacion;
		}		

}
