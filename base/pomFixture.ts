//Extending Playwright's test fixture to include custom page objects
//Return our required page objects

import { test as baseTest,} from "@playwright/test";
import { LandingPage } from "../pageobjects/LandingPage";
import { HomePage } from "../pageobjects/HomePage";
import { ManageCategoryPage } from "../pageobjects/ManageCategoryPage"; 


type UIpages = {
  landingPage: LandingPage;
  homePage: HomePage;
  manageCategoryPage: ManageCategoryPage;

};

export const test = baseTest.extend<UIpages>({

    // Define the custom page object for LandingPage
    landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
    },
    // Define the custom page object for HomePage
    homePage: async ({ page }, use) => {
      await use(new HomePage(page));
    },

    // Define the custom page object for ManageCategoryPage
    manageCategoryPage: async ({ page }, use) => {
      await use(new ManageCategoryPage(page));
    }


});

//export const test = testPages;
//export const expect = baseTest.expect;
export {'expect'} from "@playwright/test";