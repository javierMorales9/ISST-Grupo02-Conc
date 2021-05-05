package es.upm.dit.isst.grupo02.concierge.dao;

import java.util.List;
import es.upm.dit.isst.grupo02.concierge.model.Request;

public interface RequestDAO {
	public Request create(Request request);
	public Request read(int id);
	public Request update(Request request);
	public Request delete(Request request);
	public List<Request> readAll();
	public List<Request> readAll(String tipo);
}
