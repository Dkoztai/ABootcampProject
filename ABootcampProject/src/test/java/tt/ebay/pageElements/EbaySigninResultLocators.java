package tt.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbaySigninResultLocators {

	@FindBy(xpath = "//input[@id='userid']")
	public static WebElement signintxtbxSearch;

	@FindBy(xpath = "//button[@id='signin-continue-btn']")
	public WebElement btnsigninSearch;

	@FindBy(xpath = "//input[@id='pass']")
	public WebElement passwtxtbxSearch;

	@FindBy(xpath = "//button[@id='sgnBt']")
	public WebElement btnspasswSearch;

	@FindBy(xpath = "//input[@id='userid']")
	public static WebElement remailxtbxSearch;
}
