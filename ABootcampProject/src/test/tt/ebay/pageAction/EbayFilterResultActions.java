package tt.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;

import tt.ebay.pageElements.EbayFilterResultLocators;
import tt.utilities.SetupDrivers;

public class EbayFilterResultActions {

	
	EbayFilterResultLocators EbayFilterResultLocatorsObj;
	
	public EbayFilterResultActions() {
		EbayFilterResultLocatorsObj = new EbayFilterResultLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayFilterResultLocatorsObj);
		
	}
	
	public void sfa() throws InterruptedException {
		EbayFilterResultLocatorsObj.btnSearch.clear();
		EbayFilterResultLocatorsObj.btnSearch.sendKeys("Ekko ");
		Thread.sleep(3000);
	}
	

	public void searchBtn() throws InterruptedException {
		EbayFilterResultLocatorsObj.rgstrbtnSearch.click();
		Thread.sleep(3000);
	}
	
	
	public void bin() throws InterruptedException {
		EbayFilterResultLocatorsObj.binbtn.click();
		Thread.sleep(3000);
	}
	
	public void verifybin() throws InterruptedException {
		EbayFilterResultLocatorsObj.verifybinbtn.click();
		Thread.sleep(3000);
}
}