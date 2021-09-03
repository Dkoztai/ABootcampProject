package tt.ebay.stepDef;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import tt.ebay.pageAction.EbayFilterResultActions;
import tt.ebay.pageAction.EbayHomePageActions;

public class EbayFilterFunctionality {

	EbayFilterResultActions EbayFilterResultActionsObj = new EbayFilterResultActions();

	@When("^enter ekko in search bar$")
	public void enter_ekko_in_search_bar() throws Throwable {
		EbayFilterResultActionsObj.sfa();
		}

	@When("^click search button$")
	public void click_filter_category_button() throws Throwable {
		EbayFilterResultActionsObj.searchBtn();
	}

	@When("^click buy it now category$")
	public void click_search_button() throws Throwable {
		EbayFilterResultActionsObj.bin();
	}

	@Then("^verify buy it now category$")
	public void verify_filter_category() throws Throwable {
		EbayFilterResultActionsObj.verifybin();
	}

}
