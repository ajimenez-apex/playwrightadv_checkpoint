import { Locator, Page } from "@playwright/test";

export class LandingPage {
  page: Page;
  readonly menuBtn: Locator;
  readonly loginBtn: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;    
    //this.signInbutton = page.locator("input[value='Sign In']");
    this.menuBtn = page.getByRole('img', { name: 'menu' });
    this.loginBtn = page.getByRole('button', { name: 'Log in' });
    this.emailInput = page.getByRole('textbox', { name: 'Enter Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Enter Password' });
    this.signInButton = page.getByRole('button', { name: 'Sign in' });

  }

  async goTo() {
    await this.page.goto("https://freelance-learn-automation.vercel.app/");
  }

  async validLogin(username: string, password: string) {
    await this.menuBtn.click();
    await this.loginBtn.click();   
    await this.emailInput.fill('admin@email.com');
    await this.passwordInput.fill('admin@123');
    await this.signInButton.click();
    //await this.userName.fill(username);
    //await this.password.fill(password);

  }
  
}