import { test, expect, Page } from '@playwright/test';

test.use({ storageState: 'storageState.json' });

test.beforeEach(async ({ page }) => {
    await page.goto('https://github.com/connorwade?tab=repositories');
});

test.describe('Authentication example', async ( ) => {
    test('Check repo exists', async ({ page })=> {
        
    })
}) 