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

@WebServlet("/FormAdminServlet")

public class FormAdminServlet extends HttpServlet{

	private static final long serialVersionUID = 1L;

	@Override
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
	
	                       throws ServletException, IOException {
	
	  // autorizacion: check root
	
	  String email = request.getParameter("email");
	
	  Client client = ClientBuilder.newClient(new ClientConfig());
	
	  TFG tfg = null;
	
	  try {
	
	         tfg = client.target(URLHelper.getURL() + "/" + email)
	
	              .request().accept(MediaType.APPLICATION_JSON).get(TFG.class);
	
	  } catch(Exception e) {}
	
	  if (tfg != null) {
	
	        tfg.setTitle(request.getParameter("title"));
	
	        tfg.setName(request.getParameter("name"));
	
	        tfg.setAdvisor(request.getParameter("advisor"));
	
	        tfg.setStatus(Integer.parseInt(request.getParameter("status")));
	
	        tfg.setMark(Double.parseDouble(request.getParameter("mark")));
	
	       client.target(URLHelper.getURL() + "/" +email)
	
	          .request()
	
	          .post(Entity.entity(tfg, MediaType.APPLICATION_JSON), Response.class);
	
	        List<TFG> tfgs = client.target(URLHelper.getURL())
	
	          .request().accept(MediaType.APPLICATION_JSON)
	
	          .get(new GenericType<List<TFG>>() {});
	
	        request.setAttribute("tfgs", tfgs);
	
	  }
	
	  getServletContext().getRequestDispatcher("/Admin.jsp").forward(request,response);
	
	}
}
