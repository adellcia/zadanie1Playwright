export class AjaxLoader {
    constructor(page){
        this.page = page
        this.clickMeButton = page.getByText('CLICK ME!')
        
    }
async waitForAjax(){
    await this.clickMeButton.click()
    }
}
module.exports = { AjaxLoader };