Feature: Login validation

	Background: Before each
		Given I visit the login page

	Scenario: Login with valid credentials
		When I enter valid username and password
		And clicks on the login button
		Then I see successful login message

	Scenario: Login with invalid username
		When I enter invalid username and valid password
		And clicks on the login button
		Then I see unsuccessful login message

