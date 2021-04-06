package es.upm.dit.isst.grupo02.concierge.rest;

import java.io.Serializable;
import java.net.URISyntaxException;
import java.util.List;

import javax.json.Json;
import javax.json.JsonObject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.MatrixParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import es.upm.dit.isst.grupo02.concierge.dao.ClientDAOImplementation;
import es.upm.dit.isst.grupo02.concierge.dao.ServiceDAOImplementation;
import es.upm.dit.isst.grupo02.concierge.model.Client;
import es.upm.dit.isst.grupo02.concierge.model.Service;

	class LoginInfo implements Serializable{
	
		private static final long serialVersionUID = 1L;
		
		public String user;
		public String password;
	}

@Path("/security")
public class SecurityResource {
	
	@POST 
	@Path("login")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response login(Client client){
		Client client_login;
		
		client_login = ClientDAOImplementation.getInstancia().checkLogin(client.getDNI(),client.getNumeroHabitacion());
		
		System.out.println(client_login);
		if(client_login == null)
			return Response.ok(false, MediaType.APPLICATION_JSON).build();  
		
		return Response.ok(client_login, MediaType.APPLICATION_JSON).build();                

	 }
}
