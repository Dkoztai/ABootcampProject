package tt.ebay.pageAction;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.support.PageFactory;
import java.util.List;
import java.util.ArrayList;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;


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
