import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/');
  await page.getByRole('img', { name: 'menu' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('admin@email.com');
  await page.getByRole('textbox', { name: 'Enter Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('admin@123');
  await page.getByRole('textbox', { name: 'Enter Password' }).press('Enter');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome Admin Manager to' })).toBeVisible();
  await page.getByText('Manage', { exact: true }).click();
  await page.hover('text=Manage Category');
  await expect(page.getByRole('link', { name: 'manage category Manage' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'manage category Manage' })).toHaveAttribute('href', '/manage-category');
  await expect(page.getByRole('link', { name: 'manage category Manage' })).toHaveText('Manage Category');
  await expect(page.getByRole('link', { name: 'manage category Manage' })).toHaveCount(1);
  await expect(page.getByRole('link', { name: 'manage category Manage' })).toBeEnabled();
  await expect(page.getByRole('link', { name: 'manage category Manage' })).toHaveCSS('color', 'rgb(0, 0, 238)');
  await expect(page.getByRole('link', { name: 'manage category Manage' })).toHaveCSS('text-decoration', 'none');
  await expect(page.getByRole('link', { name: 'manage category Manage' })).toHaveCSS('font-weight', '400');
  await expect(page.getByRole('link', { name: 'manage category Manage' })).toHaveCSS('font-size', '16px');
  await expect(page.getByRole('link', { name: 'manage category Manage' })).toHaveCSS('font-family', 'Inter, sans-serif');
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