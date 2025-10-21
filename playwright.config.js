// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({
  testDir: './tests',
   timeout :4081000,
  expect:{
  timeout:40*1000,
  },
  reporter:'html',
  use: {
browserName:'chromium',
    headless: false,
    trace: 'on-first-retry',
    screenshot:'on',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  },

});
module.exports=config;

