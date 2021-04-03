package es.upm.dit.isst.tfg.dao;

import java.util.List;
import org.hibernate.Session;
import es.upm.dit.isst.tfg.model.TFG;

public class TFGDAOImplementation implements TFGDAO{

	private static TFGDAOImplementation tfgDAO;
	
	private TFGDAOImplementation() {
	//TODO
	}
	
	public static TFGDAOImplementation getInstancia() {
		if(tfgDAO == null)
			tfgDAO = new TFGDAOImplementation();
		return tfgDAO;
	}
	
	//---- CRUD functions
	
	@Override
	public TFG create(TFG tfg) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		try {
			session.save(tfg);
			session.getTransaction().commit();
			session.close();
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return tfg;
	}
	
	@Override
	public TFG read(String email) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		TFG tfg = null;
		
		tfg = session.get(TFG.class, email);
		session.getTransaction().commit();
		session.close();
							
		return tfg;
	}
	
	@Override
	public TFG update(TFG tfg) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		session.saveOrUpdate(tfg);
		session.getTransaction().commit();
		session.close();
		
		return tfg;
	}
	
	@Override
	public TFG delete(TFG tfg) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		session.delete(tfg);
		session.getTransaction().commit();
		session.close();
		
		return tfg;
	}
	
	@Override
	public List<TFG> readAll() {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		List<TFG> tfgs = null;
		
		tfgs = session.createQuery("from TFG").list();
		session.getTransaction().commit();
		session.close();
	
		return tfgs;
	}
	
	@Override
	public List<TFG> readAll(String professor) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		List<TFG> tfgs = null;
		
		tfgs = session.createQuery("select name from TFG group by advisor").list();
		session.getTransaction().commit();
		session.close();
	
		return tfgs;
	}
}

