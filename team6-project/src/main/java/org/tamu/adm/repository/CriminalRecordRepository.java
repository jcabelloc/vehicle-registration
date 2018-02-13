package org.tamu.adm.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.tamu.adm.model.CriminalRecord;

public interface CriminalRecordRepository extends MongoRepository<CriminalRecord, String> {

    public List<CriminalRecord> findByFirstName(String firstName);
    public List<CriminalRecord> findByLastName(String lastName);
    public CriminalRecord findByDriverLicense(String driverLicense);
    
}
