package tt.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbayAddToCartResultLocators {


	@FindBy(xpath = "//input[@aria-label='Buy It Now']")
	public WebElement bitbtn;
	
	@FindBy(xpath = "//h3[contains(text(),'HIBBERT')]")
	public WebElement ub;
	
	@FindBy(xpath = "//a[normalize-space()='Add to cart']")
	public WebElement atc;

	@FindBy(xpath = "//a[@class='btn btn-scnd vi-VR-btnWdth-XL']")
	public WebElement gtc;


}

