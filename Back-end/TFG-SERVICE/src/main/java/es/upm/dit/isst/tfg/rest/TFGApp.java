package es.upm.dit.isst.tfg.rest;

import javax.ws.rs.ApplicationPath;
import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("rest")
public class TFGApp extends ResourceConfig {
    public TFGApp() {
            packages("es.upm.dit.isst.tfg.rest");
    }
}