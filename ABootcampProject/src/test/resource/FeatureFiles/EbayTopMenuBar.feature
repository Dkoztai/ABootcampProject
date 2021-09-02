@regression
Feature: Ebay top menu bar functionality

  Scenario: Top menu bar should display tabs
    When User hovers over top menu
    And User selects category
    Then Verify category pages open
