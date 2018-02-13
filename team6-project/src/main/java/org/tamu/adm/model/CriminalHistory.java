package org.tamu.adm.model;


import org.springframework.data.annotation.Id;


/**
 * @author team6
 * Entity to represent the Criminal History Collection
 */
public class CriminalHistory {
    @Id
    private String id;
    private String driverLicense;
    private String firstName;
    private String lastName;
    private String dateOfBirth;
    private String charge;
    private boolean propertyDamage;
    private boolean personalInjury;
    private int levelOfOffense;
    private boolean chargesPending;
    private String violationDescription;
    
	public CriminalHistory(String driverLicense, String firstName, String lastName, String dateOfBirth,
			String charge, boolean propertyDamage, boolean personalInjury, int levelOfOffense, boolean chargesPending,
			String violationDescription) {
		super();
		this.driverLicense = driverLicense;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.charge = charge;
		this.propertyDamage = propertyDamage;
		this.personalInjury = personalInjury;
		this.levelOfOffense = levelOfOffense;
		this.chargesPending = chargesPending;
		this.violationDescription = violationDescription;
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

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getCharge() {
		return charge;
	}

	public void setCharge(String charge) {
		this.charge = charge;
	}

	public boolean isPropertyDamage() {
		return propertyDamage;
	}

	public void setPropertyDamage(boolean propertyDamage) {
		this.propertyDamage = propertyDamage;
	}

	public boolean isPersonalInjury() {
		return personalInjury;
	}

	public void setPersonalInjury(boolean personalInjury) {
		this.personalInjury = personalInjury;
	}

	public int getLevelOfOffense() {
		return levelOfOffense;
	}

	public void setLevelOfOffense(int levelOfOffense) {
		this.levelOfOffense = levelOfOffense;
	}

	public boolean isChargesPending() {
		return chargesPending;
	}

	public void setChargesPending(boolean chargesPending) {
		this.chargesPending = chargesPending;
	}

	public String getViolationDescription() {
		return violationDescription;
	}

	public void setViolationDescription(String violationDescription) {
		this.violationDescription = violationDescription;
	}

	@Override
	public String toString() {
		return "CriminalHistory [driverLicense=" + driverLicense + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", dateOfBirth=" + dateOfBirth + ", charge=" + charge + ", propertyDamage=" + propertyDamage
				+ ", personalInjury=" + personalInjury + ", levelOfOffense=" + levelOfOffense + ", chargesPending="
				+ chargesPending + ", violationDescription=" + violationDescription + "]";
	}
	
	
}
