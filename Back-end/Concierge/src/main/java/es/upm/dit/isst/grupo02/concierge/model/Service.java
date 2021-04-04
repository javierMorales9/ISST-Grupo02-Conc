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
		private String nombre;
		private String apellidos;
		private String DNI;
		private String email;
		private String contraseña;
		private String tipo;
		private String metodo_pago;
		private double coste;
		private boolean programa_fidelizacion;
		

}		
		
		
		