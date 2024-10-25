import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.office.com/');
  await expect(page.getByLabel('The Microsoft 365 app (')).toContainText('The Microsoft 365 app (formerly Office) lets you create, share, and collaborate all in one place with your favorites apps now including Copilot.*');
  await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Get Microsoft' })).toBeVisible();
  await page.getByLabel('Sign up for the free version').click();
});