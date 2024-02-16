import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Laptops' }).click();
  await page.getByRole('link', { name: 'Sony vaio i5' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  // Esperar 20 segundos
await page.waitForTimeout(10000);

// Luego interactúas con el elemento deseado,


  await page.waitForSelector('input[aria-label="Total:"]', { state: 'visible' });
await page.locator('input[aria-label="Total:"]').click();

  await page.getByLabel('Total:').fill('moises');
  await page.getByLabel('Country:').click();
  await page.getByLabel('Country:').fill('colombia');
  await page.getByLabel('City:').click();
  await page.getByLabel('City:').fill('bucaramanga');
  await page.getByLabel('Credit card:').click();
  await page.getByLabel('Credit card:').fill('123456');
  await page.getByLabel('Month:').click();
  await page.getByLabel('Month:').fill('01');
  await page.getByLabel('Year:').click();
  await page.getByLabel('Year:').fill('2026');
  await page.locator('div:nth-child(8)').first().click();
});