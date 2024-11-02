import { test, expect } from '@playwright/test';

/*test.skip('test10', async ({ page }) => {
    console.log('test10');
});*/

test.describe('Login Tests1', () => {
test('test11', async ({ page }) => {
    console.log('test11');
});

test('test12', async ({ page }) => {
    console.log('test12');
});
});

/*test.only('test13', async ({ page }) => {
    console.log('test13');
});*/


//soft assertion
test('test14', async ({ page }) => {
    const value1 = 5;
    const value2 = 10;
  
    // Soft assertion
    await expect.soft(value1).toBeGreaterThan(value2);
   
    await console.log('Executed after soft assertion');
    
});