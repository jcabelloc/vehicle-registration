package org.tamu.adm.controller;

import java.util.Collection;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.tamu.adm.model.CriminalDetail;
import org.tamu.adm.service.EligibilityService;

@RestController
public class CriminalDetailRestController {
	@Autowired
	private EligibilityService eligibilityService;
	@CrossOrigin // TODO
	@RequestMapping("criminalDetail")
	public Collection<CriminalDetail> getCriminalDetail(@RequestParam(value="driverLicense") String driverLicense) {
		 
		return this.eligibilityService.getCriminalDetail(driverLicense); 
		
	}
	
}
