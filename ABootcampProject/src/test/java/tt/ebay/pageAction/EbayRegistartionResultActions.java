package tt.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;

import tt.ebay.pageElements.EbayRegistartionResultLocators;
import tt.utilities.SetupDrivers;

public class EbayRegistartionResultActions {

	EbayRegistartionResultLocators EbayRegistartionlResultLocatorsObj;
	
	public EbayRegistartionResultActions() {
		EbayRegistartionlResultLocatorsObj = new EbayRegistartionResultLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayRegistartionlResultLocatorsObj);
	}

	public void inputFirstName() throws InterruptedException {
		EbayRegistartionlResultLocatorsObj.firstnametxtbxSearch.clear();
		EbayRegistartionlResultLocatorsObj.firstnametxtbxSearch.sendKeys("Nerdy ");
		Thread.sleep(3000);
	}
	

	public void inputLastName() throws InterruptedException {
		EbayRegistartionlResultLocatorsObj.lastnametxtbxSearch.clear();
		EbayRegistartionlResultLocatorsObj.lastnametxtbxSearch.sendKeys("Tech");
		Thread.sleep(3000);
	}
	
	
	public void inputEmailR() throws InterruptedException {
		EbayRegistartionlResultLocatorsObj.remailxtbxSearch.clear();
		EbayRegistartionlResultLocatorsObj.remailxtbxSearch.sendKeys("Nerdyzzz321@gmail.com");
		Thread.sleep(3000);
	}
	public void inputPasswR() throws InterruptedException {
		EbayRegistartionlResultLocatorsObj.passwtxtbxSearch.clear();
		EbayRegistartionlResultLocatorsObj.passwtxtbxSearch.sendKeys("TalenTech1");
		EbayRegistartionlResultLocatorsObj.btnsregisterSearch.click();
	}
}
