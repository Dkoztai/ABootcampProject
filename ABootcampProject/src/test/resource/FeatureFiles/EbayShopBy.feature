@regression
Feature: Shop by menu functionality

  Scenario: Shop by menu golf should open
    When click shop by category
    And select golf
    Then Verify golf page open