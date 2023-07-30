import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://www.bom.gov.au/');
  await page.getByRole('link', { name: 'Sydney Now 15.6° W 9km/h 11° 22° Sunny.' }).click();
  await page.getByRole('link', { name: 'Penrith' }).click();
});