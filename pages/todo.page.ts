// playwright-dev-page.ts
import { expect, Locator, Page } from '@playwright/test';

class TodoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc');
  }

  async addItem(item:string) {
    // Create 1st todo.
  await this.page.locator('.new-todo').fill(item);
  await this.page.locator('.new-todo').press('Enter');

  // Make sure the list only has one todo item.
  await expect(this.page.locator('.view label')).toHaveText([
    item
  ]);
  }
}

export default TodoPage