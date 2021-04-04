package es.upm.dit.isst.grupo02.concierge.rest;

import java.net.URI;
import java.net.URISyntaxException;
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

import es.upm.dit.isst.grupo02.concierge.dao.RoomDAOImplementation;
import es.upm.dit.isst.grupo02.concierge.model.Room;

@Path("/room")
public class RoomResource {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Room> readAll () {
	    return RoomDAOImplementation.getInstancia().readAll();
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public Response create(Room cnew) throws URISyntaxException {
		Room r = RoomDAOImplementation.getInstancia().create(cnew);
	    if (r != null) {
	        URI uri = new URI("/Concierge/rest/Room/" + r.getId());
	        return Response.created(uri).build();
	    }
	    return Response.status(Response.Status.NOT_FOUND).build();
	}
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	
	public Response read(@PathParam("id") int id) {
	    Room r = RoomDAOImplementation.getInstancia().read(id);
	
	    if (r == null)
	      return Response.status(Response.Status.NOT_FOUND).build();
	
	    return Response.ok(r, MediaType.APPLICATION_JSON).build();
	 }        
	
	// Revisar por posibles errores en el if
	@POST 
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("{id}")
	
	public Response update(@PathParam("id") int id, Room r) {
	
		System.out.println("Update request for" + id + " " + r.toString());
		
		Room told = RoomDAOImplementation.getInstancia().read(id);
		
		if ((told == null) || ( told.getId() != r.getId()))
		  return Response.notModified().build();
		
		RoomDAOImplementation.getInstancia().update(r);
		
		return Response.ok().build();                
	 }
	
	 @DELETE
	 @Path("{id}")
	
	 public Response delete(@PathParam("id") int id) {
	
		Room rold = RoomDAOImplementation.getInstancia().read(id);
			
		if (rold == null)	
			return Response.notModified().build();
			
		RoomDAOImplementation.getInstancia().delete(rold);
			
		return Response.ok().build();
	 }
}
