package tt.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;

import tt.ebay.pageElements.EbaySearchBarResultLocators;
import tt.ebay.pageElements.EbayShopByResultsLocators;
import tt.utilities.SetupDrivers;

public class EbayShopByResultActions {

	EbayShopByResultsLocators EbayShopByResultsLocatorsObj;

	public EbayShopByResultActions() {
		EbayShopByResultsLocatorsObj = new EbayShopByResultsLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayShopByResultsLocatorsObj);
	}

	public void sbc() throws InterruptedException {
		EbayShopByResultsLocatorsObj.srchbar.click();
		Thread.sleep(3000);
	}

	public void golfsrc() throws InterruptedException {
		EbayShopByResultsLocatorsObj.bbysrch.click();
		Thread.sleep(3000);
	}

	public void verifygolfsrc() throws InterruptedException {
		EbayShopByResultsLocatorsObj.veryfiybbysrch.click();
		Thread.sleep(3000);
	}

}
