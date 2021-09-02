@regression
Feature: Ebay top menu bar functionality

  Scenario: Top menu bar should display tabs
    When enter ekko in search bar
    And click search button
    And click buy it now category
    And click buy it now
    And select UBHIB
    And add to cart
    Then go to cart
