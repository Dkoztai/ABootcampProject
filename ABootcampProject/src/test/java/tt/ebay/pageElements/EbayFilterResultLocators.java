package tt.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbayFilterResultLocators {

	// Search BUtton
	@FindBy(xpath = "//input[@id='gh-ac']")
	public WebElement btnSearch;
	
	@FindBy(xpath = "//input[@id='gh-btn']")
	public WebElement rgstrbtnSearch;
	
	@FindBy(xpath = "//div[contains(text(),'Under $5.00')]")
	public WebElement binbtn;

	@FindBy(xpath = "//h3[contains(text(),'EKKO')]")
	public WebElement verifybinbtn;

}