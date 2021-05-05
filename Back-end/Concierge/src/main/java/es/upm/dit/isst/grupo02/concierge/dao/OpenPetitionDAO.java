package es.upm.dit.isst.grupo02.concierge.dao;

import java.util.List;
import es.upm.dit.isst.grupo02.concierge.model.OpenPetition;

public interface OpenPetitionDAO {
	public OpenPetition create(OpenPetition openPetition);
	public OpenPetition read(int id);
	public OpenPetition update(OpenPetition openPetition);
	public OpenPetition delete(OpenPetition openPetition);
	public List<OpenPetition> readAll();
	public List<OpenPetition> readAll(String tipo);
}
