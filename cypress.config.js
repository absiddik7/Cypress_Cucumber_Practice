const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const {
  beforeRunHook,
  afterRunHook,
} = require("cypress-mochawesome-reporter/lib");
// module.exports = defineConfig({
//   reporter: "cypress-mochawesome-reporter",
//   reporterOptions: {
//     // reportDir: "cypress\reports\html", // Directory where reports will be generated
//     embeddedScreenshots: true,
//     charts: true,
//     inlineAssets: true,
//     overwrite: true, // Set to true to overwrite existing reports (optional)
//     html: false, // Generate HTML report
//     //json: true,
//     json: {
//       enabled: true,
//       formatter: "cucumber-json-formatter",
//       output: "cypress/reports/json/cucumber-report.json",
//     }, // Generate JSON report (optional)
//   },

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/results",
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: false,
    saveAllAttempts: true,
    overwrite: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      require("cypress-mochawesome-reporter/plugin")(on);
      // on("before:run", async (details) => {
      //   console.log("override before:run");
      //   await beforeRunHook(details);
      // });

      // on("after:run", async () => {
      //   console.log("override after:run");
      //   await afterRunHook();
      // });
    },

    specPattern: "**/*.feature",
  },
});
