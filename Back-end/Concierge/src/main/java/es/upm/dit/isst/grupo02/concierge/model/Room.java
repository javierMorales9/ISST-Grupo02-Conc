package es.upm.dit.isst.grupo02.concierge.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity(name="Room")
public class Room implements Serializable {

		private static final long serialVersionUID = 1L;
		
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private int id;
		private int numeroHabitacion;
		@OneToOne
		@JoinColumn(name = "cliente")
		private Client cliente;
		
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public int getNumeroHabitacion() {
			return numeroHabitacion;
		}
		public void setNumeroHabitacion(int numeroHabitacion) {
			this.numeroHabitacion = numeroHabitacion;
		}
		public Client getCliente() {
			return cliente;
		}
		public void setCliente(Client cliente) {
			this.cliente = cliente;
		}
		
		
}