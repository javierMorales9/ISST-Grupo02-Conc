import static org.junit.jupiter.api.Assertions.*;

import org.junit.After;
import org.junit.Before;
import org.junit.jupiter.api.Test;

import es.upm.dit.isst.grupo02.concierge.dao.ClientDAO;
import es.upm.dit.isst.grupo02.concierge.dao.ClientDAOImplementation;
import es.upm.dit.isst.grupo02.concierge.model.Client;

class ClientDAOImplementationTest {


	
	@Test
	final void test() {
		Client c1 = new Client();
		c1.setId(1);
		c1.setDNI("1");
		c1.setApellidos("Estándar");
		c1.setNombre("Cliente");
		c1.setEmail("cliente_estandar@gmail.com");
		c1.setTipo("Estándar");
		c1.setMetodo_pago("VISA");
		c1.setCoste(60);
		c1.setPrograma_fidelizacion(false);
		c1.setNumeroHabitacion(1);
		Client c2 = new Client();
		c2.setId(2);
		c2.setDNI("2");
		c2.setApellidos("Estándar");
		c2.setNombre("Cliente");
		c2.setEmail("cliente_estandar@gmail.com");
		c2.setTipo("Estándar");
		c2.setMetodo_pago("VISA");
		c2.setCoste(60);
		c2.setPrograma_fidelizacion(false);
		c2.setNumeroHabitacion(1);
		Client c3 = new Client();
		c3.setId(3);
		c3.setDNI("3");
		c3.setApellidos("Estándar");
		c3.setNombre("Cliente");
		c3.setEmail("cliente_estandar@gmail.com");
		c3.setTipo("Estándar");
		c3.setMetodo_pago("VISA");
		c3.setCoste(60);
		c3.setPrograma_fidelizacion(false);
		c3.setNumeroHabitacion(1);
		ClientDAO clientdao = ClientDAOImplementation.getInstancia();
		clientdao.create(c1);
		clientdao.create(c2);
		clientdao.create(c3);
		c3 = clientdao.read(3);
		assertEquals(c3.getCoste(), 60);
		c3.setCoste(70);
		clientdao.update(c3);
		c3 = clientdao.read(3);
		assertEquals(c3.getCoste(), 70);
		c2 = clientdao.read(2);
		clientdao.delete(c2);
		c2 = clientdao.read(2);
		assertNull(c2);
		clientdao.delete(c1);
		clientdao.delete(c3);
	}


}
