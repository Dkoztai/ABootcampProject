package tt.ebay.stepDef;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import tt.ebay.pageAction.EbayEndToEndResultActions;
import tt.ebay.pageAction.EbayFilterResultActions;

public class EbayEndToEndFunctionality {

	EbayEndToEndResultActions EbayEndToEndResultActionsObj = new EbayEndToEndResultActions();

	/*
	 * @When("^go to checkout$") public void go_to_checkout() throws Throwable {
	 * EbayEndToEndResultActionsObj.checkout(); }
	 * 
	 * @When("^select continue as guest$") public void
	 * select_continue_as_guest() throws Throwable {
	 * EbayEndToEndResultActionsObj.guest(); }
	 * 
	 * @When("^fill out ship to$") public void fill_out_ship_tp() throws
	 * Throwable { EbayEndToEndResultActionsObj.ship(); }
	 * 
	 * @When("^fill out pay with$") public void fill_out_pay_with() throws
	 * Throwable { EbayEndToEndResultActionsObj.pay(); }
	 * 
	 * @Then("^Confirm and pay$") public void confirm_and_pay() throws Throwable
	 * { EbayEndToEndResultActionsObj.conpay(); } }
	 */

	@When("^go to checkout$")
	public void go_to_checkout() throws Throwable {
		EbayEndToEndResultActionsObj.checkout();
	}

	@When("^select continue as guest$")
	public void select_continue_as_guest() throws Throwable {
		EbayEndToEndResultActionsObj.guest();
	}

	@When("^fill out ship to$")
	public void fill_out_ship_to() throws Throwable {
		EbayEndToEndResultActionsObj.ship();
	}

	@When("^select state$")
	public void select_state() throws Throwable {
		EbayEndToEndResultActionsObj.stateDropDown();
	}

	@When("^fill out \"([^\"]*)\"$")
	public void fill_out(String zipship) throws Throwable {
		System.out.println("Type in zipcode");
		EbayEndToEndResultActionsObj.zipship(zipship);
	}

	@When("^click done$")
	public void click_done() throws Throwable {
		EbayEndToEndResultActionsObj.doneBtn();
	}

	@When("^verify by \"([^\"]*)\"$")
	public void verify_by(String verifyzip) throws Throwable {
		System.out.println("verify with results by zipcode");
		EbayEndToEndResultActionsObj.verifyzip(verifyzip);
	}

	@When("^fill out pay with$")
	public void fill_out_pay_with() throws Throwable {
		EbayEndToEndResultActionsObj.pay();

	}

	@Then("^Confirm and pay$")
	public void confirm_and_pay() throws Throwable {
		EbayEndToEndResultActionsObj.conpay();
	}
}
