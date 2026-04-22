import { test, expect } from '@playwright/test';
import { NavigationPage } from '../page-objects/NavigationPage'
import { WelcomePage } from '../page-objects/WelcomePage';


 test.beforeEach( async ({page}) =>{
    await page.goto('https://angular-qa-recruitment-app.netlify.app/')
  
})

test('check terminal command display for next steps buttons', async ({ page }) => {
  const navigateTo = new NavigationPage(page)
  const welcomePage = new WelcomePage(page)

  for (const command in welcomePage.commandsInTermnal){
        await page.getByRole("button", {name: command }).click()
        await expect(page.locator('.terminal pre')).toHaveText(welcomePage.commandsInTermnal[command])
    }
  
});



