package org.tamu.adm.model;

public class LostVehicle {
	// Attributes
	private String id;
	private String vin;
	private String vehicleMake;
	private String dateReported;
	private double lat;
	private double lng;
	
	
	// Constructor
	public LostVehicle(String vin, String vehicleMake, String dateReported) {
		this.vin = vin;
		this.vehicleMake = vehicleMake;
		this.dateReported = dateReported;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getVin() {
		return vin;
	}

	public void setVin(String vin) {
		this.vin = vin;
	}

	public String getVehicleMake() {
		return vehicleMake;
	}

	public void setVehicleMake(String vehicleMake) {
		this.vehicleMake = vehicleMake;
	}

	public String getDateReported() {
		return dateReported;
	}

	public void setDateReported(String dateReported) {
		this.dateReported = dateReported;
	}
	
	public double getLat() {
		return lat;
	}
	public void setLat(double lat) {
		this.lat = lat;
	}
	public double getLng() {
		return lng;
	}
	public void setLng(double lng) {
		this.lng = lng;
	}
	
	@Override
	public String toString() {
		return "LostVehicle [id=" + id + ", vin=" + vin + ", vehicleMake=" + vehicleMake + ", dateReported="
				+ dateReported + "]";
	}
	
	
	
	
}
