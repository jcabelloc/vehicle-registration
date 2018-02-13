package org.tamu.adm;
import java.io.IOException;
import java.util.logging.FileHandler;
import java.util.logging.Handler;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


/**
 * @author team6
 * This class starts the project to run in Spring Boot and Jetty
 */
@SpringBootApplication
public class Application {
    
    public static void main(String[] args) {
    	if (System.getProperty("java.util.logging.config.class") == null
                && System.getProperty("java.util.logging.config.file") == null)
          {
             try
             {
                Logger.getLogger("org.tamu.adm").setLevel(Level.ALL);
                final int LOG_ROTATION_COUNT = 10;
                Handler handler = new FileHandler("%h/team6.log", 0, LOG_ROTATION_COUNT);
                Logger.getLogger("org.tamu.adm").addHandler(handler);
             }
             catch (IOException e)
             {
                Logger.getLogger("org.tamu.adm").log(Level.SEVERE,
                      "Can't create log file handler", e);
             }
          }
    	Logger.getLogger("org.tamu.adm").info("Starting....");
    	System.setProperty("spring.hateoas.use-hal-as-default-json-media-type", "false");//TODO
        SpringApplication.run(Application.class, args);
    }
}