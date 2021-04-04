package es.upm.dit.isst.grupo02.concierge.dao;

import java.util.List;
import es.upm.dit.isst.grupo02.concierge.model.Service;

public interface ServiceDAO {
	public Service create(Service service);
	public Service read(int id);
	public Service update(Service service);
	public Service delete(Service service);
	public List<Service> readAll();
	public List<Service> readAll(String tipo);
}
