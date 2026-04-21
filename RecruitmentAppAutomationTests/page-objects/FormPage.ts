import { Locator, Page } from '@playwright/test'


export class FormPage {
    readonly page: Page
    readonly nameInputField: Locator
    readonly alterEgoInputField: Locator
    readonly submitButton: Locator
    readonly newHeroButton: Locator
   

    constructor(page: Page){
        this.page = page
        this.nameInputField = this.page.locator("#name")
        this.alterEgoInputField = this.page.locator("#alterEgo")
        this.submitButton = this.page.getByRole("button", {name: "Submit" })
        this.newHeroButton = this.page.getByRole("button", {name: "New Hero" })
    }

    async clearAndFillFields(name: string, alterEgo: string, heroPower: string){
        
        await this.nameInputField.clear()
        await this.nameInputField.fill(name)
        await this.alterEgoInputField.clear()
        await this.alterEgoInputField.fill(alterEgo)
        await this.page.selectOption('#power', {label: heroPower});
    }

  

}