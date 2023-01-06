class MvcToDo{
    async initialize(){
        this.createListBtn = await $('//XCUIElementTypeStaticText[@name="Create list"]')
        this.listnameInputBox = await $('//*[@value="List Name"]')
        this.createBtn = await $('~Create')
        this.createItem = await $('//XCUIElementTypeStaticText[@name="Create item"]')
        this.itemTitle = await $('-ios predicate string:value == "Title"')
        this.itemDue = await $('-ios predicate string:value == "Due"')
        this.datePicker = await $('~Date Picker')
        this.dueDate = await $('//XCUIElementTypeStaticText[@name="30"]')
        this.itemCreateBtn = await $('//XCUIElementTypeButton[@name="Create"]')
    }  
    
    async verifyListAdded(listName){ return $(`//XCUIElementTypeStaticText[@name="${listName}"]`)}
    async verifyItemAdded(itemName){ return $(`//XCUIElementTypeStaticText[@name="${itemName}]`)}
    
}
export default new MvcToDo()