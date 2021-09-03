package tt.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;

import tt.ebay.pageElements.EbaySigninResultLocators;
import tt.utilities.SetupDrivers;

public class EbaySigninResultActions {

	EbaySigninResultLocators EbaySigninResultLocatorsObj;

	public EbaySigninResultActions() {
		EbaySigninResultLocatorsObj = new EbaySigninResultLocators();
		PageFactory.initElements(SetupDrivers.driver, EbaySigninResultLocatorsObj);

	}

	public void inputEmail() throws InterruptedException {
		EbaySigninResultLocators.signintxtbxSearch.clear();
		EbaySigninResultLocators.signintxtbxSearch.sendKeys("jarjarbinxz321@gmail.com");
		EbaySigninResultLocatorsObj.btnsigninSearch.click();
		Thread.sleep(3000);
	}
	
	public void inputPassw() {
		EbaySigninResultLocatorsObj.passwtxtbxSearch.clear();
		EbaySigninResultLocatorsObj.passwtxtbxSearch.sendKeys("TalenTech1");
		EbaySigninResultLocatorsObj.btnspasswSearch.click();
	}

}
