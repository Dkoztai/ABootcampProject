package tt.ebay.pageAction;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import tt.ebay.pageElements.EbayTopMenuBarResultLocators;
import tt.utilities.SetupDrivers;

public class EbayTopMenuBarResultActions {

	EbayTopMenuBarResultLocators EbayTopMenuBarResultLocatorsObj;

	public EbayTopMenuBarResultActions() {
		EbayTopMenuBarResultLocatorsObj = new EbayTopMenuBarResultLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayTopMenuBarResultLocatorsObj);
	}

	public void hoverbtnSearch() throws InterruptedException{
		Actions actions = new Actions(SetupDrivers.driver);
		actions.moveToElement(EbayTopMenuBarResultLocatorsObj.hoverbtnSearch);
		actions.perform();
		Thread.sleep(5000);
		}
	public void electSearch() throws InterruptedException {
		EbayTopMenuBarResultLocatorsObj.electSearch.click();
		Thread.sleep(5000);

		}

	public void verifyelectSearch() throws InterruptedException {
		EbayTopMenuBarResultLocatorsObj.verifyelectSearch.click();
		Thread.sleep(5000);
	}
}

