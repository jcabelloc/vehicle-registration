package org.tamu.adm.controller;

import org.tamu.adm.model.CriminalHistory;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.tamu.adm.repository.CriminalHistoryRepository;

@RestController
public class CriminalHistoryRestController {
	@Autowired
	private CriminalHistoryRepository criminalHistoryRepository;

	@CrossOrigin // TODO
	@RequestMapping("criminalHistories")
	public Collection<CriminalHistory> getCriminalHistores(@RequestParam(value = "driverLicense") String driverLicense) {
		return this.criminalHistoryRepository.findByDriverLicense(driverLicense);
	}

}
