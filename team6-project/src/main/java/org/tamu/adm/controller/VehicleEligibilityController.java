package org.tamu.adm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.tamu.adm.dto.VehicleEligibility;
import org.tamu.adm.service.VehicleEligibilityService;

@RestController
public class VehicleEligibilityController {
	@Autowired
	private VehicleEligibilityService vehicleEligibilityService;
	
	@CrossOrigin // TODO
	@RequestMapping("vehicleEligibility")
	public VehicleEligibility getVehicleEligibility(@RequestParam(value="vin") String vin) {
		VehicleEligibility result = vehicleEligibilityService.getVehicleEligibility(vin); 
		return result;
	}
}
