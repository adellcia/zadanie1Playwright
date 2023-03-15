const { expect } = require('@playwright/test');

export class Datepicker {
    constructor(page){
        this.page = page
        this.datepickerDate = page.locator('[class="input-group-addon"]')
        this.datepickerChooseDay = page.getByText('18')
        this.dateAssert = page.locator('[class="form-control"]')
    }
async selectDatepicker(){
    await this.datepickerDate.click()
    await this.datepickerChooseDay.click()
    await expect(this.dateAssert).toHaveValue('03-18-2023')
    }
}
module.exports = { Datepicker };