import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://www.bom.gov.au/');
  await page.getByRole('link', { name: 'Sydney Now 16.2° NW 7km/h 11° 22° Sunny.' }).click();
  await page.locator('dl').filter({ hasText: 'Summary Clear. Chance of any rain: 5%' }).getByRole('emphasis').click();
  page.close
});