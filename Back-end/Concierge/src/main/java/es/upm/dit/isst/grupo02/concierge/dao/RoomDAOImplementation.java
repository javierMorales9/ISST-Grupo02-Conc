package es.upm.dit.isst.grupo02.concierge.dao;

import java.util.List;

import org.hibernate.Session;

import es.upm.dit.isst.grupo02.concierge.model.Room;


public class RoomDAOImplementation implements RoomDAO{

	private static RoomDAOImplementation RoomDAO;
	
	private RoomDAOImplementation() {}
	
	public static RoomDAOImplementation getInstancia() {
		if(RoomDAO == null)
			RoomDAO = new RoomDAOImplementation();
		return RoomDAO;
	}
	
	
	@Override
	public Room create(Room room) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		try {
			session.save(room);
			session.getTransaction().commit();
			session.close();
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return room;
	}

	@Override
	public Room read(int id) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		Room Room = null;
		
		Room = session.get(Room.class, id);
		session.getTransaction().commit();
		session.close();
							
		return Room;
	}

	@Override
	public Room update(Room room) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		session.saveOrUpdate(room);
		session.getTransaction().commit();
		session.close();
		
		return room;
	}

	@Override
	public Room delete(Room room) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		session.delete(room);
		session.getTransaction().commit();
		session.close();
		
		return room;
	}

	@Override
	public List<Room> readAll() {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		List<Room> room = null;
		
		room = session.createQuery("from Room").list();
		session.getTransaction().commit();
		session.close();
	
		return room;
	}

}
