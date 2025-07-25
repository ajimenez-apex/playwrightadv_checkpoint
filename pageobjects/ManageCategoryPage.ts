import { Locator, Page, expect } from "@playwright/test";

export class ManageCategoryPage {
  readonly page: Page;
  readonly addCategoryBtn: Locator;
  readonly manageCategoriesBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addCategoryBtn = page.getByRole('button', { name: 'Add New Category add' });
    this.manageCategoriesBtn = page.getByRole('link', { name: 'manage category Manage' });
    //this.tsBtn = page.locator("//*[@id='PTNUI_LAND_REC_GROUPLET_LBL$2']");
    //this.tsBtn = page.locator("//div[@id='win0groupletPTNUI_LAND_REC_GROUPLET$2']");
    //this.timesheetBtn = page.getByRole('link', { name: 'Timesheet' });
    
  }

  async addNewCategory() {
    // Click on the "Add New Category" button
    await expect(this.page.getByRole('heading', { name: 'manage category Manage' })).toBeVisible();
    //await this.page.pause(); // Pause for debugging
    await this.addCategoryBtn.click();
    await this.page.waitForTimeout(8000); // Wait for the dialog to appear
    const popup = await this.page.waitForEvent('popup');
     


  }
}