package org.tamu.adm.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.tamu.adm.model.LostVehicle;

public interface LostVehicleRepository extends MongoRepository<LostVehicle, String> {
	
	public LostVehicle getByVin(String vin);
}
