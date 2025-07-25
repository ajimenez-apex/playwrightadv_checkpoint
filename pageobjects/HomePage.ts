import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly manageBtn: Locator;
  readonly manageCategoriesBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.manageBtn = page.locator('.nav-menu-item-manage');
    this.manageCategoriesBtn = page.getByRole('link', { name: 'manage category Manage' });
    //this.tsBtn = page.locator("//*[@id='PTNUI_LAND_REC_GROUPLET_LBL$2']");
    //this.tsBtn = page.locator("//div[@id='win0groupletPTNUI_LAND_REC_GROUPLET$2']");
    //this.timesheetBtn = page.getByRole('link', { name: 'Timesheet' });
    
  }

  async manageCategories() {

    await this.manageBtn.hover();    
    const page1Promise = this.page.waitForEvent('popup');
    await this.manageCategoriesBtn.click();
    const page1 = await page1Promise;
    return page1;

  }
}