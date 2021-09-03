package tt.ebay.stepDef;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import tt.ebay.pageAction.EbayShopByResultActions;
import tt.ebay.pageAction.EbaySigninResultActions;

public class EbayShopByFunctionality {

	EbayShopByResultActions EbayShopByResultActionsObj = new EbayShopByResultActions();

	@When("^click shop by category$")
	public void click_shop_by_category() throws Throwable {
		EbayShopByResultActionsObj.sbc();
	}

	@When("^select golf$")
	public void select_golf() throws Throwable {
		EbayShopByResultActionsObj.golfsrc();
	}

	@Then("^Verify golf page open$")
	public void verify_golf_page_open() throws Throwable {
		EbayShopByResultActionsObj.verifygolfsrc();
	}
}
