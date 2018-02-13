package org.tamu.adm.dto;

import java.util.Set;

public class VehicleEligibility {
	
	// Attributes
	private String vin;
	private int resultCode;
	private String message;

	private Set<VehicleRecord> vehicleRecords;
	
	
	
	public VehicleEligibility(String vin, int resultCode, String message) {
		this.vin = vin;
		this.resultCode = resultCode;
		this.message = message;
	}
	// Getters and Setters
	public String getVin() {
		return vin;
	}
	public void setVin(String vin) {
		this.vin = vin;
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
	public Set<VehicleRecord> getVehicleRecords() {
		return vehicleRecords;
	}
	public void setVehicleRecords(Set<VehicleRecord> vehicleRecords) {
		this.vehicleRecords = vehicleRecords;
	} 
	
	
}
