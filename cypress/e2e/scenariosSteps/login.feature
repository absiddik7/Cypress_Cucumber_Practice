Feature: Login validation

Background: Before each
	Given I visit the login page

Scenario: Login with valid credentials
	When I enter valid username and password
	And clicks on the login button
	Then I see successful login message
