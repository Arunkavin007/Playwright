// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('record', async ({ page }) => {
await page.goto('https://www.office.com/');
await page.getByRole('button', { name: 'Sign in' }).click();
await page.getByLabel('Enter your email, phone, or').fill('demo@microsoft.com');
await page.getByRole('button', { name: 'Next' }).click();
await page.getByRole('button', { name: 'Password' }).click();
await page.getByPlaceholder('Password').fill('testsdfdf');
await page.getByRole('button', { name: 'Sign in' }).click();
});