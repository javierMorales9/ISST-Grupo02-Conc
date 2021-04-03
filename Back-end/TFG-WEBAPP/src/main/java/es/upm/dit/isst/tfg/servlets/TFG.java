package es.upm.dit.isst.tfg.servlets;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity(name="TFG")
public class TFG implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	private String email;
	private String password;
	private String name;
	private String title;
	private int status;
	
	@Lob
	private byte [] document;
	private double grade;
	private String advisor;
	
	//------- Getters and Setters -------
	
	public String getEmail() {
		return email;
	}	
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public byte[] getDocument() {
		return document;
	}

	public void setDocument(byte[] document) {
		this.document = document;
	}
	
	public double getMark() {
		return grade;
	}
	
	public void setMark(double grade) {
		this.grade = grade;
	}
	
	public String getAdvisor() {
		return advisor;
	}
	
	public void setAdvisor(String advisor) {
		this.advisor = advisor;
	}
}



