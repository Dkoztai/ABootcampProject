@regression
Feature: Ebay top menu bar functionality

  Scenario: Top menu bar should display tabs
    When click shop by category
    And select golf
    Then Verify golf page open
    When select UBHIB
    When click buy it now
    Then add to cart
