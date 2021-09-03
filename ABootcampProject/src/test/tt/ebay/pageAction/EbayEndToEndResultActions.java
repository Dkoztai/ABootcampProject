package tt.ebay.pageAction;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;
import tt.ebay.pageElements.EbayAddToCartResultLocators;
import tt.ebay.pageElements.EbayEndToEndResultLocators;
import tt.utilities.SetupDrivers;

public class EbayEndToEndResultActions {

EbayEndToEndResultLocators EbayEndToEndResultLocatorsObj;
	
	public EbayEndToEndResultActions() {
		EbayEndToEndResultLocatorsObj = new EbayEndToEndResultLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayEndToEndResultLocatorsObj);
		
	}
	
	public void checkout() throws InterruptedException {
		EbayEndToEndResultLocatorsObj.gotc.click();
		Thread.sleep(3000);
	}
	
	public void guest() throws InterruptedException {
		EbayEndToEndResultLocatorsObj.cguest.click();
		Thread.sleep(3000);
	}
	
/*	public void ship() throws InterruptedException {
		EbayEndToEndResultLocatorsObj.fn.clear();
		EbayEndToEndResultLocatorsObj.fn.sendKeys("Waffel");
		EbayEndToEndResultLocatorsObj.ln.clear();
		EbayEndToEndResultLocatorsObj.ln.sendKeys("Maker");
		EbayEndToEndResultLocatorsObj.addy.clear();
		EbayEndToEndResultLocatorsObj.addy.sendKeys("9524 134st");
		EbayEndToEndResultLocatorsObj.city.clear();
		EbayEndToEndResultLocatorsObj.city.sendKeys("South Richmondhill");
		EbayEndToEndResultLocatorsObj.zip.clear();
//		EbayEndToEndResultLocatorsObj.state.click();
//		EbayEndToEndResultLocatorsObj.cali.click();
		EbayEndToEndResultLocatorsObj.zip.sendKeys("11419");
		EbayEndToEndResultLocatorsObj.email.clear();
		EbayEndToEndResultLocatorsObj.email.sendKeys("wafflemakerzz@gmail.com");
		EbayEndToEndResultLocatorsObj.conemail.clear();
		EbayEndToEndResultLocatorsObj.conemail.sendKeys("wafflemakerzz@gmail.com");
		EbayEndToEndResultLocatorsObj.numbs.clear();
		EbayEndToEndResultLocatorsObj.numbs.sendKeys("9546746511");
		EbayEndToEndResultLocatorsObj.doneship.click();
		Thread.sleep(3000);                                     */
	public void ship() throws InterruptedException {
		EbayEndToEndResultLocatorsObj.fn.clear();
		EbayEndToEndResultLocatorsObj.fn.sendKeys("Waffel");
		EbayEndToEndResultLocatorsObj.ln.clear();
		EbayEndToEndResultLocatorsObj.ln.sendKeys("Maker");
		EbayEndToEndResultLocatorsObj.addy.clear();
		EbayEndToEndResultLocatorsObj.addy.sendKeys("40152 Sagewood Dr");
		EbayEndToEndResultLocatorsObj.city.clear();
		EbayEndToEndResultLocatorsObj.city.sendKeys("Palm Dessert");
		// EbayEndToEndResultLocatorsObj.cali.click();
		EbayEndToEndResultLocatorsObj.email.clear();
		EbayEndToEndResultLocatorsObj.email.sendKeys("wafflemakerzz@gmail.com");
		EbayEndToEndResultLocatorsObj.conemail.clear();
		EbayEndToEndResultLocatorsObj.conemail.sendKeys("wafflemakerzz@gmail.com");
		EbayEndToEndResultLocatorsObj.numbs.clear();
		EbayEndToEndResultLocatorsObj.numbs.sendKeys("9546746511");
	//	EbayEndToEndResultLocatorsObj.state.click();
		Thread.sleep(3000);
		}

		WebDriver driver;

		       public void stateDropDown() {
		            System.setProperty("webdriver.chrome.driver", "C:/TTSoftware/chromedriver.exe");
		   //    		WebDriverManager.chromedriver().browserVersion("92.0.4515.159").setup();

		     
		       EbayEndToEndResultLocatorsObj.state.click();
		       EbayEndToEndResultLocatorsObj.cali.click(); 
		   //   Select stateOrProvince = new Select(driver.findElement(By.id("stateOrProvince")));
		    //  stateOrProvince.selectByValue("CA");
		      
		      
		}
		public void zipship(String zipship) throws InterruptedException {
		EbayEndToEndResultLocatorsObj.zip.clear();
		if (zipship.equals("92260")){
		EbayEndToEndResultLocatorsObj.zip.sendKeys("92260");
		}else if (zipship.equals("11")){
		EbayEndToEndResultLocatorsObj.zip.sendKeys("11");
		}else if (zipship.equals("00003")){
		EbayEndToEndResultLocatorsObj.zip.sendKeys("00003");
		}
		}
     	public void doneBtn() throws InterruptedException {
		EbayEndToEndResultLocatorsObj.doneship.click();
		Thread.sleep(3000);
		}
		public void verifyzip(String verifyzip) throws InterruptedException {
		if(verifyzip.equals("92260")){
		EbayEndToEndResultLocatorsObj.zipcheck.isDisplayed();
		}else if (verifyzip.equals("11")){
		EbayEndToEndResultLocatorsObj.shortzip.isDisplayed();
		}else if (verifyzip.equals("00003")){
		EbayEndToEndResultLocatorsObj.changezip.isDisplayed();
		}  
		Thread.sleep(6000);
		}
	
	public void pay() throws InterruptedException {
		EbayEndToEndResultLocatorsObj.paywith.click();
		Thread.sleep(6000);
		EbayEndToEndResultLocatorsObj.paywithbut.click();
		EbayEndToEndResultLocatorsObj.cardnum.clear();
		EbayEndToEndResultLocatorsObj.cardnum.sendKeys("2222400060000007");
		EbayEndToEndResultLocatorsObj.cardexp.clear();
		EbayEndToEndResultLocatorsObj.cardexp.sendKeys("0330");
		EbayEndToEndResultLocatorsObj.cardsec.clear();
		EbayEndToEndResultLocatorsObj.cardsec.sendKeys("737");
		EbayEndToEndResultLocatorsObj.carddone.click();
		Thread.sleep(3000);
	}
	
	public void conpay() throws InterruptedException {
		EbayEndToEndResultLocatorsObj.conandpay.click();
		Thread.sleep(3000);
	}
}
