package es.upm.dit.isst.grupo02.concierge.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;


@Entity(name="Request")
public class Request implements Serializable {

		private static final long serialVersionUID = 1L;
		
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private int id;
		@ManyToOne
		@JoinColumn(name = "cliente", referencedColumnName = "id")
		private Client cliente;
		@OneToOne
		@Cascade(CascadeType.SAVE_UPDATE)
		@JoinColumn(name = "service", referencedColumnName = "id")
		private Service service;
		private int numero_usuarios;
		private Date fecha_inicio;
		private Date fecha_fin;
		
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
		public Service getService() {
			return service;
		}
		public void setService(Service service) {
			this.service = service;
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
		