const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default 
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
      this.screenshotOnRunFailure = true;
    },
    specPattern: "**/*.feature",
  },
});
