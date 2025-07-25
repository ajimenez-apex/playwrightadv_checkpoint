import { test, expect, chromium, firefox } from '@playwright/test';

test('test', async () => {
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('http://freelance-learn-automation.vercel.app');
  await page.getByRole('img', { name: 'menu' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('admin@email.com');
  await page.getByRole('textbox', { name: 'Enter Password' }).click();
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('admin@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByText('Manage', { exact: true }).click();
  const page1Promise = context.waitForEvent('page');
  await page.getByRole('link', { name: 'manage category Manage' }).click();
  const page1 = await page1Promise;
  console.log(await page1.title());
  await expect(page1.getByRole('button', { name: 'Add New Category add' })).toBeVisible();
  await expect(page1.locator('#root')).toContainText('Add New Category');
  //const popup = page1.waitForEvent('popup');
  await page1.waitForTimeout(4000);
  await page1.pause(); // Pause for debugging
  await page1.getByRole('button', { name: 'Add New Category add' }).click();
    page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  //await page1.pause(); // Pause for debugging
  //const popup = await page1.waitForEvent('popup');

  await browser.close();
});