import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.office.com/');
  await expect(page.getByLabel('The Microsoft 365 app (')).toContainText('The Microsoft 365 app (formerly Office) lets you create, share, and collaborate all in one place with your favorites apps now including Copilot.*');
  await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Get Microsoft' })).toBeVisible();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByLabel('Enter your email, phone, or').fill('demo@demo174.onmicrosoft.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#i0118').press('CapsLock');
  await page.getByPlaceholder('Password').fill('A');
  await page.getByPlaceholder('Password').press('CapsLock');
  await page.getByPlaceholder('Password').fill('Autogreen@12');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  
  test.setTimeout(45000);
  await expect(page.getByRole('heading', { name: 'Quick access' })).toBeVisible({ timeout: 10000 });
  await page.screenshot(
    {
      path : 'C:/Users/PR735DG/OneDrive - EY/Desktop/Playwright1/playwright/test-results/Image1.png',
     // clip:{x:0,y:0, width:500, height:500},
 
      fullPage : true
    }
  )
});