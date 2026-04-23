import { Locator, Page } from '@playwright/test'


export class WelcomePage {
    readonly page: Page
    readonly commandsInTermnal
    readonly learnAngularButton: Locator
    readonly cliDocumentationButton: Locator
    readonly angularBlogButton: Locator
    readonly angularDevToolsButton: Locator
    readonly angularLogoImg: Locator
    readonly headerResouces: Locator
    readonly headerResoucesText: Locator
    readonly headerNextSteps: Locator
    readonly headerNextStepsText: Locator
   
    constructor(page: Page){
        this.page = page
        this.commandsInTermnal = {
        "New Component": "ng generate component xyz",
        "Angular Material": "ng add @angular/material",
        "Add PWA Support": "ng add @angular/pwa",
        "Add Dependency": "ng add _____",
        "Run and Watch Tests": "ng test",
        "Build for Production": "ng build",
        }
        this.learnAngularButton = this.page.locator('a:has-text("Learn Angular")')
        this.cliDocumentationButton = this.page.locator('a:has-text("CLI Documentation")')
        this.angularBlogButton = this.page.locator('a:has-text("Angular Blog")')
        this.angularDevToolsButton = this.page.locator('a:has-text("Angular DevTools")')
        this.angularLogoImg = this.page.getByAltText('Angular Logo')
        this.headerResouces = this.page.getByText('Resources')
        this.headerResoucesText = this.page.getByText('Here are some links to help')
        this.headerNextSteps = this.page.getByText('Next Steps')
        this.headerNextStepsText = this.page.getByText('What do you want to do next')
        
    }

    

  

}