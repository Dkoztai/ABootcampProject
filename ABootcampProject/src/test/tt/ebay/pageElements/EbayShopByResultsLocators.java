package tt.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbayShopByResultsLocators {

	@FindBy(xpath = "//button[normalize-space()='Shop by category']")
	public WebElement srchbar;

	@FindBy(xpath = "//a[normalize-space()='Golf']")
	public WebElement bbysrch;

	@FindBy(xpath = "//a[normalize-space()='Golf Tech']")
	public WebElement veryfiybbysrch;
}
