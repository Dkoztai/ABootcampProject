@regression
Feature: EbayEndToEndFunctionality

  Scenario Outline: user is able to checkout as guest
   When click shop by category
    And select golf
    When Verify golf page open
    When select UBHIB
    When click buy it now
    When add to cart
    And select continue as guest
    And fill out ship to
    And fill out "<zipcode>"
    And select state
    And click done
    And verify by "<zipcode>"
    And fill out pay with
    Then Confirm and pay

   Examples:
      |zipcode|
      |92260  |
      |11     |
      |00003  |
