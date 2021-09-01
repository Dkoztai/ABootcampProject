package tt.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;

import tt.ebay.pageElements.EbayAddToCartResultLocators;
import tt.ebay.pageElements.EbayFilterResultLocators;
import tt.utilities.SetupDrivers;

public class EbayAddToCartResultActions {

	
	EbayAddToCartResultLocators EbayAddToCartResultLocatorsObj;
	
	public EbayAddToCartResultActions() {
		EbayAddToCartResultLocatorsObj = new EbayAddToCartResultLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayAddToCartResultLocatorsObj);
		
	}
	
	public void cd() throws InterruptedException {
		EbayAddToCartResultLocatorsObj.ub.click();
		Thread.sleep(3000);
	}
	

	public void buyin() throws InterruptedException {
		EbayAddToCartResultLocatorsObj.bitbtn.click();
		Thread.sleep(3000);
	}
	
	
	public void addtocart() throws InterruptedException {
		EbayAddToCartResultLocatorsObj.atc.click();
		Thread.sleep(3000);
	}
	
	public void gtcart() throws InterruptedException {
		EbayAddToCartResultLocatorsObj.gtc.click();
		Thread.sleep(3000);
}
}
