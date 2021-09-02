@regression
Feature: Ebay Searcbar

  @tag1
  Scenario: User should be able to search content in search bar
    When click search bar
    And input baby
    Then verify verify baby
