package tt.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;

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
	
	public void ship() throws InterruptedException {
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
		Thread.sleep(3000);
	}
	
	public void pay() throws InterruptedException {
		EbayEndToEndResultLocatorsObj.paywith.click();
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
