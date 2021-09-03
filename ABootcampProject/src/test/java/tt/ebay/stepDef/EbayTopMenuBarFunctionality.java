package tt.ebay.stepDef;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import tt.ebay.pageAction.EbayHomePageActions;
import tt.ebay.pageAction.EbayTopMenuBarResultActions;

public class EbayTopMenuBarFunctionality {

	EbayTopMenuBarResultActions EbayTopMenuBarResultActionsObj = new EbayTopMenuBarResultActions();
	EbayHomePageActions EbayHomePageActionsObj = new EbayHomePageActions();

	@When("^User hovers over top menu$")
	public void user_hovers_over_top_menu() throws Throwable {
		EbayTopMenuBarResultActionsObj.hoverbtnSearch();
	}

	@When("^User selects category$")
	public void user_selects_category() throws Throwable {
		EbayTopMenuBarResultActionsObj.electSearch();
	}

	@Then("^Verify category pages open$")
	public void verify_category_pages_open() throws Throwable {
		EbayTopMenuBarResultActionsObj.verifyelectSearch();
	}

}
