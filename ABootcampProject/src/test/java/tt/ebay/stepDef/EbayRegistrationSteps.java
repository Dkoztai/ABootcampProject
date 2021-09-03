package tt.ebay.stepDef;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import tt.ebay.pageAction.EbayHomePageActions;
import tt.ebay.pageAction.EbayRegistartionResultActions;
import tt.ebay.pageAction.EbaySigninResultActions;

public class EbayRegistrationSteps {

	EbayRegistartionResultActions EbayRegistrationResultActionsObj = new EbayRegistartionResultActions();
	EbayHomePageActions EbayHomePageActionsObj = new EbayHomePageActions();
	EbaySigninResultActions EbaySigninResultActionsObj = new EbaySigninResultActions();

	@When("^click register$")
	public void click_register() throws Throwable {
		EbayHomePageActionsObj.rgstrbtn();
	}

	@When("^input valid First Name$")
	public void input_valid_First_Name() throws Throwable {
		EbayRegistrationResultActionsObj.inputFirstName();
	}

	@When("^input valid Last Name$")
	public void input_valid_Last_Name() throws Throwable {
		EbayRegistrationResultActionsObj.inputLastName();
	}

	@When("^input valid Email Registartion$")
	public void input_valid_Email_Registartion() throws Throwable {
		EbayRegistrationResultActionsObj.inputEmailR();
	}

	@When("^input valid Password Registartion$")
	public void input_valid_Password_Registartion() throws Throwable {
		EbayRegistrationResultActionsObj.inputPasswR();
	}

	@Then("^verify create account$")
	public void verify_create_account() throws Throwable {
		EbayHomePageActionsObj.verifysigninSearch();
	}
}
