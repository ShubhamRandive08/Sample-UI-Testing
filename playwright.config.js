// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    browserName: 'chromium',
    headless: false, // Set to true for headless mode
    viewport: { width: 1280, height: 720 },
    baseURL: 'http://localhost:3000', // Update with your app's base URL
  },
});
