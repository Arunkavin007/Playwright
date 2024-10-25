import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.office.com/');
  await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();
  await page.getByRole('heading', { name: 'Welcome to Microsoft' }).click();
  await page.getByRole('button', { name: 'Sign in' }).click();
});