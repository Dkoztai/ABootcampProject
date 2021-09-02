@regression
Feature: EbayEndToEndFunctionality

  Scenario Outline: user is able to checkout as guest
    When enter ekko in search bar
    And click search button
    And click buy it now category
    And click buy it now
    And select UBHIB
    And add to cart
    And go to cart
    And go to checkout
    And select continue as guest
    And fill out ship to
    And select state
    And fill out "<zipcode>"
    And click done
    And verify by "<zipcode>"
    And fill out pay with
    Then Confirm and pay

   Examples:
      |zipcode|
      |33076  |
      |11     |
      |00003  |
