export default class BasePage {
	 wait(ms) {
		cy.wait(ms)
	}
	 logInfo(message) {
		cy.log(message)
	}
	 navigateToApp(url){
		cy.visit(url)
	 }
	 assertUrl(pageName){
		cy.url().should("contain", pageName)
	 }
	//Handing the device emulation
	 setMobileViewPort() {
		cy.viewport('iphone-x')
	}
	 setTabletViewPort() {
		cy.viewport('ipad-2')
	}
	 setDesktopViewPort() {
		cy.viewport('macbook-13')
	}
	 setLargeDesktopViewPort() {
		cy.viewport(1920, 1080)
	}
	
}
