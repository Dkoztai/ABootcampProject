package tt.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;

import tt.ebay.pageElements.EbayFilterResultLocators;
import tt.ebay.pageElements.EbaySearchBarResultLocators;
import tt.utilities.SetupDrivers;

public class EbaySearchBarResultActions {

	EbaySearchBarResultLocators EbaySearchBarResultLocatorsObj;
	
	public EbaySearchBarResultActions() {
		EbaySearchBarResultLocatorsObj = new EbaySearchBarResultLocators();
		PageFactory.initElements(SetupDrivers.driver, EbaySearchBarResultLocatorsObj);
	}
		
		

		public void veryfiybabysrch() throws InterruptedException {
			EbaySearchBarResultLocatorsObj.veryfiybbysrch.click();
			Thread.sleep(3000);
		}
			
		public void searchbar() throws InterruptedException {
		EbaySearchBarResultLocatorsObj.srchbar.clear();
		EbaySearchBarResultLocatorsObj.srchbar.sendKeys("Baby ");
		Thread.sleep(3000);
	}
	

	public void babysrch() throws InterruptedException {
		EbaySearchBarResultLocatorsObj.bbysrch.click();
		Thread.sleep(3000);
	}
	
	
}