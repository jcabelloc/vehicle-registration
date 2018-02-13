package org.tamu.adm.model;

public class CriminalDetail {
	private String date;
	private String charge;
	private String category;
	private int levelOfOffense;
	private boolean chargesPending;
	private String description;
	public CriminalDetail(String date, String charge, String category, int levelOfOffense, boolean chargesPending,
			String description) {
		super();
		this.date = date;
		this.charge = charge;
		this.category = category;
		this.levelOfOffense = levelOfOffense;
		this.chargesPending = chargesPending;
		this.description = description;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getCharge() {
		return charge;
	}
	public void setCharge(String charge) {
		this.charge = charge;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	
}
