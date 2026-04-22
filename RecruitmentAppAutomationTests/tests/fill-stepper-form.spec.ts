import { test, expect } from '@playwright/test';
import { NavigationPage } from '../page-objects/NavigationPage'
import { StepperPage } from '../page-objects/StepperPage';


 test.beforeEach( async ({page}) =>{
    await page.goto('https://angular-qa-recruitment-app.netlify.app/')
  
})

test('fill stepper form', async ({ page }) => {
  const navigateTo = new NavigationPage(page)
  const stepperPage = new StepperPage(page)
  await navigateTo.stepperLayoutPage()
  await stepperPage.fillNameField("Adrianna Test")
  await stepperPage.nextButtonName.click()
  await stepperPage.fillAddressField("Bytomska 1/11, Krakow")
  await stepperPage.nextButtonAddress.click()
  await expect(stepperPage.infoField).toContainText("You are now done!")
  await expect(stepperPage.nameAndLastNameField).toContainText("Adrianna Test")
  await expect(stepperPage.addressField).toContainText("Bytomska 1/11, Krakow")
});

test('fill stepper form and change address value', async ({ page }) => {
  const navigateTo = new NavigationPage(page)
  const stepperPage = new StepperPage(page)
  await navigateTo.stepperLayoutPage()
  await stepperPage.fillNameField("Adrianna Test")
  await stepperPage.nextButtonName.click()
  await stepperPage.fillAddressField("Bytomska 1/11, Krakow")
  await stepperPage.nextButtonAddress.click()
  await expect(stepperPage.infoField).toContainText("You are now done!")
  await expect(stepperPage.nameAndLastNameField).toContainText("Adrianna Test")
  await expect(stepperPage.addressField).toContainText("Bytomska 1/11, Krakow")
  await stepperPage.backButtonDone.click()
  await stepperPage.fillAddressField("Wadowicka 1/11, Krakow")
  await stepperPage.nextButtonAddress.click()
  await expect(stepperPage.infoField).toContainText("You are now done!")
  await expect(stepperPage.nameAndLastNameField).toContainText("Adrianna Test")
  await expect(stepperPage.addressField).toContainText("Wadowicka 1/11, Krakow")
});

test('fill stepper form and change name value', async ({ page }) => {
  const navigateTo = new NavigationPage(page)
  const stepperPage = new StepperPage(page)
  await navigateTo.stepperLayoutPage()
  await stepperPage.fillNameField("Adrianna Test")
  await stepperPage.nextButtonName.click()
  await stepperPage.fillAddressField("Bytomska 1/11, Krakow")
  await stepperPage.nextButtonAddress.click()
  await expect(stepperPage.infoField).toContainText("You are now done!")
  await expect(stepperPage.nameAndLastNameField).toContainText("Adrianna Test")
  await expect(stepperPage.addressField).toContainText("Bytomska 1/11, Krakow")
  await stepperPage.backButtonDone.click()
  await stepperPage.backButtonAddress.click()
  await stepperPage.fillNameField("Adrianna Testowa")
  await stepperPage.nextButtonName.click()
  await stepperPage.nextButtonAddress.click()
  await expect(stepperPage.infoField).toContainText("You are now done!")
  await expect(stepperPage.nameAndLastNameField).toContainText("Adrianna Testowa")
  await expect(stepperPage.addressField).toContainText("Bytomska 1/11, Krakow")
});

test('fill stepper form without name', async ({ page }) => {
  const navigateTo = new NavigationPage(page)
  const stepperPage = new StepperPage(page)
  await navigateTo.stepperLayoutPage()
  await stepperPage.fillNameField("")
  await stepperPage.nextButtonName.click()
  expect(stepperPage.textInfo).toContainText("This field is required.")
});

test('fill stepper form without address', async ({ page }) => {
  const navigateTo = new NavigationPage(page)
  const stepperPage = new StepperPage(page)
  await navigateTo.stepperLayoutPage()
  await stepperPage.fillNameField("Adrianna Test")
  await stepperPage.nextButtonName.click()
  await stepperPage.fillAddressField("")
  await stepperPage.nextButtonAddress.click()
  expect(stepperPage.textInfo).toContainText("This field is required.")
});




