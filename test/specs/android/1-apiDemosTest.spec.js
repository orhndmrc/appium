
import DialogScreen from '../../screens/android/android.apiDemos.screen.js'
import ElementActions from '../../utils/utility'
const expect = require('chai').expect
describe('Api Demos', () => {
    before('setUp', async()=>{
        await DialogScreen.initialize()
    })
    it('should edit username and password on text entry dialog C-1 ', async () => {
        await DialogScreen.appBtn.click()
        await DialogScreen.alertDialogBtn.click()
        await DialogScreen.textEntryDialog.click()
        expect(await DialogScreen.textEntryUsernameBox.waitForDisplayed()).to.be.true
    })

    it('Access to activity directly C-2 ', async () => {
        await ElementActions.goToSpecificPage("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples")
        await DialogScreen.alertTitle.waitForDisplayed()
        let title = await DialogScreen.alertTitle.getText()
        console.log(`Title: ${title}`)
        expect(title).to.eq('App/Alert Dialogs')
    })
    it('Vertical scrolling C-3 ', async () => {
        await ElementActions.goToSpecificPage("io.appium.android.apis", "io.appium.android.apis.ApiDemos")
        await DialogScreen.appBtn.click()
        await DialogScreen.activityBtn.click()
        await(await ElementActions.verticalScrollViewIntoText('Secure Surfaces')).click()
        //await ElementActions.verticalScrollToEnd()
    })
    it('Horizontal scrolling C-4 ', async () => {
        await ElementActions.goToSpecificPage("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1")
        const currentDay = await DialogScreen.currentDate.getText()
        await DialogScreen.changeDate.click()
        await ElementActions.horizontalScroll()
        await DialogScreen.tenthDay.click()
        await DialogScreen.OkBtn.click()
        const tenthDayNextMonth = await DialogScreen.currentDate.getText()
        expect(currentDay).not.Arguments.equal(tenthDayNextMonth)
        
    })
})


