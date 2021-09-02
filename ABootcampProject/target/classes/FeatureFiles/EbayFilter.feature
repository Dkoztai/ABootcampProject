@regression
Feature: Ebay top menu bar functionality

  Scenario: Top menu bar should display tabs
    When enter ekko in search bar
    And click search button
    And click buy it now category 
    Then verify buy it now category
