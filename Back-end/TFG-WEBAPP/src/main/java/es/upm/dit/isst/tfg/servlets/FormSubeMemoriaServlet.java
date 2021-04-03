package es.upm.dit.isst.tfg.servlets;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.glassfish.jersey.client.ClientConfig;

@WebServlet("/FormSubeMemoriaServlet")

@MultipartConfig

public class FormSubeMemoriaServlet extends HttpServlet {

  private static final long serialVersionUID = 1L;


  @Override

  protected void doPost(HttpServletRequest req, HttpServletResponse resp)

               throws ServletException, IOException {

    // autorizacion, comprobar

    String email = req.getParameter("tfgemail");

    Client client = ClientBuilder.newClient(new ClientConfig());

    TFG tfg = null;

    try {

         tfg = client.target(URLHelper.getURL() + "/" + email)

           .request().accept(MediaType.APPLICATION_JSON).get(TFG.class);

    } catch(Exception e) {}

    // autorizacion

    if ((tfg != null) && (tfg.getStatus() == 3)) {

         Part filePart = req.getPart("file");

         InputStream fileContent = filePart.getInputStream();

         ByteArrayOutputStream output = new ByteArrayOutputStream();

         byte[] buffer = new byte[1024];

         for (int length = 0; (length = fileContent.read(buffer)) > 0;)

                 output.write(buffer, 0, length);

         tfg.setDocument(output.toByteArray());

         tfg.setStatus(4);

        client.target(URLHelper.getURL() + "/" + tfg.getEmail()).request()

                 .post(Entity.entity(tfg, MediaType.APPLICATION_JSON), Response.class);

         req.setAttribute("tfg", tfg);

     }

    getServletContext().getRequestDispatcher("/TFG.jsp").forward(req,resp);

  }

}