package org.tamu.adm.util;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Paths;

public class FileUtil {
	
	public static void printLn(String line) {
		try {
			String outPathFile = Paths.get(System.getProperty("user.dir")+"/data/out/output.txt").toString();
			PrintWriter out = new PrintWriter(new FileWriter(outPathFile, true));
			out.println(line);
			out.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	public static void printStringBuffer(StringBuffer manyLines) {
		try {
			String outPathFile = Paths.get(System.getProperty("user.dir")+"/data/out/output.txt").toString();
			PrintWriter out = new PrintWriter(new FileWriter(outPathFile, true));
			out.println(manyLines.toString());
			out.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	public static void deleteContent() {
		try {
			String outPathFile = Paths.get(System.getProperty("user.dir")+"/data/out/output.txt").toString();
			PrintWriter out = new PrintWriter(new FileWriter(outPathFile));
			out.print("");
			out.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	

}
