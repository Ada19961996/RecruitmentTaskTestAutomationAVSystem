import { Locator, Page } from '@playwright/test'


export class WelcomePage {
    readonly page: Page
    readonly commandsInTermnal
   
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
        
    }

    

  

}