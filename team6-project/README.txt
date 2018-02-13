System Name: Vehicle Registration System

**************************************************************************
SUMMARY
**************************************************************************
The Department of Motor Vehicles (DMV) for the State of New York seeks to develop a robust system to validate the criteria to permit a legal vehicle registration at the DMV office. To determine if the owner is legally permitted to register the vehicle in question, the proposed system will vet the owner history and vehicle history by performing several checks. The proposed system will validate the owner against the criminal records database to verify if the owner is legally permitted to register a vehicle. The proposed system will check if the vehicle currently holds an existing registration by verifying it against the existing vehicle database. The proposed system will then validate the vehicle against several databases such as ‘Abandoned Vehicles’ and ‘Lost/stolen Vehicles’ to ensure that the vehicle is eligible for registration. The DMV requires a system that is capable of handling large volumes of data. The proposed system, through NoSQL, makes storing and organizing data easier, because the creators of NoSQL strived to make a database that worked with large data sets, scaled, was organized like the way people think, and could be easily read by humans.

**************************************************************************
CHANGES
**************************************************************************
version 1.0
Final Release
- Correction of different bugs
- Loading GPS locations for abandoned and lost vehicle
- Modification of UI to show properly map location where vehicle was abandoned/lost


version 0.8
- Release Candidate
- Implementation of a new aggregate model (CriminalRecord). This model justify and take advantage of the use of MongoDB
- Introduction of Login using Google Firebase
- Better security by providing access control to each UI element base on active sessions
- Introduction of Validations in all the forms. Validation of input (length, shape and nulls)
- Integration with google maps to show abandoned and stolen location on Maps
- Correction of backslash in Path reading for no-windows environments
- Introduction of logging for batch processes
- Cleaning of Dead Code (i.e. Library.java)
- Code Refactoring of REST of the services, eliminating default values
- All Angular source code (not compiled) is located in \angular\src


version 0.3
- beta release
- Implemented second use case the project where we are determining the vehicle eligibility using the vin
- Introduction of Angular Framework for the UI

version 0.2
-alpha release
-Implemented first use case of the project where we are determining the eligibility of a person using his driving License
-Implemented HTML web page which takes the driving License as the input to analyze the existing data

version 0.1
-Primary Functionality - Proof of Architecture
-Connect to Mongodb, Load the data and Retrieve the data



**************************************************************************
Run Steps - Final Release Version
**************************************************************************
--------------------------------------------
Primary Functionality - Final Release 
Date update: 12/07/2017
--------------------------------------------
THe project architecture (project-architecture.jpeg) is updated in the root path with the README.txt. 
And it outlines the entire coding framework and layers used to produce the entire project as well as the Google Firebase Integration

1.Select the Gradle tasks and run the team6-project(Run default Gradle tasks)
2.After successful completion of the tasks : Expand (Gradle Tasks ==> team6-project ==> application) in Gradle tasks.
3.Run (bootRun) in the expansion(Gradle Tasks ==> team6-project ==> application ==> bootRun) to initiate the JSpring environment.

 Note: The gradle run would stuck up at 7X%. Please initiate the step 4 as soon as the process stuck up at 7X%.

4. Go to following web page Using google chrome as the browser: 

	http://localhost:8080/
	User: mmanley@mays.tamu.edu
	Password: 123456

5. Owner vehicle registration eligibility:
   Select the Owner tab in the HTML window and input the Sample test Driving licenses in the HTML window 
   and there expected output:
   
	Driving license Number			Expected result
	a.90480477						"Owner is not eligible for vehicle registration"
	b.38828718						"Owner eligible for vehicle registration"
	c.97234530						"Needs further review"
	d.12458697						"No match found"

6. Vehicle registration Eligibility:
   Select the vehicle tab in the HTML window and input the Sample test VIN number in the HTML window 
   and there expected output:
   
   VIN Number						Expected result
   1. 5QSGI23PQJT151588				"Abandoned Vehicle - Not eligible for registration"
   2. HCRLF628BBU01J8C0				"Lost or Stolen vehicle - Not eligible for registration"
   3. PSRLF62812U01J8C				"No records found - Vehicle is eligible for registration"




**************************************************************************
Run Steps - Release Candidate Version
**************************************************************************
--------------------------------------------
Primary Functionality - Project Release Candidate
Date update: 11/23/2017
--------------------------------------------
THe project architecture (project-architecture.jpeg) is updated in the root path with the README.txt. 
And it outlines the entire coding framework and layers used to produce the entire project as well as the Google Firebase Integration

1.Select the Gradle tasks and run the team6-project(Run default Gradle tasks)
2.After successful completion of the tasks : Expand (Gradle Tasks ==> team6-project ==> application) in Gradle tasks.
3.Run (bootRun) in the expansion(Gradle Tasks ==> team6-project ==> application ==> bootRun) to initiate the JSpring environment.

 Note: The gradle run would stuck up at 7X%. Please initiate the step 4 as soon as the process stuck up at 7X%.

4. Go to following web page Using google chrome as the browser: 

	http://localhost:8080/
	User: mmanley@mays.tamu.edu
	Password: 123456

5. Owner vehicle registration eligibility:
   Select the Owner tab in the HTML window and input the Sample test Driving licenses in the HTML window 
   and there expected output:
   
	Driving license Number			Expected result
	a.90480477						"Owner is not eligible for vehicle registration"
	b.38828718						"Owner eligible for vehicle registration"
	c.97234530						"Needs further review"
	d.12458697						"No match found"

6. Vehicle registration Eligibility:
   Select the vehicle tab in the HTML window and input the Sample test VIN number in the HTML window 
   and there expected output:
   
   VIN Number						Expected result
   1. 5QSGI23PQJT151588				"Abandoned Vehicle - Not eligible for registration"
   2. HCRLF628BBU01J8C0				"Lost or Stolen vehicle - Not eligible for registration"
   3. PSRLF62812U01J8C				"No records found - Vehicle is eligible for registration"






**************************************************************************
Run Steps -- Beta Version
**************************************************************************
--------------------------------------------
Primary Functionality - Project Beta release
Date update: 11/09/2017
--------------------------------------------
THe project architecture (project-architecture.jpeg) is present in the root path with the README.txt. 
And it outlines the entire coding framework and layers used to produce the entire project.

Steps to be performed to generate the HTML report:

1.Select the Gradle tasks and run the team6-project(Run default Gradle tasks)
2.After successful completion of the tasks : Expand (Gradle Tasks ==> team6-project ==> application) in Gradle tasks.
3.Run (bootRun) in the expansion(Gradle Tasks ==> team6-project ==> application ==> bootRun) to initiate the JSpring environment.

 Note: The gradle run would stuck up at 72%. Please initiate the step 4 as soon as the process stuck up at 72%.

4. Go to following website Using google chrome as the browser: 

		http://localhost:8080/index.html
5. Owner vehicle registration eligibility:
   Select the Owner tab in the HTML window and input the Sample test Driving licenses in the HTML window 
   and there expected output:
   
	Driving license Number			Expected result
	a.90480477						"Owner is not eligible for vehicle registration"
	b.82882571						"Owner eligible for vehicle registration"
	c.97234530						"Needs further review"
	d.9999948899494					"No match found"

6. Vehicle registration Eligibility:
   Select the vehicle tab in the HTML window and input the Sample test VIN number in the HTML window 
   and there expected output:
   
   VIN Number						Expected result
   1. 5QSGI23PQJT151588				"Abandoned Vehicle - Not eligible for registration"
   2. HCRLF628BBU01J8C0				"Lost or Stolen vehicle - Not eligible for registration"
   3. PSRLF62812U01J8C				"No records found - Vehicle is eligible for registration"






--------------------------------------------
Primary Functionality - Project Alpha release
Date update: 10/26/2017
--------------------------------------------

Steps to be performed to generate the HTML report:

1.Select the Gradle tasks and run the team6-project(Run default Gradle tasks)
2.After successful completion of the tasks : Expand (Gradle Tasks ==> team6-project ==> application) in Gradle tasks.
3.Run (bootRun) in the expansion(Gradle Tasks ==> team6-project ==> application ==> bootRun) to initiate the JSpring environment.

 Note: The gradle run would stuck up at 72%. Please initiate the step 4 as soon as the process stuck up at 72%.

4. Go to following website Using google chrome as the browser: 

			http://localhost:8080/index.html
	
5: Sample test Driving licenses for the HTML window and there expected output:
	Driving license Number			Expected result
	a.90480477						"Owner is not eligible for vehicle registration"
	b.82882571						"Owner eligible for vehicle registration"
	c.97234530						"Needs further review"
	d.9999948899494					"No match found"
	

