class ElementActions {
    //
    async verticalScrollViewIntoText(text) {
        return await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${text}")`)

    }
    async verticalScrollToEnd() {
        return await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,3)`)
    }
    async goToSpecificPage(currentPackage, currentAcitivty){
        return await driver.startActivity(currentPackage, currentAcitivty)
    }
    async horizontalScroll() {
        return await $(`android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()`)
    }
    async verticalScrollIos(locator, direction='down'){ return await driver.execute('mobile: scroll', {element: locator.elementId, direction: direction})}

}
export default new ElementActions()
