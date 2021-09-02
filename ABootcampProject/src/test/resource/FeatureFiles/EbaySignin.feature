@regression
Feature: Ebay Signin Functionality

  Scenario: User should be able to sign in
    Given open Ebay homepage
    When click login button
    And input valid Email
    And input valid Password
    Then Verify sign in on homepage account