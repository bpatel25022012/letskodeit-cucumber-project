@SignUp
Feature: signUp functionality
  As a User I want to sign up into letskodeit website

  Scenario: User should navigate to sign up page successfully
    Given I am on letskodeit homepage
    When I click on signup link
    Then I should navigate to signup page successfully

  Scenario: User should signup successfully with valid credentials
    Given I am on letskodeit homepage
    When I click on signup link
    And I enter fullname "Bhavesh Patel"
    And I enter email "xyz123@gmail.com"
    And I enter password "Tiger0604"
    And I enter conform password "Tiger0604"
    And I click on Privacy policy button
    And I click on signup button

