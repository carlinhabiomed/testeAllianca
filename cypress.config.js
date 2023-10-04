const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://www.olx.com.br",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "retries": {
      "runMode": 2,
      "openMode": 1
    }
  },
});
