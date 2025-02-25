const { test, expect } = require('@playwright/test');

test('search and add product to bag', async ({ page }) => {
  // Go to World Market homepage
  await page.goto('https://www.worldmarket.com/');

  // Search for "tables"
  await page.fill('input[aria-label="Search"]', 'tables');
  await page.press('input[aria-label="Search"]', 'Enter');

  // Wait for search results to load and click on the first product
  await page.waitForSelector('.product-title');
  await page.click('.product-title');

  // Wait for the product page to load and add the product to the bag
  await page.waitForSelector('button[data-testid="add-to-cart"]');
  await page.click('button[data-testid="add-to-cart"]');

  // Verify that the product was added to the bag
  await page.waitForSelector('.cart-item');
  const cartItemCount = await page.locator('.cart-item').count();
  expect(cartItemCount).toBeGreaterThan(0);
});

test('10', async ({ page }) => {
  // Go to World Market homepage
  await page.goto('https://www.worldmarket.com/');
});

test('9', async ({ page }) => {
  // Go to World Market homepage
  await page.goto('https://www.worldmarket.com/');
});

test('8', async ({ page }) => {
  // Go to World Market homepage
  await page.goto('https://www.worldmarket.com/');
});


test('7', async ({ page }) => {
  // Go to World Market homepage
  await page.goto('https://www.worldmarket.com/');
});


test('6', async ({ page }) => {
  // Go to World Market homepage
  await page.goto('https://www.worldmarket.com/');
});


test('5', async ({ page }) => {
  // Go to World Market homepage
  await page.goto('https://www.worldmarket.com/');
});


test('4', async ({ page }) => {
  // Go to World Market homepage
  await page.goto('https://www.worldmarket.com/');
});


test('1', async ({ page }) => {
  // Go to World Market homepage
  await page.goto('https://www.worldmarket.com/');
});


test('3', async ({ page }) => {
  // Go to World Market homepage
  await page.goto('https://www.worldmarket.com/');
});

test('2', async ({ page }) => {
  // Go to World Market homepage
  await page.goto('https://www.worldmarket.com/');
});
