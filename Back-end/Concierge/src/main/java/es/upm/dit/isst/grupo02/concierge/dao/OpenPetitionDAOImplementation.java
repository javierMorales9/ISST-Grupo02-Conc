	package es.upm.dit.isst.grupo02.concierge.dao;

import java.util.List;

import org.hibernate.Session;

import es.upm.dit.isst.grupo02.concierge.model.OpenPetition;

public class OpenPetitionDAOImplementation implements OpenPetitionDAO{

	private static OpenPetitionDAOImplementation OpenPetitionDAO;
	
	private OpenPetitionDAOImplementation() {}
	
	public static OpenPetitionDAOImplementation getInstancia() {
		if(OpenPetitionDAO == null)
			OpenPetitionDAO = new OpenPetitionDAOImplementation();
		return OpenPetitionDAO;
	}
	
	
	@Override
	public OpenPetition create(OpenPetition openPetition) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		try {
			session.save(openPetition);
			session.getTransaction().commit();
			session.close();
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return openPetition;
	}

	@Override
	public OpenPetition read(int id) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		OpenPetition openPetition = null;
		
		openPetition = session.get(OpenPetition.class, id);
		session.getTransaction().commit();
		session.close();
							
		return openPetition;
	}

	@Override
	public OpenPetition update(OpenPetition openPetition) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		session.saveOrUpdate(openPetition);
		session.getTransaction().commit();
		session.close();
		
		return openPetition;
	}

	@Override
	public OpenPetition delete(OpenPetition openPetition) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		session.delete(openPetition);
		session.getTransaction().commit();
		session.close();
		
		return openPetition;
	}

	@Override
	public List<OpenPetition> readAll() {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		List<OpenPetition> openPetition = null;
		
		openPetition = session.createQuery("from OpenPetition").list();
		session.getTransaction().commit();
		session.close();
	
		return openPetition;
	}
	
	//Arreglar. 
	@Override
	public List<OpenPetition> readAll(String tipo) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		List<OpenPetition> openPetition = null;
		String hql = "FROM OpenPetition where OpenPetition.tipo=ocio";
		openPetition = session.createQuery(hql).list();
		session.getTransaction().commit();
		session.close();
	
		return openPetition;
	}

}
