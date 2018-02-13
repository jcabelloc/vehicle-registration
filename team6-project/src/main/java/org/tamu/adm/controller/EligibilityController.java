package org.tamu.adm.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.tamu.adm.dto.Eligibility;
import org.tamu.adm.service.EligibilityService;

@RestController
public class EligibilityController {
	
	@Autowired
	private EligibilityService eligibilityService;
	@CrossOrigin // TODO
	@RequestMapping("eligibility")
	public Eligibility getEligibility(@RequestParam(value="driverLicense") String driverLicense, HttpServletRequest request) {
		Eligibility result = eligibilityService.getElibility(driverLicense); 
		return result;
	}

}
