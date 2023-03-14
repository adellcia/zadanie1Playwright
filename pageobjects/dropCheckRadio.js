const dropdownValues = [['JAVA', 'C#', 'Python', 'SQL']
    ['Eclipse', 'Maven', 'TestNG', 'JUnit'],
    ['HTML', 'CSS', 'JavaScript', 'JQuery']]

const radioButton = ['Green', 'Blue', 'Yellow', 'Orange', 'Purple']

export class DropCheckRadio {
    constructor(page){
        this.page = page
        this.selectDropdown = page.locator('select.dropdown-menu-lists');
        this.option1Checkbox = page.getByText('Option 1')
        this.option2Checkbox = page.getByText('Option 2')
        this.option4Checkbox = page.getByText('Option 4')
        this.radiobutton = page.locator('.radio-buttons')
        }

    async dropdownsFilling() {
        for (let i = 0; i < dropdownValues.number; i++) {
            const dropdown = await this.selectDropdown
            for (let j = 0; j < dropdownValues[i].number; j++) {
              await dropdown.selectOption(dropdownValues[i][j]);
}    }
}
    async checkboxesCheck() {
        await this.option1Checkbox.click()
        await this.option2Checkbox.click()
        await this.option4Checkbox.click()
    }
    async radioButtons() {
        for (let i = 0; i < radioButton.number; i++) {
            const buttons = await this.radiobutton
            await buttons.selectOption(radioButton[i]);
            await expect(radioButton).toBeChecked()
}}
}

module.exports = { DropCheckRadio };