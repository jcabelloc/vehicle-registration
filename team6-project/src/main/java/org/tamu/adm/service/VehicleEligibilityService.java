package org.tamu.adm.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.tamu.adm.dto.VehicleEligibility;
import org.tamu.adm.dto.VehicleRecord;
import org.tamu.adm.model.AbandonedVehicle;
import org.tamu.adm.model.LostVehicle;
import org.tamu.adm.repository.LostVehicleRepository;
import org.tamu.adm.repository.AbandonedVehicleRepository;

@Service
public class VehicleEligibilityService {
	@Autowired
	private LostVehicleRepository lostVehicleRepository;
	@Autowired
	private AbandonedVehicleRepository abandonedVehicleRepository;
	
	public VehicleEligibility getVehicleEligibility(String vin) {
		VehicleEligibility vehicleEligibility = new VehicleEligibility(vin,0,"") ; //TODO
		Set <VehicleRecord> vehicleRecords = new HashSet<>();
		LostVehicle lostVehicle =  lostVehicleRepository.getByVin(vin);
		AbandonedVehicle abandonedVehicle =  abandonedVehicleRepository.getByVin(vin);
		if (abandonedVehicle != null) {
			vehicleEligibility.setMessage("Abandoned Vehicle - Not eligible for registration");
			VehicleRecord abandonedVehicleRecord = new VehicleRecord();
			abandonedVehicleRecord.setRecordType("Abandoned");
			abandonedVehicleRecord.setVehicleMake(abandonedVehicle.getVehicleMake());
			abandonedVehicleRecord.setDateReported(abandonedVehicle.getDateReported());
			abandonedVehicleRecord.setStreetName(abandonedVehicle.getStreetName());
			abandonedVehicleRecord.setLat(abandonedVehicle.getLat());
			abandonedVehicleRecord.setLng(abandonedVehicle.getLng());
			vehicleRecords.add(abandonedVehicleRecord);
		}
		else if (lostVehicle !=null) {
			vehicleEligibility.setMessage("Lost or Stolen vehicle - Not eligible for registration");
			VehicleRecord lostVehicleRecord = new VehicleRecord();
			lostVehicleRecord.setRecordType("Lost");
			lostVehicleRecord.setVehicleMake(lostVehicle.getVehicleMake());
			lostVehicleRecord.setDateReported(lostVehicle.getDateReported());
			lostVehicleRecord.setStreetName("");
			lostVehicleRecord.setLat(lostVehicle.getLat());
			lostVehicleRecord.setLng(lostVehicle.getLng());
			vehicleRecords.add(lostVehicleRecord);
		}else {
			vehicleEligibility.setMessage("No records found - Vehicle is eligible for registration");
		}
		vehicleEligibility.setVehicleRecords(vehicleRecords);
		return vehicleEligibility;
	}
}
