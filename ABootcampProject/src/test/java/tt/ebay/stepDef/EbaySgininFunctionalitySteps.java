package tt.ebay.stepDef;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import tt.ebay.pageAction.EbayHomePageActions;
import tt.ebay.pageAction.EbaySigninResultActions;

public class EbaySgininFunctionalitySteps {

	EbayHomePageActions EbayHomePageActionsObj = new EbayHomePageActions();
	EbaySigninResultActions EbaySigninResultActionsObj = new EbaySigninResultActions();

	@Given("^open Ebay homepage$")
	public void open_Ebay_home_page() throws Throwable {
		EbayHomePageActionsObj.loadEbayHomepage();
	}

	@When("^click login button$")
	public void click_login_button() throws Throwable {
		EbayHomePageActionsObj.searchSignin();
	}

	@When("^input valid Email$")
	public void input_valid_Email() throws Throwable {
		EbaySigninResultActionsObj.inputEmail();
	}

	@When("^input valid Password$")
	public void input_valid_Password() throws Throwable {
		EbaySigninResultActionsObj.inputPassw();
	}

	@Then("^Verify sign in on homepage account$")
	public void verify_sign_in_on_homepage_account() throws Throwable {
		EbayHomePageActionsObj.verifysigninSearch();
	}

}