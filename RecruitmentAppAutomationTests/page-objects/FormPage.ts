import { Locator, Page } from '@playwright/test'


export class FormPage {
    readonly page: Page
    readonly nameInputField: Locator
    readonly alterEgoInputField: Locator
    readonly submitButton: Locator
    readonly newHeroButton: Locator
    readonly editButton: Locator
    readonly nameTextDisplayed: Locator
    readonly alterEgoTextDisplayed: Locator
   

    constructor(page: Page){
        this.page = page
        this.nameInputField = this.page.locator("#name")
        this.alterEgoInputField = this.page.locator("#alterEgo")
        this.submitButton = this.page.getByRole("button", {name: "Submit" })
        this.newHeroButton = this.page.getByRole("button", {name: "New Hero" })
        this.editButton = this.page.getByRole("button", {name: "Edit" })
        this.nameTextDisplayed = this.page.locator('col-xs-3', {hasText: "Name"})
        this.alterEgoTextDisplayed = this.page.locator('col-xs-3', {hasText: "Alter Ego"})
    }

    async clearAndFillFields(name: string, alterEgo: string, heroPower: string){  
        if(name != null){
            await this.nameInputField.clear()
            await this.nameInputField.fill(name)
        }else{
            await this.nameInputField.fill(name)
        }

        if(alterEgo != null){
            await this.alterEgoInputField.clear()
            await this.alterEgoInputField.fill(alterEgo)
         }else{
            await this.alterEgoInputField.fill(alterEgo)
         }

        await this.page.selectOption('#power', {label: heroPower})

    }

}