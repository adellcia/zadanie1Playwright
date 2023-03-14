const { expect } = require('@playwright/test');

export class ContactUsPage {
    constructor(page){
    this.page = page
    this.firstNameField = page.locator('[name="first_name"]')
    this.lastNameField = page.getByPlaceholder("Last Name")
    this.emailField = page.getByPlaceholder("Email Address")
    this.commentsField = page.getByPlaceholder("Comments")
    this.resetButton = page.locator('[type="reset"]')
    this.submitButton = page.locator('input[type="submit"]')
    }

    async fillForm(fn, ln, email, com) {
    if (fn) {await this.firstNameField.type(fn)}
    if (ln) {await this.lastNameField.fill(ln)}
    if (email) {await this.emailField.fill(email)}
    if (com) {await this.commentsField.fill(com)}
    }
    async resetForm() {
        await this.resetButton.click()
    }
    async submitForm() {
        await this.submitButton.click()
    }
}
module.exports = { ContactUsPage };