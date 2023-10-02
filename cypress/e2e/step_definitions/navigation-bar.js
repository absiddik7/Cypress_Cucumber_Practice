import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

Given("I visit https://www.nexalinx.com/", () => {
  cy.visit("https://www.nexalinx.com/");
});

// Verify that clicking on the navigation item opens corrects URL
When("I click on the {string} link from the navigation bar", (navItem) => {
  cy.contains("a", navItem).click();
});

Then("I should be redirected to the corresponding {string} URL", (url) => {
  cy.url().should("eq", url);
});

// Verify that clicking on the navigation item "Services" opens corrects URL
When("I click on the Services from navigation bar", () => {
  cy.contains('a[id="basic-nav-dropdown"]', "Services").click();
});

Then(
  "the dropdown menu for Services should open with the following {string}",
  (options) => {
    cy.contains("a", options).should("be.visible");
  }
);

// Verify that clicking on the navigation item "Technologies" opens corrects URL
When("I click on the Technologies from navigation bar", () => {
  cy.contains('a[id="basic-nav-dropdown"]', "Technologies").click();
});

Then(
  "the dropdown menu for Technologies should open with the following {string}",
  (options) => {
    cy.contains("a", options).should("be.visible");
  }
);

// Verify that clicking on the navigation item "About Us" opens corrects URL
When("I click on the About US from navigation bar", () => {
  cy.contains('a[id="basic-nav-dropdown"]', "About US").click();
});

Then(
  "the dropdown menu for About US should open with the following {string}",
  (options) => {
    cy.contains("a", options).should("be.visible");
  }
);
