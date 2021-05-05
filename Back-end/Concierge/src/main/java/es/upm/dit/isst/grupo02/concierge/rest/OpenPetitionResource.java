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


import es.upm.dit.isst.grupo02.concierge.dao.OpenPetitionDAOImplementation;
import es.upm.dit.isst.grupo02.concierge.model.OpenPetition;

@Path("/openPetition")
public class OpenPetitionResource {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<OpenPetition> readAll () {
	    return OpenPetitionDAOImplementation.getInstancia().readAll();
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public Response create(OpenPetition cnew) throws URISyntaxException {
		OpenPetition c = OpenPetitionDAOImplementation.getInstancia().create(cnew);
		
	    if (c != null) {
	        URI uri = new URI("/Concierge/rest/openPetition/" + c.getId());
	        return Response.created(uri).build();
	    }
	    return Response.status(Response.Status.NOT_FOUND).build();
	}
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response read(@PathParam("id") int id) {
	    OpenPetition s = OpenPetitionDAOImplementation.getInstancia().read(id);
	
	    if (s == null)
	      return Response.status(Response.Status.NOT_FOUND).build();
	
	    return Response.ok(s, MediaType.APPLICATION_JSON).build();
	 }  
	
	
	// Revisar por posibles errores en el if
	@POST 
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("{id}")
	public Response update(@PathParam("id") int id, OpenPetition s) {
	
		System.out.println("Update openPetition for" + id + " " + s.toString());
		
		OpenPetition told = OpenPetitionDAOImplementation.getInstancia().read(id);
		
		if ((told == null) || ( told.getId() != s.getId()))
		  return Response.notModified().build();
		
		OpenPetitionDAOImplementation.getInstancia().update(s);
		
		return Response.ok().build();                
	 }
	
	 @DELETE
	 @Path("{id}")
	
	 public Response delete(@PathParam("id") int id) {
	
		OpenPetition rold = OpenPetitionDAOImplementation.getInstancia().read(id);
			
		if (rold == null)	
			return Response.notModified().build();
			
		OpenPetitionDAOImplementation.getInstancia().delete(rold);
			
		return Response.ok().build();
	 }
	 
	 @GET
	 @Path("/clients/{id}")
	 @Produces(MediaType.APPLICATION_JSON)
	 public Response getClientServicies(@PathParam("id") int id) {
		List<OpenPetition> openPetitions = OpenPetitionDAOImplementation.getInstancia().readAll();
		List<OpenPetition> openPetitions_client = new ArrayList<OpenPetition>();
		for(OpenPetition s : openPetitions) {
			if(s.getCliente().getId() == id)
				openPetitions_client.add(s);
		}
		
		return Response.ok(openPetitions_client.toArray(), MediaType.APPLICATION_JSON).build();
	}  
	 
}
