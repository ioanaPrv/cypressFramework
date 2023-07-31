const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFilesChanges: false,
  numTestsKeptInMemory: 50,
  video: false,
  videosFolder: "cypress/videos",
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  viewPortWidth: 1418,
  viewPortHeight: 524,
  waitForAnimation: true,
  animationDistanceTreshold: 20,
  execTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  trashAssetsBeforeRuns: true,
  failOnStatusCode: false,
  'projectId': 'q3wy8g',
  "reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "cypress/reports/mocha",
            "quite": true,
            "overwrite": false,
            "html": true,
            "json": true
        }
    },
  e2e: {
    viewportHeight: 720,
    viewportWidth: 1280,
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: ['*.js', '*.md'],
    specPattern: 'cypress/integration/**/*.{jsx,ts,tsx,feature}',
  },
})
