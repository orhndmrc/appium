import ColorNotesScreen from '../../screens/android/android.colorNotes.screen'
const expect = require('chai').expect

describe('Color Note', () => {
    before('setUp', async()=>{
        await ColorNotesScreen.initialize()
    })
    it(' should add a note - C1 ', async () => {
        await ColorNotesScreen.skipBtn.click()
        await ColorNotesScreen.addNoteBtn.click()
        let text = await ColorNotesScreen.addTextBtn.getText()
        console.log(text)
        await ColorNotesScreen.addTextBtn.click()
        await ColorNotesScreen.titleNote.click()
        await ColorNotesScreen.titleNote.addValue('Orhan Checklist')
        const noteToAdd = 'This is a test note'
        await ColorNotesScreen.addNote.addValue(noteToAdd)
        await driver.back()
        await driver.back()
        expect(await ColorNotesScreen.editBtn.isDisplayed()).to.be.true
        expect(await ColorNotesScreen.viewNote.getText()).to.equal(noteToAdd)
        await ColorNotesScreen.menuOptions.click()
        await ColorNotesScreen.deleteBtn.click()
        await driver.acceptAlert()
        expect(await ColorNotesScreen.emptyText.isDisplayed()).to.be.true
        expect(await ColorNotesScreen.emptyText.getText()).to.equal('Add note')
    })

    it(' should navigate to app on Facebook web page - C2 ', async () => {
        const skipNotice = ColorNotesScreen.skipBtn
        if(await skipNotice.isDisplayed()){
            await skipNotice.click()
        }
        await ColorNotesScreen.navMenu.click()
        await ColorNotesScreen.facebookLink.click()
        const windows = await driver.getContexts()
        await driver.waitUntil(
            async () => (windows.length) == 2,
            {
                timeout: 30000,
                timeoutMsg: 'getting web page not successful in 30s'
            }
        )
        console.log(windows)
       await driver.switchContext(windows[1])
       console.log(await driver.getContext())
        //expect(await ColorNotesScreen.appLogoFacebook.isDisplayed()).to.be.true
        expect(await driver.getTitle()).to.equal('ColorNote - Home | Facebook')
        await driver.back()
        await driver.back()
        expect(await ColorNotesScreen.emptyText.getText()).to.equal('Add note')

    })
})


