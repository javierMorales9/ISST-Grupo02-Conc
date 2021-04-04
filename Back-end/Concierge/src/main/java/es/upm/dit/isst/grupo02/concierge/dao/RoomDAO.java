package es.upm.dit.isst.grupo02.concierge.dao;

import java.util.List;

import es.upm.dit.isst.grupo02.concierge.model.Room;

public interface RoomDAO {
	public Room create(Room Room);
	public Room read(int id);
	public Room update(Room Room);
	public Room delete(Room Room);
	public List<Room> readAll();
}
