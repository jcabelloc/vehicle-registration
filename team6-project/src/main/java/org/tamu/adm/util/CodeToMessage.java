package org.tamu.adm.util;

import java.util.HashMap;
import java.util.Map;

public class CodeToMessage {
	
	public static final Map<Integer, String> meesage = createMap();
    private static Map<Integer, String> createMap()
    {
        Map<Integer,String> myMap = new HashMap<Integer,String>();
        myMap.put(101, "No match found - Owner is eligible for vehicle registration, proceed with next step");
        myMap.put(102, "Owner eligible for vehicle registration");
        myMap.put(103, "Needs further review");
        myMap.put(104, "Owner is not eligible for vehicle registration");
        myMap.put(200, "System Error");
        return myMap;
    }

}
