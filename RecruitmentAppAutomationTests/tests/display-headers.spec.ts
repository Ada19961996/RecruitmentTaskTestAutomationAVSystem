import { test, expect } from '@playwright/test';
import { NavigationPage } from '../page-objects/NavigationPage'
import { WelcomePage } from '../page-objects/WelcomePage';


 test.beforeEach( async ({page}) =>{
    await page.goto('https://angular-qa-recruitment-app.netlify.app/')
})

test('verify if angular logo is visible ', async ({ page }) => {
  const welcomePage = new WelcomePage(page)
  await expect(welcomePage.angularLogoImg).toBeVisible();
});

test('verify if headers are visible ', async ({ page }) => {
  const welcomePage = new WelcomePage(page)
  await expect(welcomePage.headerResouces).toBeVisible();
  await expect(welcomePage.headerResoucesText).toBeVisible();
  await expect(welcomePage.headerNextSteps).toBeVisible();
  await expect(welcomePage.headerNextStepsText).toBeVisible();
});

