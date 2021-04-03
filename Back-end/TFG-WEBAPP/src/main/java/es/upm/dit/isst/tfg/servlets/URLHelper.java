package es.upm.dit.isst.tfg.servlets;

public class URLHelper {
	public static String getURL() {
        String envValue = System.getenv("TFGSERVICE_SRV_SERVICE_HOST");
        if(envValue == null)
                return "http://localhost:8080/TFG-SERVICE/rest/TFGs";
        else
                return envValue;

}
}
