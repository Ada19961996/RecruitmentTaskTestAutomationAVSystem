import { test, expect } from '@playwright/test';
import { NavigationPage } from '../page-objects/NavigationPage'
import { FormPage } from '../page-objects/FormPage';
import { WelcomePage } from '../page-objects/WelcomePage';
import { StepperPage } from '../page-objects/StepperPage';


 test.beforeEach( async ({page}) =>{
    await page.goto('https://angular-qa-recruitment-app.netlify.app/')
  
})

test('fill form and pick Really Smart from dropdown menu options', async ({ page }) => {
  const navigateTo = new NavigationPage(page)
  const formPage = new FormPage(page)
  await navigateTo.formLayoutPage()
  await formPage.clearAndFillFields("ada", "test", "Really Smart")
  await formPage.submitButton.click()
  await expect(formPage.nameTextDisplayed).toHaveValue("ada")
});

test('fill form and pick Super Flexible from dropdown menu options', async ({ page }) => {
  const navigateTo = new NavigationPage(page)
  const formPage = new FormPage(page)
  await navigateTo.formLayoutPage()
  await formPage.clearAndFillFields("ada", "test", "Super Flexible")
  await formPage.submitButton.click()
});

test('fill form and pick Super Hot from dropdown menu options', async ({ page }) => {
  const navigateTo = new NavigationPage(page)
  const formPage = new FormPage(page)
  await navigateTo.formLayoutPage()
  await formPage.clearAndFillFields("ada", "test", "Super Hot")
  await formPage.submitButton.click()
});

test('fill form and pick Weather Changer from dropdown menu options', async ({ page }) => {
  const navigateTo = new NavigationPage(page)
  const formPage = new FormPage(page)
  await navigateTo.formLayoutPage()
  await formPage.clearAndFillFields("ada", "test", "Weather Changer")
  await formPage.submitButton.click()
});

// test('fill NAme', async ({ page }) => {
  
//   const navigateTo = new NavigationPage(page)
//   const formPage = new StepperPage(page)
//   await navigateTo.stepperLayoutPage()
//   await formPage.fillFields("ada")
//   // await formPage.submitButton.click()
// });

