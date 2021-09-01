package tt.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbayEndToEndResultLocators {

	@FindBy(xpath = "//button[normalize-space()='Go to checkout']")
	public WebElement gotc;

	@FindBy(xpath = "//button[normalize-space()='Continue as guest']")
	public WebElement cguest;

	@FindBy(xpath = "//button[normalize-space()='Done']")
	public WebElement paywith;

	@FindBy(xpath = "//button[normalize-space()='Done']")
	public WebElement conpay;

	@FindBy(xpath = "//input[@id='city']")
	public WebElement city;
	
	//@FindBy(xpath = "//select[@id='stateOrProvince']")
	//public WebElement state;
	
	//@FindBy(xpath = "//button[normalize-space()='Done']")
	//public WebElement cali;

	@FindBy(xpath = "//input[@id='postalCode']")
	public WebElement zip;

	@FindBy(xpath = "//input[@id='firstName']")
	public WebElement fn;
	
	@FindBy(xpath = "//input[@id='lastName']")
	public WebElement ln;
	
	@FindBy(xpath = "//input[@id='addressLine1']")
	public WebElement addy;
	
	@FindBy(xpath = "//input[@id='email']")
	public WebElement email;
	
	@FindBy(xpath = "//input[@id='emailConfirm']")
	public WebElement conemail;
	
	@FindBy(xpath = "//input[@id='phoneNumber']")
	public WebElement numbs;
	
	@FindBy(xpath = "//button[contains(text(),'Done')]")
	public WebElement doneship;
	
	@FindBy(xpath = "//input[@id='cardNumber']")
	public WebElement cardnum;
	
	@FindBy(xpath = "//input[@id='cardExpiryDate']")
	public WebElement cardexp;
	
	@FindBy(xpath = "//input[@id='securityCode']")
	public WebElement cardsec;
	
	@FindBy(xpath = "//button[contains(text(),'Done')]")
	public WebElement carddone;
	
	@FindBy(xpath = "//span[normalize-space()='Confirm and pay']")
	public WebElement conandpay;

}
