package es.upm.dit.isst.tfg.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import es.upm.dit.isst.tfg.dao.TFGDAOImplementation;
import es.upm.dit.isst.tfg.model.TFG;

@Path("/TFGs")
public class TFGResource {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<TFG> readAll () {
	    return TFGDAOImplementation.getInstancia().readAll();
	}
	
	@GET
	@Path("professor/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<TFG> readAll (@PathParam("id") String id) {
	    return TFGDAOImplementation.getInstancia().readAll(id);
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response create(TFG tnew) throws URISyntaxException {
		TFG t = TFGDAOImplementation.getInstancia().create(tnew);
	    if (t != null) {
	        URI uri = new URI("/TFG-SERVICE/rest/TFGs/" + t.getEmail());
	        return Response.created(uri).build();
	    }
	    return Response.status(Response.Status.NOT_FOUND).build();
	}
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	
	public Response read(@PathParam("id") String id) {
	    TFG t = TFGDAOImplementation.getInstancia().read(id);
	
	    if (t == null)
	      return Response.status(Response.Status.NOT_FOUND).build();
	
	    return Response.ok(t, MediaType.APPLICATION_JSON).build();
	 }        
	
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("{id}")
	
	public Response update(@PathParam("id") String id, TFG t) {
	
		System.out.println("Update request for" + id + " " + t.toString());
		
		TFG told = TFGDAOImplementation.getInstancia().read(id);
		
		if ((told == null) || (! told.getEmail().contentEquals(t.getEmail())))
		  return Response.notModified().build();
		
		TFGDAOImplementation.getInstancia().update(t);
		
		return Response.ok().build();                
	 }
	
	 @DELETE
	 @Path("{id}")
	
	 public Response delete(@PathParam("id") String  id) {
	
		TFG rold = TFGDAOImplementation.getInstancia().read(id);
			
		if (rold == null)	
			return Response.notModified().build();
			
		TFGDAOImplementation.getInstancia().delete(rold);
			
		return Response.ok().build();
	 }
}
