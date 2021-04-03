<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

	<c:if test="${tfg.status < 3}">
	
		<h2>Esperado aceptación del tutor</h2>
	
	</c:if>


	<c:if test="${tfg.status == 3}">
	
	  <form action="FormSubeMemoriaServlet" method="post" enctype="multipart/form-data">
	
	        <input type="hidden" name="tfgemail" value="${tfg.email}" />
	
	            <input type="file" name="file" />
	
	        <input type="submit">Subir memoria</input>
	
	  </form>
	
	</c:if>
	
	<c:if test="${tfg.status > 3}">
	
	  <form action="FormBajaMemoriaServlet" method="get">
	
	        <input type="hidden" name="tfgemail" value="${tfg.email}" />
	
	        <button type="submit">Descargar memoria</button>
	
	  </form>
	
	</c:if>

</body>
</html>