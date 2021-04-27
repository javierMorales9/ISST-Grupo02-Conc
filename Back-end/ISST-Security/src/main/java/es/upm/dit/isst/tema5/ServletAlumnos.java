package es.upm.dit.isst.tema5;

import java.io.IOException;

import javax.annotation.security.DeclareRoles;
import javax.servlet.ServletException;
import javax.servlet.annotation.HttpConstraint;
import javax.servlet.annotation.ServletSecurity;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/alumnos")
@DeclareRoles("alumno")
@ServletSecurity(@HttpConstraint(rolesAllowed="alumno"))

public class ServletAlumnos extends HttpServlet {
	
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		String rol = "";
		
		switch(request.getUserPrincipal().getName()) {
			case "alum":
				rol =  "alumno";
				break;
				
			case "profe":
				rol = "profesor";
				break;
				
			default : 
				rol = "alumno & profesor";
		}
		
		response.getWriter().append("Server at: /alumno \n");
		
		response.getWriter().append("Logged as: " + request.getUserPrincipal().getName() + " with rol: " + rol);
		
	}


}
