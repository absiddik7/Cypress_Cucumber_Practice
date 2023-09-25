const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default 
module.exports = defineConfig({
  video: true,
  "reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "configFile": "reporter-config.json"
    },
    "videoCompression": 15,
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "**/*.feature",
  },
});
