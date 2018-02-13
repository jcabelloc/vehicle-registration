package org.tamu.adm.client;
import org.tamu.adm.model.CriminalHistory;
import org.tamu.adm.repository.CriminalHistoryRepository;

import java.util.List;
import org.tamu.adm.util.FileUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


/**
 * @author team6
 * This class establishes connection to MongoDB, retrieves data, and closes connection 
 * The results can be seen at data\out\output.txt
 */
@Component
public class AppClient implements CommandLineRunner {

	@Autowired
	private CriminalHistoryRepository criminalHistoryRepository;
    @Override
	public void run(String... args) throws Exception {
		
		FileUtil.deleteContent();
		// Retrieving information by using a particular Last Name
		List<CriminalHistory> criminalHistories = criminalHistoryRepository.findByLastName("Lysle");
		
		StringBuffer sbf = new StringBuffer();
		for (int i = 0; i<criminalHistories.size(); i++) {
			sbf.append(criminalHistories.get(i).toString());
			sbf.append('\n');
		}
		FileUtil.printLn("Showing result retrieved from the Database...");
		FileUtil.printStringBuffer(sbf);
	}

}
