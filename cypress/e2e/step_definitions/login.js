import {
  Given,
  When,
  Then,
  And,
  Scenario,
} from "cypress-cucumber-preprocessor/steps";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

Given("I visit the login page", () => {
  cy.visit("https://practicetestautomation.com/practice-test-login/");
});

// Validate login with valid credentials
When(
  "I enter valid username {string} and password {string}",
  (username, password) => {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
  }
);

And("clicks on the login button", () => {
  cy.get('button[id="submit"]').click();
});

Then("I see successful login message", () => {
  cy.get("h1").should("have.text", "Logged In Successfully");
});

// Validate login with invalid credentials
When(
  "I enter invalid username {string} and valid password {string}",
  (username, password) => {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
  }
);

And("clicks on the login button", () => {
  cy.get('button[id="submit"]').click();
});

Then("I see unsuccessful login message", () => {
  cy.get('div[id = "error"]').should("have.text", "Your username is invalid!");
});
