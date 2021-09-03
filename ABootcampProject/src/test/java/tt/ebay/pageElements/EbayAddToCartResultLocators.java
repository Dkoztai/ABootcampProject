package tt.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbayAddToCartResultLocators {


	@FindBy(xpath = "//*[contains(text(),'Add to cart')]")
	public WebElement bitbtn;
	
	@FindBy(xpath = "//div[contains(text(),'Boblov LF600G Golf Laser Rangefinder')]")
	public WebElement ub;
	
	@FindBy(xpath = "//button[normalize-space()='Go to checkout']")
	public WebElement atc;

	@FindBy(xpath = "//a[@class='btn btn-scnd vi-VR-btnWdth-XL']")
	public WebElement gtc;


}

