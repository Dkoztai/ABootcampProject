package tt.ebay.stepDef;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import tt.ebay.pageAction.EbayHomePageActions;
import tt.ebay.pageAction.EbaySearchBarResultActions;

public class EbaySearchBarFunctionality {

	EbayHomePageActions EbayHomePageActionsObj = new EbayHomePageActions();
	EbaySearchBarResultActions EbaySearchBarResultActionsObjs = new EbaySearchBarResultActions();

	@When("^click search bar$")
	public void click_search_bar() throws Throwable {
		EbaySearchBarResultActionsObjs.searchbar();
	}

	@When("^input baby$")
	public void input_baby() throws Throwable {
		EbaySearchBarResultActionsObjs.babysrch();
	}

	@Then("^verify verify baby$")
	public void verify_verify_baby() throws Throwable {
		EbaySearchBarResultActionsObjs.veryfiybabysrch();
	}

}
