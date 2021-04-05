package es.upm.dit.isst.grupo02.concierge.rest;

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


@Path("/security")
public class SecurityResource {
	
	@POST 
	@Path("login")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response login(Client client){
		
		System.out.println(client);
		
		boolean login = ClientDAOImplementation.getInstancia().checkLogin(client.getDNI(),client.getPassword());
		System.out.println(login);
		
		JsonObject json = Json.createObjectBuilder().add("login",login).build();

		
		return Response.ok(login, MediaType.APPLICATION_JSON).build();                
	 }
}
