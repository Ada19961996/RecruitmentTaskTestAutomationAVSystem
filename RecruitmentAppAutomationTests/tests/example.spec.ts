import { test, expect } from '@playwright/test';
import { NavigationPage } from '../page-objects/NavigationPage'
import { FormPage } from '../page-objects/FormPage';
import { WelcomePage } from '../page-objects/WelcomePage';
import { StepperPage } from '../page-objects/StepperPage';


test('has title', async ({ page }) => {
  await page.goto('https://angular-qa-recruitment-app.netlify.app/')
  const navigateTo = new NavigationPage(page)

  await navigateTo.stepperLayoutPage()
  await navigateTo.formLayoutPage()
  await navigateTo.welcomeLayoutPage()
  await navigateTo.twitterLayoutPage()
  
});

test('fill Form', async ({ page }) => {
  await page.goto('https://angular-qa-recruitment-app.netlify.app/')
  const navigateTo = new NavigationPage(page)
  const formPage = new FormPage(page)
  await navigateTo.formLayoutPage()
  await formPage.clearAndFillFields("ada", "test", "Super Flexible")
  await formPage.submitButton.click()
});

test('fill NAme', async ({ page }) => {
  await page.goto('https://angular-qa-recruitment-app.netlify.app/')
  const navigateTo = new NavigationPage(page)
  const formPage = new StepperPage(page)
  await navigateTo.stepperLayoutPage()
  await formPage.fillFields("ada")
  // await formPage.submitButton.click()
});

