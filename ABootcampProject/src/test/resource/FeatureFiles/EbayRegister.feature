@tag1
Feature: Ebay Registartion

  @tag1
  Scenario: User should be able to create account
    When click register
    And input valid First Name
    And input valid Last Name
    And input valid Email Registartion
    And input valid Password Registartion
    Then verify create account