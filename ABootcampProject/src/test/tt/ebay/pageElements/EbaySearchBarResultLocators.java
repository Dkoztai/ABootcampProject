package tt.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbaySearchBarResultLocators {

	@FindBy(xpath = "//input[@id='gh-ac']")
	public WebElement srchbar;
	
	@FindBy(xpath = "//input[@id='gh-btn']")
	public WebElement bbysrch;
	
	@FindBy(xpath = "//span[normalize-space()='Baby & Toddler Outfits & Sets']")
	public WebElement veryfiybbysrch;
}
