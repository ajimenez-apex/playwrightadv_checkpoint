import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/');
  await page.getByRole('img', { name: 'menu' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('admin@email.com');
  await page.getByRole('textbox', { name: 'Enter Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('admin@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'manage category Manage' }).click();
  const page1 = await page1Promise;
  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page1.getByRole('button', { name: 'Add New Category add' }).click();
  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page1.getByRole('button', { name: 'Add New Category add' }).click();
  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page1.getByRole('button', { name: 'Add New Category add' }).click();
  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page1.getByRole('button', { name: 'Add New Category add' }).click();
});