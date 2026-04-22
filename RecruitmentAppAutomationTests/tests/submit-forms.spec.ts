import { test, expect } from '@playwright/test';
import { NavigationPage } from '../page-objects/NavigationPage'
import { FormPage } from '../page-objects/FormPage';
import { WelcomePage } from '../page-objects/WelcomePage';
import { StepperPage } from '../page-objects/StepperPage';


 test.beforeEach( async ({page}) =>{
    await page.goto('https://angular-qa-recruitment-app.netlify.app/')
  
})

test('fill form and check if all values from dropdown menu options are displayed correctly', async ({ page }) => {
  const navigateTo = new NavigationPage(page)
  const formPage = new FormPage(page)
  await navigateTo.formLayoutPage()
  const allOptions = ["Really Smart", "Super Flexible", "Super Hot", "Weather Changer"]
    for(let option of allOptions){
        await formPage.clearAndFillFields("ada", "test", option)
        await formPage.submitButton.click()
        await expect(page.locator('.row:has-text("Name") .col-xs-9')).toContainText("ada")
        await expect(page.locator('.row:has-text("Alter Ego") .col-xs-9')).toContainText("test")
        await expect(page.locator('.row:has-text("Power") .col-xs-9')).toContainText(option)
        await formPage.editButton.click() 
    }
});

test('fill form and edit name value', async ({ page }) => {
  const navigateTo = new NavigationPage(page)
  const formPage = new FormPage(page)
  await navigateTo.formLayoutPage()
  await formPage.clearAndFillFields("ada", "test", "Super Hot")
  await formPage.submitButton.click()
  await formPage.editButton.click()
  await expect(page.locator('.row:has-text("Name") .col-xs-9')).toContainText("ada")
  await expect(page.locator('.row:has-text("Alter Ego") .col-xs-9')).toContainText("test")
  await expect(page.locator('.row:has-text("Power") .col-xs-9')).toContainText("Super Hot")
  await formPage.nameInputField.clear()
  await formPage.nameInputField.fill("Adrianna")
  await formPage.submitButton.click()
  await expect(page.locator('.row:has-text("Name") .col-xs-9')).toContainText("Adrianna")
  await expect(page.locator('.row:has-text("Alter Ego") .col-xs-9')).toContainText("test")
  await expect(page.locator('.row:has-text("Power") .col-xs-9')).toContainText("Super Hot")

});

test('fill form and edit alter ego value', async ({ page }) => {
  const navigateTo = new NavigationPage(page)
  const formPage = new FormPage(page)
  await navigateTo.formLayoutPage()
  await formPage.clearAndFillFields("ada", "test", "Super Flexible")
  await formPage.submitButton.click()
  await formPage.editButton.click()
  await expect(page.locator('.row:has-text("Name") .col-xs-9')).toContainText("ada")
  await expect(page.locator('.row:has-text("Alter Ego") .col-xs-9')).toContainText("test")
  await expect(page.locator('.row:has-text("Power") .col-xs-9')).toContainText("Super Flexible")
  await formPage.alterEgoInputField.clear()
  await formPage.alterEgoInputField.fill("Testtest")
  await formPage.submitButton.click()
  await expect(page.locator('.row:has-text("Name") .col-xs-9')).toContainText("ada")
  await expect(page.locator('.row:has-text("Alter Ego") .col-xs-9')).toContainText("Testtest")
  await expect(page.locator('.row:has-text("Power") .col-xs-9')).toContainText("Super Flexible")
});

test('fill form and edit hero power value', async ({ page }) => {
  const navigateTo = new NavigationPage(page)
  const formPage = new FormPage(page)
  await navigateTo.formLayoutPage()
  await formPage.clearAndFillFields("ada", "test", "Super Flexible")
  await formPage.submitButton.click()
  await formPage.editButton.click()
  await expect(page.locator('.row:has-text("Name") .col-xs-9')).toContainText("ada")
  await expect(page.locator('.row:has-text("Alter Ego") .col-xs-9')).toContainText("test")
  await expect(page.locator('.row:has-text("Power") .col-xs-9')).toContainText("Super Flexible")
  await page.selectOption('#power', {label: "Weather Changer"});
  await formPage.submitButton.click()
  await expect(page.locator('.row:has-text("Name") .col-xs-9')).toContainText("ada")
  await expect(page.locator('.row:has-text("Alter Ego") .col-xs-9')).toContainText("test")
  await expect(page.locator('.row:has-text("Power") .col-xs-9')).toContainText("Weather Changer")
});

test('create new hero and check if all values from dropdown menu options are displayed correctly', async ({ page }) => {
  const navigateTo = new NavigationPage(page)
  const formPage = new FormPage(page)
  await navigateTo.formLayoutPage()
  await formPage.newHeroButton.click()
  await formPage.clearAndFillFields("ada", "test", "Weather Changer")
  await formPage.submitButton.click()
  await expect(page.locator('.row:has-text("Name") .col-xs-9')).toContainText("ada")
  await expect(page.locator('.row:has-text("Alter Ego") .col-xs-9')).toContainText("test")
  await expect(page.locator('.row:has-text("Power") .col-xs-9')).toContainText("Weather Changer")   
});

test('fill form without name', async ({ page }) => {
  const navigateTo = new NavigationPage(page)
  const formPage = new FormPage(page)
  await navigateTo.formLayoutPage()
  await formPage.clearAndFillFields("", "test", "Super Flexible")
  await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();
});

test('fill form without hero power', async ({ page }) => {
  const navigateTo = new NavigationPage(page)
  const formPage = new FormPage(page)
  await navigateTo.formLayoutPage()
  await formPage.clearAndFillFields("ada", "", "Super Flexible")
  await expect(page.locator('.row:has-text("Name") .col-xs-9')).toContainText("ada")
  await expect(page.locator('.row:has-text("Alter Ego") .col-xs-9')).toContainText("")
  await expect(page.locator('.row:has-text("Power") .col-xs-9')).toContainText("Super Flexible") 
});

