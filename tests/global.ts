import { chromium, FullConfig } from '@playwright/test';

const authorization = {
    username: process.env.USERNAME!,
    password: process.env.PASSWORD!,
}

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://github.com/login');
  await page.fill('input[name="user"]', authorization.username);
  await page.fill('input[name="password"]', authorization.password);
  await page.click('text=Sign in');
  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;