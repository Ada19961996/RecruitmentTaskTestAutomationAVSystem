import { Locator, Page } from '@playwright/test'

export class StepperPage{

    readonly page: Page
    readonly nameAndLastNameInputField: Locator
    readonly addressInputField: Locator
    readonly nextButtonName: Locator
    readonly nextButtonAddress: Locator
    readonly infoField: Locator
    readonly nameAndLastNameField: Locator
    readonly addressField: Locator
    readonly backButtonAddress: Locator
    readonly backButtonDone: Locator
    readonly textInfo: Locator

    constructor(page: Page){
        this.page = page
        this.nameAndLastNameInputField = page.locator('#mat-form-field-label-1')
        this.addressInputField = page.locator('#mat-form-field-label-3').getByText("Address")
        this.nextButtonName = this.page.getByLabel('1Fill out your name').getByRole('button', { name: 'Next' })
        this.nextButtonAddress = this.page.getByLabel('2Fill out your address').getByRole('button', { name: 'Next' })
        this.infoField = this.page.locator('.ng-star-inserted').first()
        this.nameAndLastNameField = this.page.locator('p:has-text("Name:")')
        this.addressField = this.page.locator('p:has-text("Address:")')
        this.backButtonAddress = this.page.getByLabel('2Fill out your address').getByRole('button', { name: 'Back' })
        this.backButtonDone = this.page.getByLabel('3Done').getByRole('button', { name: 'Back' })
        this.textInfo = this.page.locator(".text-danger")
    }

    async fillNameField(name: string){
        await this.page.evaluate(() => {
        if (this.nameAndLastNameInputField) this.nameAndLastNameInputField.click();
        });
        await this.nameAndLastNameInputField.clear()
        await this.nameAndLastNameInputField.fill(name)
    }

     async fillAddressField(address: string){
        await this.page.evaluate(() => {
        if (this.addressInputField) this.addressInputField.click();
        });
        await this.addressInputField.clear()
        await this.addressInputField.fill(address)
        
    }
}