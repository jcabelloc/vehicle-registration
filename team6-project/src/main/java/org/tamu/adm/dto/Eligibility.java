package org.tamu.adm.dto;


/**
 * @author team6
 * This Class represents the result of eligibility
 * 
 */
public class Eligibility {
	// Attributes
	private String name;
	private String driverLicense;
	private int resultCode;
	private String message;
	private String email;
	private String phone;
	private String picture;
	
	// Constructor
	public Eligibility (String name, String driverLicense, int resultCode, String message) {
		this.name = name;
		this.driverLicense = driverLicense;
		this.resultCode = resultCode;
		this.message = message;
	}
	public Eligibility (String driverLicense, int resultCode, String message) {
		this.driverLicense = driverLicense;
		this.resultCode = resultCode;
		this.message = message;
	}
	// Getters and Setters

	public String getDriverLicense() {
		return driverLicense;
	}

	public void setDriverLicense(String driverLicense) {
		this.driverLicense = driverLicense;
	}

	public int getResultCode() {
		return resultCode;
	}

	public void setResultCode(int resultCode) {
		this.resultCode = resultCode;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}
	
	
}
