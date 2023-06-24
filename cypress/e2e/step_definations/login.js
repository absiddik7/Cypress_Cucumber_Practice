import {Given, When, Then, And, Scenario } from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given('I visit the login page', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
});

When('I enter valid username and password', () => {
    cy.get('input[name="username"').type("student")
    cy.get('input[name="password"').type("Password123")
});

And('clicks on the login button', () => {
    cy.get('button[id="submit"').click()
});

Then('I see successful login message', () => {
    cy.get('h1').should('have.text', 'Logged In Successfully')
});

