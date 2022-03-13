import { chromium, FullConfig } from '@playwright/test';
require('dotenv').config();

const authorization = {
    username: process.env.USERNAME!,
    password: process.env.PASSWORD!,
}

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://github.com/login');
  await page.fill('#login_field', authorization.username);
  await page.fill('#password', authorization.password);
  await page.click('text=Sign in');
  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;