package tt.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;



public class EbayHomePageLocators {

	// Search BUtton
	@FindBy(xpath = "//input[@id='gh-btn']")
	public WebElement sfabtn;

	// Search Text Box
	@FindBy(xpath = "//input[@id='gh-ac']")
	public WebElement txtbxbtnSearch;

	@FindBy(xpath = "//span[@id='gh-ug']//a[contains(text(),'Sign in')]")
	public WebElement signinbtnSearch;

	@FindBy(xpath = "//*[contains(text(),'Hi')]")
	public WebElement verifysigninSearch;

	@FindBy(xpath = "//a[normalize-space()='register']")
	public WebElement rgstrbtnSearch;

}
