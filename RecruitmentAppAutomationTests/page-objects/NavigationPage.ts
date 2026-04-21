import { Locator, Page } from '@playwright/test'


export class NavigationPage {
    readonly page: Page
    readonly welcomeNavigationItem: Locator
    readonly formNavigationItem: Locator
    readonly stepperNavigationItem: Locator
    readonly twitterNavigationItem: Locator
    readonly youtubeNavigationItem: Locator

    constructor(page: Page){
        this.page = page
        this.welcomeNavigationItem = page.getByText("Welcome")
        this.formNavigationItem = page.getByText("Form")
        this.stepperNavigationItem = page.getByText("Stepper")
        this.twitterNavigationItem = page.locator("#angular-on-twitter-svg")
        this.youtubeNavigationItem = page.locator("#angular-on-youtube-svg")
    }

    async formLayoutPage(){
        await this.formNavigationItem.click()
    }

    async stepperLayoutPage(){
        await this.stepperNavigationItem.click()
    }

    async welcomeLayoutPage(){
        await this.welcomeNavigationItem.click()
    }

    async twitterLayoutPage(){
        await this.twitterNavigationItem.click()
    }

}