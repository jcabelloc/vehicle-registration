package org.tamu.adm.service;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.tamu.adm.model.CriminalDetail;
import org.tamu.adm.model.CriminalHistory;
import org.tamu.adm.model.CriminalRecord;
import org.tamu.adm.dto.Eligibility;
import org.tamu.adm.repository.CriminalHistoryRepository;
import org.tamu.adm.repository.CriminalRecordRepository;
import org.tamu.adm.util.CodeToMessage;

/**
 * @author team 6
 *
 */
//@Component
@Service
public class EligibilityService {
	@Autowired
	CriminalHistoryRepository criminalHistoryRepository;
	@Autowired
	CriminalRecordRepository criminalRecordRepository;
	
	
	
	/**
	 * @param driverLicense
	 * @return
	 */
	public Eligibility getElibility(String driverLicense) {
		
		// Assess Eligibility
		int resultCode = assessElibility(driverLicense,true);
		
		// Get message
		String message = CodeToMessage.meesage.get(resultCode);
		// Build result
		Eligibility result = new Eligibility(driverLicense, resultCode, message);
		// Get Name, email, phone, picture 
		CriminalRecord criminalRecord = criminalRecordRepository.findByDriverLicense(driverLicense);
		if (criminalRecord != null) {
			result.setName(criminalRecord.getFirstName() + " " + criminalRecord.getLastName());
			if (criminalRecord.getMiddleName() != null && criminalRecord.getMiddleName().length() > 0) result.setName(criminalRecord.getFirstName() + " " + criminalRecord.getMiddleName() + " " + criminalRecord.getLastName());
			if (criminalRecord.getEmail() != null && criminalRecord.getEmail().length() > 0) result.setEmail(criminalRecord.getEmail());
			if (criminalRecord.getPhone() != null && criminalRecord.getPhone().length() > 0) result.setPhone(criminalRecord.getPhone());
			if (criminalRecord.getPicture() != null && criminalRecord.getPicture().length() > 0) result.setPicture(criminalRecord.getPicture());
		}
		return result;
	}
	
	
	/**
	 * @param driverLicense
	 * @return a number associated to the eligibility
	 */
	private int assessElibility(String driverLicense) {
		int cumulativeOffense = 200;
		boolean flagLevelThree = false; 
		List<CriminalHistory> criminalHistories = criminalHistoryRepository.findByDriverLicense(driverLicense);
		if (criminalHistories.size()==0) {
			return 101;
		}
		else {
			for (CriminalHistory ch:criminalHistories) {
				if (ch.getLevelOfOffense() >= 4) return 104;
				if (ch.getLevelOfOffense() == 3) flagLevelThree = true;
				if (ch.getLevelOfOffense() <= 3) cumulativeOffense =+ ch.getLevelOfOffense();
			}
		}
		if (cumulativeOffense >= 20) {
			return 104;
		}
		else if (flagLevelThree){
			return 103;
		}
		else {
			return 102;
		}
	}

	/**
	 * @param driverLicense
	 * @return a number associated to the eligibility
	 */
	private int assessElibility(String driverLicense, Boolean flagCriminalRecord) {
		if (!flagCriminalRecord) return assessElibility(driverLicense);
		
		int cumulativeOffense = 200;
		boolean flagLevelThree = false; 
		CriminalRecord criminalRecord = criminalRecordRepository.findByDriverLicense(driverLicense);
		if (criminalRecord == null) {
			return 101;
		}
		else {
			for (CriminalDetail cr:criminalRecord.getCriminalDetails()) {
				if (cr.getLevelOfOffense() >= 4) return 104;
				if (cr.getLevelOfOffense() == 3) flagLevelThree = true;
				if (cr.getLevelOfOffense() <= 3) cumulativeOffense =+ cr.getLevelOfOffense();
			}
		}
		if (cumulativeOffense >= 20) {
			return 104;
		}
		else if (flagLevelThree){
			return 103;
		}
		else {
			return 102;
		}

		
	}


	public Collection<CriminalDetail> getCriminalDetail(String driverLicense) {
		CriminalRecord criminalRecord = criminalRecordRepository.findByDriverLicense(driverLicense);
		if (criminalRecord==null)return null;
		return criminalRecord.getCriminalDetails();
	}

}
