package org.tamu.adm.util;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.*;
import org.springframework.stereotype.*;
import org.tamu.adm.repository.AbandonedVehicleRepository;
import org.tamu.adm.repository.CriminalHistoryRepository;
import org.tamu.adm.repository.CriminalRecordRepository;
import org.tamu.adm.repository.LostVehicleRepository;
import org.tamu.adm.model.AbandonedVehicle;
import org.tamu.adm.model.Address;
import org.tamu.adm.model.CriminalDetail;
import org.tamu.adm.model.CriminalHistory;
import org.tamu.adm.model.CriminalRecord;
import org.tamu.adm.model.LostVehicle;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Scanner;
import java.util.logging.Logger;

@Component
public class DataLoader implements CommandLineRunner {
	private static final Logger logger = Logger.getLogger("org.tamu.adm");
	
	@Autowired
	private CriminalHistoryRepository criminalHistoryRepository;
	@Autowired
	private AbandonedVehicleRepository abandonedVehicleRepository;
	@Autowired
	private LostVehicleRepository lostVehicleRepository;
	@Autowired
	private CriminalRecordRepository criminalRecordRepository;
	int chunkSize = 10000;
	// random gps positions
	double[][] gps = {{40.51741874,-74.17792987},	{40.65042202,-73.91793204},	{41.72488362,-74.94961314},	{41.21045069,-72.62004653},	{40.5815536,-74.20702863},	{40.21258096,-74.05852408},	{40.57552341,-74.02127624},	{40.66994965,-73.52466344},	{40.80711376,-75.66472831},	{41.38885694,-73.92842968},	{41.91576785,-73.4690089},	{39.65596287,-74.9677137},	{41.77989229,-73.55545406},	{41.4793656,-73.07897717},	{40.44163124,-72.1398528},	{40.62505533,-72.17883021},	{40.15780106,-73.64791077},	{40.38152828,-74.02013659},	{40.52085911,-74.02142153},	{40.97916502,-72.60535443},	{42.04611422,-74.47205367},	{39.33354288,-74.2790907},	{40.60726412,-75.24566664},	{41.69709096,-73.5582988},	{40.46686834,-75.19538513},	{39.90966687,-72.68227723},	{41.44979842,-72.86045698},	{41.37540127,-74.44694592},	{40.81925439,-75.2100538},	{40.75906075,-72.80804148},	{40.47951054,-74.81982629},	{40.23630081,-74.91949876},	{41.47010014,-72.42051529},	{41.57829504,-74.44515864},	{41.28168416,-75.28681471},	{41.43020449,-75.1569685},	{40.79462937,-74.94150709},	{41.99014515,-74.42921472},	{40.95977898,-73.23561097},	{39.96443709,-73.57624824},	{41.25058639,-72.73891625},	{40.83643073,-74.73425457},	{40.74795584,-75.11024852},	{41.48543334,-74.57550603},	{40.08213783,-74.74323804},	{41.01795535,-74.30543184},	{40.49331512,-74.67104802},	{40.34416537,-74.22926765},	{41.84971707,-72.83758839},	{39.42346638,-73.59682722}};

    @Override
	public void run(String... args) throws Exception {
    	logger.info("Data load -> Initiating loading process"); //TODO
		Path inFileCrimimalHistory = Paths.get(System.getProperty("user.dir")+"/data/in/criminalHistory.txt");

		loadCriminalHistory(inFileCrimimalHistory); 
		Path inFileAbandoned = Paths.get(System.getProperty("user.dir")+"/data/in/abandonedVehicle.txt");
		loadAbandonedVehicle(inFileAbandoned);
		Path inFileLost = Paths.get(System.getProperty("user.dir")+"/data/in/lostVehicle.txt");
		loadLostVehicle(inFileLost);
		Path inFileCriminalData = Paths.get(System.getProperty("user.dir")+"/data/in/criminalData.txt");
		loadCriminalData(inFileCriminalData);
		logger.info("-----------------------------------------------------------------------");

	}
    
    private void loadCriminalHistory(Path inFilePath) throws IOException {
    	logger.info("-----------------------------------------------------------------------");
    	logger.info("Starting the loading of criminalHistory test data into the Database...");
    	List<CriminalHistory> criminalHistories = new ArrayList<CriminalHistory>();
		// Drop previous Data
    	logger.info("Droping any previous data...");
		criminalHistoryRepository.deleteAll();
		
		logger.info("Input File Location: " + inFilePath);
		Scanner inFile = new Scanner(inFilePath, "UTF-8");
		String line = inFile.nextLine();
		String[] tokens;
		int counter = 0; int total = 0;
		while (inFile.hasNextLine()) {
			counter++; total++;
			line = inFile.nextLine();
			tokens = line.split("\\|");
			CriminalHistory criminalHistory = new CriminalHistory(tokens[0],tokens[1], tokens[2], tokens[3],tokens[4],(tokens[5].equals("Yes"))?true:false,
					(tokens[6].equals("Yes"))?true:false, Integer.parseInt(tokens[7]), (tokens[8].equals("Yes"))?true:false, tokens[9]);
			criminalHistories.add(criminalHistory);
			// Massive Load
			if (counter==chunkSize) {
				criminalHistoryRepository.save(criminalHistories);
				criminalHistories.clear();
				counter = 0;
				logger.info("Registers loaded satisfactory: " + total);
			}
		}
		criminalHistoryRepository.save(criminalHistories);
		inFile.close();
		logger.info("Total Registers loaded satisfactory: " + total);
    }
    
    
    private void loadAbandonedVehicle(Path inFilePath) throws IOException {
    	logger.info("-----------------------------------------------------------------------");
    	logger.info("Starting the loading of abandonedVehicle test data into the Database...");
    	List<AbandonedVehicle> abandonedVehicles = new ArrayList<AbandonedVehicle>();
		// Drop previous Data
    	logger.info("Droping any previous data...");
		abandonedVehicleRepository.deleteAll();
		
		logger.info("Input File Location: " + inFilePath);
		Scanner inFile = new Scanner(inFilePath, "UTF-8");
		String line = inFile.nextLine();
		String[] tokens;
		int counter = 0; int total = 0;
		while (inFile.hasNextLine()) {
			counter++; total++;
			line = inFile.nextLine();
			tokens = line.split("\\|");
			AbandonedVehicle abandonedVehicle = new AbandonedVehicle(tokens[0],tokens[1], tokens[2], tokens[3]);
			int pos = (int)(Math.random()*50);
			abandonedVehicle.setLat(gps[pos][0]);
			abandonedVehicle.setLng(gps[pos][1]);
			abandonedVehicles.add(abandonedVehicle);
			// Massive Load
			if (counter==chunkSize) {
				abandonedVehicleRepository.save(abandonedVehicles);
				abandonedVehicles.clear();
				counter = 0;
				logger.info("Registers loaded satisfactory: " + total);
			}
		}
		abandonedVehicleRepository.save(abandonedVehicles);
		inFile.close();
		logger.info("Total Registers loaded satisfactory: " + total);
    }
    
    
    private void loadLostVehicle(Path inFilePath) throws IOException {
    	logger.info("-----------------------------------------------------------------------");
    	logger.info("Starting the loading of lostVehicle test data into the Database...");
    	List<LostVehicle> lostVehicles = new ArrayList<LostVehicle>();
		// Drop previous Data
    	logger.info("Droping any previous data...");
		lostVehicleRepository.deleteAll();
		
		logger.info("Input File Location: " + inFilePath);
		Scanner inFile = new Scanner(inFilePath, "UTF-8");
		String line = inFile.nextLine();
		String[] tokens;
		int counter = 0; int total = 0;
		while (inFile.hasNextLine()) {
			counter++; total++;
			line = inFile.nextLine();
			tokens = line.split("\\|");
			LostVehicle lostVehicle = new LostVehicle(tokens[0],tokens[1], tokens[2]);
			int pos = (int)(Math.random()*50);
			lostVehicle.setLat(gps[pos][0]);
			lostVehicle.setLng(gps[pos][1]);
			lostVehicles.add(lostVehicle);
			// Massive Load
			if (counter==chunkSize) {
				lostVehicleRepository.save(lostVehicles);
				lostVehicles.clear();
				counter = 0;
				logger.info("Registers loaded satisfactory: " + total);
			}
		}
		lostVehicleRepository.save(lostVehicles);
		inFile.close();
		logger.info("Total Registers loaded satisfactory: " + total);
    }
    private void loadCriminalData(Path inFilePath) throws IOException {
    	logger.info("-----------------------------------------------------------------------");
    	logger.info("Starting the loading of Criminal Data test data into the Database...");
    	List<CriminalRecord> criminalRecords = new ArrayList<CriminalRecord>();
		// Drop previous Data
    	logger.info("Droping any previous data...");
    	criminalRecordRepository.deleteAll();
		
		logger.info("Input File Location: " + inFilePath);
		Scanner inFile = new Scanner(inFilePath, "UTF-8");
		String line = inFile.nextLine();
		String[] tokens;
		String[] tokensAddresses;
		String[] tokensAddress;
		String[] tokensCriminalDetails;
		String[] tokensCriminalDetail;
		int counter = 0; int total = 0;
		while (inFile.hasNextLine()) {
			counter++; total++;
			line = inFile.nextLine();
			tokens = line.split("\\|");
			// tokens[7] -> Addresses
			tokensAddresses = tokens[7].split(",");
			List<Address> addresses = new ArrayList<Address>();
			for (String tokenAddress:tokensAddresses) {
				tokensAddress = tokenAddress.split("-");
				Address address = new Address(tokensAddress[0].replaceAll("\"",""),tokensAddress[1],tokensAddress[2].replaceAll("\"",""));
				if (tokensAddress.length == 4 && tokensAddress[3].length()!=0) address.setPostcode(tokensAddress[3].replaceAll("\"",""));
				addresses.add(address);
			}
			// tokens[10] -> Criminal Details
			tokensCriminalDetails = tokens[10].split(";");
			List<CriminalDetail> criminalDetails = new ArrayList<CriminalDetail>();
			for (String tokenCriminalDetail:tokensCriminalDetails) {
				tokensCriminalDetail = tokenCriminalDetail.split("_");
				CriminalDetail criminalDetail = new CriminalDetail(tokensCriminalDetail[0].replaceAll("\"",""),tokensCriminalDetail[1],tokensCriminalDetail[2], 
						Integer.parseInt(tokensCriminalDetail[3]), tokensCriminalDetail[4].equals("YES")?true:false,tokensCriminalDetail[5].replaceAll("\"",""));
				criminalDetails.add(criminalDetail);
			} 
			CriminalRecord criminalRecord = new CriminalRecord(
						tokens[0] /*driverLicense*/,tokens[1]/*firstName*/, tokens[2]/*lastName*/, tokens[4]/*dateOfBirth*/, 
						tokens[5]/*gender*/, addresses/*addresses*/, criminalDetails/*criminalDetails*/  );
			// tokens[3] -> Middle Name
			if (tokens[3].length()>0) criminalRecord.setMiddleName(tokens[3]);
			// tokens[6] -> email
			if (tokens[6].length()>0) criminalRecord.setEmail(tokens[6]);
			// tokens[8] -> phone
			if (tokens[8].length()>0) criminalRecord.setPhone(tokens[8]);
			// tokens[9] -> picture URL
			if (tokens[9].length()>0) criminalRecord.setPicture(tokens[9]);

			criminalRecords.add(criminalRecord);
			// Massive Load
			if (counter==chunkSize) {
				criminalRecordRepository.save(criminalRecords);
				criminalRecords.clear();
				counter = 0;
				logger.info("Registers loaded satisfactory: " + total);
			}
		}
		criminalRecordRepository.save(criminalRecords);
		inFile.close();
		logger.info("Total Registers loaded satisfactory: " + total);
    }
    
}