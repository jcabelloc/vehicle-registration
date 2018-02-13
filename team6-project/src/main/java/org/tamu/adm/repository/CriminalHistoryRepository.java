package org.tamu.adm.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.tamu.adm.model.CriminalHistory;

public interface CriminalHistoryRepository extends MongoRepository<CriminalHistory, String> {

    public List<CriminalHistory> findByFirstName(String firstName);
    public List<CriminalHistory> findByLastName(String lastName);
    public List<CriminalHistory> findByDriverLicense(String driverLicense);

}