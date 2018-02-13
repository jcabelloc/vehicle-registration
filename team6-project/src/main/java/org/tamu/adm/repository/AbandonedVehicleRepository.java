package org.tamu.adm.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.tamu.adm.model.AbandonedVehicle;

public interface AbandonedVehicleRepository extends MongoRepository<AbandonedVehicle, String> {
	public AbandonedVehicle getByVin(String vin);

}
