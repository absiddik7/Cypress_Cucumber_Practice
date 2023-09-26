const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default 
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  "reporterOptions": {
    "reportDir": "cypress\reports\html", // Directory where reports will be generated
    "overwrite": false, // Set to true to overwrite existing reports (optional)
    "html": true, // Generate HTML report
    "json": true // Generate JSON report (optional)
  },

  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },

    specPattern: "**/*.feature",
  },
});
