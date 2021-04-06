	package es.upm.dit.isst.grupo02.concierge.dao;

import java.util.List;

import org.hibernate.Session;

import es.upm.dit.isst.grupo02.concierge.model.Service;

public class ServiceDAOImplementation implements ServiceDAO{

	private static ServiceDAOImplementation ServiceDAO;
	
	private ServiceDAOImplementation() {}
	
	public static ServiceDAOImplementation getInstancia() {
		if(ServiceDAO == null)
			ServiceDAO = new ServiceDAOImplementation();
		return ServiceDAO;
	}
	
	
	@Override
	public Service create(Service service) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		try {
			session.save(service);
			session.getTransaction().commit();
			session.close();
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return service;
	}

	@Override
	public Service read(int id) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		Service service = null;
		
		service = session.get(Service.class, id);
		session.getTransaction().commit();
		session.close();
							
		return service;
	}

	@Override
	public Service update(Service service) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		session.saveOrUpdate(service);
		session.getTransaction().commit();
		session.close();
		
		return service;
	}

	@Override
	public Service delete(Service service) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		session.delete(service);
		session.getTransaction().commit();
		session.close();
		
		return service;
	}

	@Override
	public List<Service> readAll() {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		List<Service> service = null;
		
		service = session.createQuery("from Service").list();
		session.getTransaction().commit();
		session.close();
	
		return service;
	}
	
	//Arreglar. 
	@Override
	public List<Service> readAll(String tipo) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		List<Service> service = null;
		String hql = "FROM Service where Service.tipo=ocio";
		service = session.createQuery(hql).list();
		session.getTransaction().commit();
		session.close();
	
		return service;
	}

}
