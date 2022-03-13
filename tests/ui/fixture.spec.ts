// example.spec.ts
import { test as base } from '@playwright/test';
import { TodoPage } from '../../pages';

// Extend basic test by providing a "todoPage" fixture.
const test = base.extend<{ todoPage: TodoPage }>({
  todoPage: async ({ page }, use) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    // await todoPage.addToDo('item1');
    // await todoPage.addToDo('item2');
    await use(todoPage);
    // await todoPage.removeAll();
  },
});

test('should add an item', async ({ todoPage }) => {
  todoPage.addItem('buy some cheese')
});