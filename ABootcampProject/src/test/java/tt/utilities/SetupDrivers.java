package tt.utilities;

import java.util.Arrays;
import io.github.bonigarcia.wdm.WebDriverManager; 

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class SetupDrivers {

	public static WebDriver driver;

	public static void setupDriver() {
	//System.setProperty("webdriver.chrome.driver", "C:\\TTSoftware\\chromedriver.exe");
	 WebDriverManager.chromedriver().browserVersion("93.0.4577.63").setup();

		ChromeOptions options = new ChromeOptions();
		options.addArguments("--disable-notifications");
		options.addArguments("--start-maximized");
		options.setExperimentalOption("excludeSwitches", Arrays.asList("disable-popup-blocking"));
		driver = new ChromeDriver(options);
	driver.get("https://www.ebay.com");
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public static void tearDownDriver() {
			driver.quit();
		// TODO Auto-generated method stub
		
	}

//	public static void tearDownDriver() {
	//	driver.quit();
	}
//}
