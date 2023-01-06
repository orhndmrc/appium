class ApiDemosScreen{
    async initialize(){
        this.appBtn = await $('~App')
        this.textEntryUsernameBox = await $('//android.widget.EditText[@index="1"]')
        this.alertDialogBtn = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]')
        this.textEntryDialog = await $('//android.widget.Button[@content-desc="Text Entry dialog"]')
        this.alertTitle = await $('//android.widget.TextView')
        this.activityBtn = await $('~Activity') 
        this.secureSurfacesBtn = await $('~Secure Surfaces')
        this.currentDate = await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]')
        this.changeDate = await $('~change the date')
        this.tenthDay = await $('//android.view.View[@index="9"]')
        this.OkBtn = await $('//*[@text="OK"]')
    }   
}
export default new ApiDemosScreen()