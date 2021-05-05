	package es.upm.dit.isst.grupo02.concierge.dao;

import java.util.List;

import org.hibernate.Session;

import es.upm.dit.isst.grupo02.concierge.model.Request;

public class RequestDAOImplementation implements RequestDAO{

	private static RequestDAOImplementation RequestDAO;
	
	private RequestDAOImplementation() {}
	
	public static RequestDAOImplementation getInstancia() {
		if(RequestDAO == null)
			RequestDAO = new RequestDAOImplementation();
		return RequestDAO;
	}
	
	
	@Override
	public Request create(Request request) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		try {
			session.save(request);
			session.getTransaction().commit();
			session.close();
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return request;
	}

	@Override
	public Request read(int id) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		Request request = null;
		
		request = session.get(Request.class, id);
		session.getTransaction().commit();
		session.close();
							
		return request;
	}

	@Override
	public Request update(Request request) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		session.saveOrUpdate(request);
		session.getTransaction().commit();
		session.close();
		
		return request;
	}

	@Override
	public Request delete(Request request) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		session.delete(request);
		session.getTransaction().commit();
		session.close();
		
		return request;
	}

	@Override
	public List<Request> readAll() {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		List<Request> request = null;
		
		request = session.createQuery("from Request").list();
		session.getTransaction().commit();
		session.close();
	
		return request;
	}
	
	//Arreglar. 
	@Override
	public List<Request> readAll(String tipo) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		List<Request> request = null;
		String hql = "FROM Request where Request.tipo=ocio";
		request = session.createQuery(hql).list();
		session.getTransaction().commit();
		session.close();
	
		return request;
	}

}
