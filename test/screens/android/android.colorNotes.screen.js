class ColorNotesScreen{
    async initialize(){
        this.addNoteBtn = await $('//android.widget.ImageButton[@index="2"]')
        this.addTextBtn = await $('//android.widget.TextView[@text="Text"]')
        this.titleNote = await $('//*[@resource-id = "com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
        this.addNote = await $('//*[@resource-id = "com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
        this.saveBtn = await $('//*[@resource-id = "com.socialnmobile.dictapps.notepad.color.note:id/back_btn"]')
        this.skipBtn = await $('//*[@text="SKIP"]')
        this.editBtn = await $('//*[@resource-id = "com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')
        this.viewNote = await $('//*[@resource-id = "com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')
        this.menuOptions = await $('~More')
        this.deleteBtn = await $('//android.widget.TextView[@text="Delete"]')
        this.confirmDeletion = await $('//android.widget.Button[@text="OK"]')
        this.emptyText = await $('//*[@resource-id = "com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]')
        this.navMenu = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
        this.facebookLink = await $('//*[@text="Like us on Facebook"]')
       // this.appLogoFacebook = await $('//*[@aria-label="Profile photo"]')
        
    }   
}
export default new ColorNotesScreen()