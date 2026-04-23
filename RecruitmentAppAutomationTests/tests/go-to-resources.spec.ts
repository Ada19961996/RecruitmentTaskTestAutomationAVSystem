import { test, expect } from '@playwright/test';
import { NavigationPage } from '../page-objects/NavigationPage'
import { WelcomePage } from '../page-objects/WelcomePage';


 test.beforeEach( async ({page}) =>{
    await page.goto('https://angular-qa-recruitment-app.netlify.app/')
})

test('verify if learn angular button is opening correct website', async ({ page }) => {
  const welcomePage = new WelcomePage(page)
  const [newPage] = await Promise.all([page.waitForEvent('popup'), welcomePage.learnAngularButton.click()]);

  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL('https://v17.angular.io/docs');
});

test('verify if learn CLI documentation is opening correct website', async ({ page }) => {
  const welcomePage = new WelcomePage(page)
  const [newPage] = await Promise.all([page.waitForEvent('popup'), welcomePage.cliDocumentationButton.click()]);

  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL('https://v17.angular.io/cli');
});

test('verify if angular blog button is opening correct website', async ({ page }) => {
  const welcomePage = new WelcomePage(page)
  const [newPage] = await Promise.all([page.waitForEvent('popup'), welcomePage.angularBlogButton.click()]);

  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL('https://blog.angular.dev/');
});

test('verify if angular devtools button is opening correct website', async ({ page }) => {
  const welcomePage = new WelcomePage(page)
  const [newPage] = await Promise.all([page.waitForEvent('popup'), welcomePage.angularDevToolsButton.click()]);

  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL('https://v17.angular.io/guide/devtools');
});

test('verify if twitter button is opening correct website', async ({ page }) => {
  const welcomePage = new NavigationPage(page)
  const [newPage] = await Promise.all([page.waitForEvent('popup'), welcomePage.twitterNavigationItem.click()]);

  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL('https://x.com/angular');
});

test('verify if youtube button is opening correct website', async ({ page }) => {
  const welcomePage = new NavigationPage(page)
  const [newPage] = await Promise.all([page.waitForEvent('popup'), welcomePage.youtubeNavigationItem.click()]);

  await newPage.waitForLoadState();
  await newPage.getByRole('button', { name: 'Accept all' }).click()
  await expect(newPage).toHaveURL('https://www.youtube.com/angular');
});

