package es.upm.dit.isst.tfg.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.glassfish.jersey.client.ClientConfig;

@WebServlet("/FormProfesorServlet")

public class FormProfesorServlet extends HttpServlet{

	private static final long serialVersionUID = 1L;

	@Override
	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
	
	               throws ServletException, IOException {
	
	  // autorizacion
	
	  String email = req.getParameter("tfgemail");
	
	  Client client = ClientBuilder.newClient(new ClientConfig());
	
	  TFG tfg = null;
	
	  try { tfg = client.target(URLHelper.getURL() + "/" + email)
	
	              .request().accept(MediaType.APPLICATION_JSON).get(TFG.class);}
	
	  catch(Exception e) {}
	
	  if (tfg != null) {
	
	    // autorizacion
	
	    if (tfg.getStatus() == 1 || tfg.getStatus() == 4 || tfg.getStatus() == 6) {
	
	        tfg.setStatus(tfg.getStatus()+1);
	
	        if (req.getParameter("mark") != null) {
	
	                String m = req.getParameter("mark").replace(",", ".");
	
	                tfg.setMark(Double.parseDouble(m));
	
	        }
	
	        client.target(URLHelper.getURL()+ "/" + email).request()
	
	           .post(Entity.entity(tfg, MediaType.APPLICATION_JSON), Response.class);
	
	    }
	
	    List<TFG> tfgs = client.target(URLHelper.getURL() + "/professor/"+ tfg.getAdvisor())
	
	                                .request().accept(MediaType.APPLICATION_JSON)
	
	                              .get(new GenericType<List<TFG>>() {});
	
	    req.setAttribute("tfgs", tfgs);
	
	  }
	
	  getServletContext().getRequestDispatcher("/Profesor.jsp").forward(req,resp);
	
	}
}
