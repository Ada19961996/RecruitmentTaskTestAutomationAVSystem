import { Locator, Page } from '@playwright/test'

export class StepperPage{

    readonly page: Page
    readonly nameAndLastNameInputField: Locator

    constructor(page: Page){
        this.page = page
        this.nameAndLastNameInputField = page.getByPlaceholder("Last name, First name")
    }

    async fillFields(name: string){
        
        await this.nameAndLastNameInputField.clear()
        await this.nameAndLastNameInputField.fill(name)
        // await this.alterEgoInputField.clear()
        // await this.alterEgoInputField.fill(alterEgo)
        // await this.page.selectOption('#power', {label: heroPower});
    }
}