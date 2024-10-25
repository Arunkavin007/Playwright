import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.office.com/');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByLabel('Enter your email, phone, or').fill('demo.gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Email, phone, or Skype').click();
  await page.getByPlaceholder('Email, phone, or Skype').fill('demo.gmail.c');
  await page.getByPlaceholder('Email, phone, or Skype').click();
  await page.getByPlaceholder('Email, phone, or Skype').fill('demo@microsoft.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Password' }).click();
  await page.getByPlaceholder('Password').fill('scfsdfdg');
  await page.getByRole('button', { name: 'Sign in' }).click();
});