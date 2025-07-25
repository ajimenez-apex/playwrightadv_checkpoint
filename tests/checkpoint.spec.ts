import { test, expect } from "../base/pomFixture";
import data from '../utils/LoginTestData.json';
import { ManageCategoryPage } from "../pageobjects/ManageCategoryPage";


test.describe('Advanced Checkpoint', () => {
  
  test('Validate page title', async ({ page, landingPage }) => {
    await landingPage.goTo();
    await expect(page).toHaveTitle('Learn Automation Courses');
  });

  test('Check main content visibility', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/');
    await expect(page.getByRole('heading', { name: 'Learn Automation Courses', level: 1 })).toBeVisible();
  });

  test('Valid Login', async ({ page, landingPage }) => {
    await landingPage.goTo();
    await landingPage.validLogin(data.email, data.password);
    await expect(page.getByRole('heading', { name: 'Welcome Admin Manager to' })).toBeVisible();

  });

  test('Checkpoint e2e', async ({ page, landingPage, homePage}) => {
    await landingPage.goTo();
    await landingPage.validLogin(data.email, data.password);
    const page1 = await homePage.manageCategories();
    const manageCategoryPage = new ManageCategoryPage(page1);
    // Add a new category
    await manageCategoryPage.addNewCategory();

  });

});