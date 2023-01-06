import MvcToDo from '../../screens/ios/ios.mvcToDo.screen'
const expect = require('chai').expect
describe('IOS Ui Catalog App', () => {
    let listName
    before('setUp', async()=>{
        await MvcToDo.initialize()
    })

    it('should create a list  C-1 ', async () => {
        await MvcToDo.createListBtn.click()
        await MvcToDo.listnameInputBox.click()
        listName = 'Orhan\'s list'
        await MvcToDo.listnameInputBox.setValue(listName)
        await MvcToDo.createBtn.click()
        expect(await (await MvcToDo.verifyListAdded(listName)).isDisplayed()).to.be.true
    })

    it.skip('should create items in to do list  C-2 ', async () => {
        const itemName = 'Bazaar'
        await (await MvcToDo.verifyListAdded(listName)).click()
        await MvcToDo.createItem.click()
        await MvcToDo.itemTitle.click()
        await MvcToDo.itemTitle.setValue(itemName)
        await MvcToDo.itemDue.click()
         expect(await MvcToDo.datePicker.isDisplayed()).to.be.true
         await MvcToDo.datePicker.click()
        await MvcToDo.dueDate.click()
        await MvcToDo.dueDate.setValue('Dec 30, 2022')
        await MvcToDo.itemDue.click()
        await MvcToDo.itemCreateBtn.click()
        expect(await (await MvcToDo.verifyItemAdded(itemName)).isDisplayed()).to.be.true
       
    })

    it('should scroll vertically up and down C-3 ', async () => {
       
    })
    
})


