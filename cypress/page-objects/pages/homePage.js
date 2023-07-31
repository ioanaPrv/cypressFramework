export default class HomePage {
    getHomeButton(){
        return cy.get("a[data-test='sidenav-home']")
    }
}