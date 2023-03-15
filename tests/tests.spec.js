const { test, expect } = require('@playwright/test')
const { PageObjectsManager } = require('../pageobjects/pageObjectManager')
const { ContactUsPage } = require('../pageobjects/contactUs')
const { DropCheckRadio } = require('../pageobjects/dropCheckRadio')
const { AutocompleteTF } = require('../pageobjects/autocompleteTF')
const { AjaxLoader } = require('../pageobjects/ajaxLoader')
const { Datepicker } = require('../pageobjects/datepicker')

const firstName = ('Brad')
const lastName = ('Pitt')
const email = ('brad.pitt@wp.pl')
const comments = ('How to get to the station?')
const food = ('chi')

test.describe('Contact us page', () => {
    test.beforeEach(async ({ page }) => {
        const pageObjectsManager = new PageObjectsManager(page)
        await pageObjectsManager.goToContactUs()
    })
    test('wypełnienie i usunięcie', async ({ page }) => {
        const contactUs = new ContactUsPage(page)
    await contactUs.fillForm(firstName, lastName, email, comments)
    await contactUs.resetForm()
    await expect(await page.$eval('input[placeholder], textarea[placeholder="Comments"]', el => el.value)).toEqual('');
})
    test('walidacja pola comments', async ({ page }) => {
        const contactUs = new ContactUsPage(page)
    await contactUs.fillForm(firstName, lastName, email, '')
    await contactUs.submitForm()
    await expect(await page.innerText('body')).toContain('Error: all fields are required');
})
    test('walidacja pola email', async ({ page }) => {
        const contactUs = new ContactUsPage(page)
    await contactUs.fillForm(firstName, lastName, 'brad.pitt.wp.pl', comments)
    await contactUs.submitForm()
    await expect(await page.innerText('body')).toContain('Error: Invalid email address');
    })
    test('wypełnienie i zatwierdzenie', async ({ page }) => {
        const contactUs = new ContactUsPage(page)
    await contactUs.fillForm(firstName, lastName, email, comments)
    await contactUs.submitForm()
    expect(await page.innerText('body')).toContain('Thank You for your Message!')
    })
})

test.describe('Dropdowns, checkboxes and radiobuttons', () => {
    test.beforeEach(async ({ page}) => {
        const pageObjectsManager = new PageObjectsManager(page)
        await pageObjectsManager.goToDropdowns()
    })
    test('wybieranie dropdownów', async ({ page }) => {
        const dropCheckRadio = new DropCheckRadio(page)
        await dropCheckRadio.dropdownsFilling()   
    })
    test('wybieranie checkboxów', async ({ page }) => {
        const dropCheckRadio = new DropCheckRadio(page)
        await dropCheckRadio.checkboxesCheck()
        const checkbox = page.getByText('Option 1', 'Option 2', 'Option 3', 'Option 4')
        await (expect(checkbox).toBeChecked())

    })
    test('wybieranie radiobuttonów', async ({ page }) => {
        const dropCheckRadio = new DropCheckRadio(page)
        await dropCheckRadio.radioButtons()
    })
})

test.describe('Autocomplete TextField ', () => {
    test.beforeEach(async ({ page}) => {
        const pageObjectsManager = new PageObjectsManager(page)
        await pageObjectsManager.goToAutocompleteTF()
    })
    test('wyszukiwanie chipsów', async ({ page }) => {
        const autocompleteTF = new AutocompleteTF(page)
        await autocompleteTF.searchChips(food)
    })
})

test.describe('AjaxLoader', () => {
    test.beforeEach(async ({ page }) => {
        const pageObjectsManager = new PageObjectsManager(page)
        await pageObjectsManager.goToAjaxLoader()
    })
    test('ajax', async ({ page }) => {
        const ajaxLoader = new AjaxLoader(page)
        await ajaxLoader.waitForAjax()
        await (expect(page.locator('.modal-title')).toContainText('Well Done For Waiting....!!!'))
    })
})

test.describe('Datepicker', () => {
    test.beforeEach(async ({ page }) => {
        const pageObjectsManager = new PageObjectsManager(page)
        await pageObjectsManager.goToDatepickerPage()
    })
    test.only('datepicker', async ({ page }) => {
        const datepicker = new Datepicker(page)
        await datepicker.selectDatepicker()
        
    })
})