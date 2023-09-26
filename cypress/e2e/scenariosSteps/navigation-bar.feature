Feature: Navigation Bar
  As a user
  I want to be able to click on different nav items
  So that I can access the respective dropdown menus

  # before each test
  Background: Before Each
    Given I visit https://www.nexalinx.com/


  Scenario Outline: Clicking on navigation items opens correct URLs
    When I click on the "<NavItem>" link from the navigation bar
    Then I should be redirected to the corresponding "<URL>" URL

    Examples:
      | NavItem   | URL                                  |
      | Home      | https://www.nexalinx.com/#/home      |
      | Portfolio | https://www.nexalinx.com/#/portfolio |
      | Blog      | https://www.nexalinx.com/#/blog      |


  Scenario Outline: Clicking on Services from navigation bar opens dropdown menu
    When I click on the Services from navigation bar
    Then the dropdown menu for Services should open with the following "<Options>"

    Examples:
      | Options                                 |
      | Offshore Development Services           |
      | Full Stack Development Services         |
      | Amazon Web Services                     |
      | IT Consulting                           |
      | Software Maintenance & Support Services |
      | Software QA & Testing Services          |
      | UI/UX Design Services                   |
      | Database Management Services            |
      | Cyber Security Services                 |
      | Angular JS Development                  |
      | Node JS Development                     |
      | React JS Development                    |
      | Progressive Web App Development         |
      | Vue JS Development                      |
      | PHP Web Development                     |
      | Python Development Services             |
      | ERP Software Development                |
      | Java Development                        |


  Scenario Outline: Clicking on Technologies from navigation bar opens dropdown menu
    When I click on the Technologies from navigation bar
    Then the dropdown menu for Technologies should open with the following "<Options>"

    Examples:
      | Options     |
      | Angularjs   |
      | Magento     |
      | Reactjs     |
      | PHP         |
      | Wordpress   |
      | Python      |
      | Node.js     |
      | ASP.NET MVC |
      | Laravel     |


  Scenario Outline: Clicking on About US from navigation bar opens dropdown menu
    When I click on the About US from navigation bar
    Then the dropdown menu for About US should open with the following "<Options>"

    Examples:
      | Options  |
      | About Us |
      | Our Team |


