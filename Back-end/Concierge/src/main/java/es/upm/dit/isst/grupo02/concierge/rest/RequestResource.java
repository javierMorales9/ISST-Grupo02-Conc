package es.upm.dit.isst.grupo02.concierge.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


import es.upm.dit.isst.grupo02.concierge.dao.RequestDAOImplementation;
import es.upm.dit.isst.grupo02.concierge.model.Request;

@Path("/request")
public class RequestResource {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Request> readAll () {
	    return RequestDAOImplementation.getInstancia().readAll();
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public Response create(Request cnew) throws URISyntaxException {
		Request c = RequestDAOImplementation.getInstancia().create(cnew);
		System.out.println(c);
	    if (c != null) {
	        URI uri = new URI("/Concierge/rest/request/" + c.getId());
	        
	        return Response.created(uri).build();
	    }
	    return Response.status(Response.Status.NOT_FOUND).build();
	}
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response read(@PathParam("id") int id) {
	    Request s = RequestDAOImplementation.getInstancia().read(id);
	
	    if (s == null)
	      return Response.status(Response.Status.NOT_FOUND).build();
	
	    return Response.ok(s, MediaType.APPLICATION_JSON).build();
	 }  
	
	
	// Revisar por posibles errores en el if
	@POST 
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("{id}")
	public Response update(@PathParam("id") int id, Request s) {
	
		System.out.println("Update request for" + id + " " + s.toString());
		
		Request told = RequestDAOImplementation.getInstancia().read(id);
		
		if ((told == null) || ( told.getId() != s.getId()))
		  return Response.notModified().build();
		
		RequestDAOImplementation.getInstancia().update(s);
		
		return Response.ok().build();                
	 }
	
	 @DELETE
	 @Path("{id}")
	
	 public Response delete(@PathParam("id") int id) {
	
		Request rold = RequestDAOImplementation.getInstancia().read(id);
			
		if (rold == null)	
			return Response.notModified().build();
			
		RequestDAOImplementation.getInstancia().delete(rold);
			
		return Response.ok().build();
	 }
	 
	 @GET
	 @Path("/clients/{id}")
	 @Produces(MediaType.APPLICATION_JSON)
	 public Response getClientServicies(@PathParam("id") int id) {
		List<Request> requests = RequestDAOImplementation.getInstancia().readAll();
		List<Request> requests_client = new ArrayList<Request>();
		for(Request s : requests) {
			if(s.getCliente().getId() == id)
				requests_client.add(s);
		}
		
		return Response.ok(requests_client.toArray(), MediaType.APPLICATION_JSON).build();
	}  
	 
}
