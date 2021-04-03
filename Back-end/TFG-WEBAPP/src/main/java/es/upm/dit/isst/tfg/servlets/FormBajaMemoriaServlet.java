package es.upm.dit.isst.tfg.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.core.MediaType;

import org.glassfish.jersey.client.ClientConfig;

@WebServlet("/FormBajaMemoriaServlet")

public class FormBajaMemoriaServlet extends HttpServlet{

	private static final long serialVersionUID = 1L;
	
	@Override

	protected void doGet(HttpServletRequest req, HttpServletResponse resp)

	    throws ServletException, IOException {

	  // autorizacion: any

	  String email = req.getParameter("tfgemail");

	  Client client = ClientBuilder.newClient(new ClientConfig());

	  TFG tfg = null;

	  try {   tfg=client.target(URLHelper.getURL()+"/"+ email)

	      .request().accept(MediaType.APPLICATION_JSON).get(TFG.class);

	  }catch(Exception e) {}

	  if ((tfg != null)  && (tfg.getDocument() != null)){

	    resp.setContentType("application/pdf");

	    resp.setHeader("Content-Disposition"

	          , String.format("attachment; filename=\"%s\"", "memoria.pdf"));

	    resp.setContentLength(tfg.getDocument().length);

	    resp.getOutputStream().write(tfg.getDocument());

	  }

	}
}
