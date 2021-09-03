package tt.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbayAddToCartResultLocators {


	@FindBy(xpath = "//a[@id='s0-0-18-5-11-26-77-2[1]-atcBtn']")
	public WebElement bitbtn;
	
	@FindBy(xpath = "//div[contains(text(),'Callaway C70146 300 Pro Golf Laser Rangefinder Wit')]")
	public WebElement ub;
	
	@FindBy(xpath = "//button[normalize-space()='Go to checkout']")
	public WebElement atc;

	@FindBy(xpath = "//a[@class='btn btn-scnd vi-VR-btnWdth-XL']")
	public WebElement gtc;


}

