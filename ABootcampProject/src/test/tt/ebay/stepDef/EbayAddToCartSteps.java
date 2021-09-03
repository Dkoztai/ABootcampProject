package tt.ebay.stepDef;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import tt.ebay.pageAction.EbayAddToCartResultActions;

public class EbayAddToCartSteps {
	
	EbayAddToCartResultActions  EbayAddToCartResultActionsObj = new EbayAddToCartResultActions();
	

	@When("^select UBHIB$")
	public void select_UB() throws Throwable {
		EbayAddToCartResultActionsObj.cd();
	}
	
	@When("^click buy it now$")
	public void click_but_it_now() throws Throwable {
		EbayAddToCartResultActionsObj.buyin();
	}

	@Then("^add to cart$")
	public void add_to_cart() throws Throwable {
		EbayAddToCartResultActionsObj.addtocart();
	}


}
