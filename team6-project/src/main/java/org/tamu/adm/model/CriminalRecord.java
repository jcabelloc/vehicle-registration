package org.tamu.adm.model;

import java.util.List;

import org.springframework.data.annotation.Id;

public class CriminalRecord {
    @Id
    private String id;
    private String driverLicense;
    private String firstName;
    private String lastName;
    private String middleName;
    private String dateOfBirth;
    private String gender;
    private String email;
    private List<Address> addresses;
    private String phone;
    private String picture;
    private List<CriminalDetail> criminalDetails;
	public CriminalRecord(String driverLicense, String firstName, String lastName, String dateOfBirth, String gender,
			List<Address> addresses, List<CriminalDetail> criminalDetails) {
		super();
		this.driverLicense = driverLicense;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.addresses = addresses;
		this.criminalDetails = criminalDetails;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getDriverLicense() {
		return driverLicense;
	}
	public void setDriverLicense(String driverLicense) {
		this.driverLicense = driverLicense;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getMiddleName() {
		return middleName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	public String getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public List<Address> getAddresses() {
		return addresses;
	}
	public void setAddresses(List<Address> addresses) {
		this.addresses = addresses;
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
	public List<CriminalDetail> getCriminalDetails() {
		return criminalDetails;
	}
	public void setCriminalDetails(List<CriminalDetail> criminalDetails) {
		this.criminalDetails = criminalDetails;
	}
    
    
}
