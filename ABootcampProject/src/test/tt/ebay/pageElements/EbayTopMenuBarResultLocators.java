package tt.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EbayTopMenuBarResultLocators {

	@FindBy(xpath = "//body/div[@id='mainContent']/div[1]/ul[1]/li[5]/a[1]")
	public WebElement hoverbtnSearch;

	@FindBy(xpath = "//a[normalize-space()='Video & PC Gaming']")
	public  WebElement electSearch;

	@FindBy(xpath = "//a[normalize-space()='PC Gaming']")
	public  WebElement verifyelectSearch;
}
