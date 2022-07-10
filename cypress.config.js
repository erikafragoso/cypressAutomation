const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://app.pipefy.com',
    retries: {
      runMode: 1,
      openMode: 0
    },
    watchForFileChanges: false
  },
});
