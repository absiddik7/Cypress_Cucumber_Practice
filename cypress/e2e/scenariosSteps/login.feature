Feature: Login validation

	Background: Before each
		Given I visit the login page

	Scenario Outline: Login with valid credentials
		When I enter valid username "<UserName>" and password "<Password>"
		And clicks on the login button
		Then I see successful login message

		Examples:
			| UserName | Password    |
			| student  | Password123 |


	Scenario Outline: Login with invalid username
		When I enter invalid username "<UserName>" and valid password "<Password>"
		And clicks on the login button
		Then I see unsuccessful login message

		Examples:
			| UserName | Password    |
			| student1 | Password123 |

