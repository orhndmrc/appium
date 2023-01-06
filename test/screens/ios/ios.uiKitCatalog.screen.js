class UIKitCatalog{
    async initialize(){
        this.alertViewBtn = await $('//XCUIElementTypeStaticText[@value="Alert Views"]')
        this.simpleView = await $('-ios class chain:**/XCUIElementTypeStaticText[`label == "Simple"`]')
        this.backBtn = await $('-ios predicate string:label == "UIKitCatalog" AND name == "UIKitCatalog" AND type == "XCUIElementTypeButton"')
        this.searchTab = await $('~Search')
        this.defaultSearch = await $('~Default')
        this.inputBox = await $('-ios predicate string:type == "XCUIElementTypeSearchField"')
        this.clearText = await $('//XCUIElementTypeButton[@name="Clear text"]')
        this.pickerViewTab = await $('~Picker View')
        this.redPicker = await $('~Red color component value')
        this.greenPicker = await $('~Green color component value')
        this.bluePicker = await $('~Blue color component value')
    }   

    get textList() {return $$('XCUIElementTypeStaticText')}
    async verifyText(text) {return $(`-ios predicate string:value == "${text}"`)}
    
}
export default new UIKitCatalog()