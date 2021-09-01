package tt.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;

import tt.ebay.pageElements.EbayHomePageLocators;
import tt.utilities.SetupDrivers;

public class EbayHomePageActions {

	EbayHomePageLocators EbayHomePageLocatorsObj;

	public EbayHomePageActions() {
		EbayHomePageLocatorsObj = new EbayHomePageLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayHomePageLocatorsObj);
	}

	public void loadEbayHomepage() {
		SetupDrivers.driver.get("https://www.ebay.com");
	}

	public void searchSignin() {
		EbayHomePageLocatorsObj.signinbtnSearch.click();
	}

		public void verifysigninSearch() {
			EbayHomePageLocatorsObj.verifysigninSearch.click();
	}

		public void rgstrbtn() {
			EbayHomePageLocatorsObj.rgstrbtnSearch.click();
		}
}