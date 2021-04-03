package es.upm.dit.isst.tfg.dao;
import java.util.List;
import es.upm.dit.isst.tfg.model.TFG;

public interface TFGDAO {
	public TFG create(TFG tfg);
	public TFG read(String email);
	public TFG update(TFG tfg);
	public TFG delete(TFG tfg);
	public List<TFG> readAll();
	public List<TFG> readAll(String professor);
}
