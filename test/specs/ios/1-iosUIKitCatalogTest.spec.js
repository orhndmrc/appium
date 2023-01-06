import UiKitCatalogScreen from '../../screens/ios/ios.uiKitCatalog.screen'
import ElementActions from '../../utils/utility'
const expect = require('chai').expect
describe('IOS Ui Catalog App', () => {
    before('setUp', async()=>{
        await UiKitCatalogScreen.initialize()
      
    })

    it('should navigate alert views C-1 ', async () => {
        await UiKitCatalogScreen.alertViewBtn.click()
        await UiKitCatalogScreen.simpleView.click()
        const alertText = await driver.getAlertText()
        expect(alertText).to.contains('A Short Title Is Best')
        console.log(alertText)
        await driver.acceptAlert()
        const list = await UiKitCatalogScreen.textList
        for (const element of list) {
            console.log(await element.getText())
            
        }
        await UiKitCatalogScreen.backBtn.click()
      
    })

    it('should search specific word and clear it C-2 ', async () => {
        await UiKitCatalogScreen.searchTab.click()
        await UiKitCatalogScreen.defaultSearch.click()
        await UiKitCatalogScreen.inputBox.click()
        const inputText = 'Orhan'
        await UiKitCatalogScreen.inputBox.setValue(inputText)
        expect(await (await UiKitCatalogScreen.verifyText(inputText)).isDisplayed()).to.be.true
        await UiKitCatalogScreen.clearText.click()
        expect(await (await UiKitCatalogScreen.verifyText(inputText)).isDisplayed()).to.be.false
        await UiKitCatalogScreen.searchTab.click()
        await UiKitCatalogScreen.backBtn.click()
    })

    it('should scroll vertically up and down C-3 ', async () => {
        await UiKitCatalogScreen.pickerViewTab.click()
        await UiKitCatalogScreen.redPicker.click()
        await ElementActions.verticalScrollIos(UiKitCatalogScreen.redPicker)
        await UiKitCatalogScreen.greenPicker.click()
        await ElementActions.verticalScrollIos(UiKitCatalogScreen.greenPicker, 'up')
        await UiKitCatalogScreen.bluePicker.click()
        await ElementActions.verticalScrollIos(UiKitCatalogScreen.bluePicker)
        await UiKitCatalogScreen.redPicker.addValue('125')
        await UiKitCatalogScreen.greenPicker.addValue('0')
        await UiKitCatalogScreen.bluePicker.addValue('125')
        await UiKitCatalogScreen.backBtn.click()
    })
    
})


