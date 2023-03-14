export class AutocompleteTF {
    constructor(page){
        this.page = page
        this.search = page.getByPlaceholder('Food Item')
        this.food = page.getByText('ps')
    }
async searchChips(food){
    if (food) {await search.fill(food)}
    await this.food.click()
    await expect(this.search).toHaveValue('Chips')
    }
}
module.exports = { AutocompleteTF };