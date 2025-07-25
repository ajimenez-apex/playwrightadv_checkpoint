import { test, expect, chromium } from '@playwright/test';

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

test('check page content', async ({ page }) => {

  const browser = await chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://playwright.dev/');

  // Check if the main content is visible.
  await expect(page.getByRole('main')).toBeVisible();

  // Check if the footer is visible.
  await expect(page.getByRole('contentinfo')).toBeVisible();
});