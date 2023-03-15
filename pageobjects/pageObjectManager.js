const { expect } = require('@playwright/test');
const { ContactUsPage } = require('../pageobjects/contactUs')



export class PageObjectsManager {
    constructor(page) {
        this.page = page
    }
    async goToContactUs() {
        await this.page.goto("https://webdriveruniversity.com/")
        const link = this.page.locator('a#contact-us')
        await link.evaluate((el) => el.removeAttribute('target'))
        await link.click()
        this.goToPage = new ContactUsPage(this.page)
    }
    async goToDropdowns(){
        await this.page.goto("https://webdriveruniversity.com/")
        const link = this.page.locator('#dropdown-checkboxes-radiobuttons')
        await link.evaluate((el) => el.removeAttribute('target'))
        await link.click()
    }
    async goToAutocompleteTF(){
        await this.page.goto("https://webdriveruniversity.com/")
        const link = this.page.locator('#autocomplete-textfield')
        await link.evaluate((el) => el.removeAttribute('target'))
        await link.click()
    }
    async goToAjaxLoader(){
        await this.page.goto("https://webdriveruniversity.com/")
        const link = this.page.locator('#ajax-loader')
        await link.evaluate((el) => el.removeAttribute('target'))
        await link.click()
    }
    async goToDatepickerPage(){
        await this.page.goto("https://webdriveruniversity.com/")
        const link = this.page.locator('#datepicker')
        await link.evaluate((el) => el.removeAttribute('target'))
        await link.click()
    }
}
module.exports = { PageObjectsManager };