
package tt.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbayRegistartionResultLocators {
	
	@FindBy(xpath = "//a[normalize-space()='register']")
	public WebElement btnregisterSearch;
	
	@FindBy(xpath = "//input[@id='firstname']")
	public WebElement firstnametxtbxSearch;
	
	@FindBy(xpath = "//input[@id='lastname']")
	public WebElement lastnametxtbxSearch;
	
	@FindBy(xpath = "//input[@id='Email']")
	public WebElement signintxtbxSearch;
	
	
	@FindBy(xpath = "//input[@id='password']")
	public WebElement passwtxtbxSearch;
	
	@FindBy(xpath = "//button[normalize-space()='Create account']")
	public WebElement btnsregisterSearch;
	
	@FindBy(xpath ="//a[normalize-space()='register']")
	public WebElement rgstrbtnSearch;

	@FindBy(xpath ="//input[@id='Email']")
	public WebElement remailxtbxSearch;

}
