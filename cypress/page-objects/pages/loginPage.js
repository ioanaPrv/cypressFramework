export default class LoginPage {
    getUsernameField() {
        return cy.get("#username")
    }
    getPasswordField() {
        return cy.get("#password")
    }
    getSignInButton() {
        return cy.get("button[type='submit']")
    }
    getSignInLabel() {
        return cy.get(".makeStyles-paper-2 > h1")
    }
    getAppLogo() {
        return cy.get(".makeStyles-logo-3")
    }
    getRememberMeCheckBox() {
        return cy.get(".MuiFormControlLabel-root > span")
    }
    getRememberMeButton() {
        return cy.get(".MuiFormControlLabel-root > span").eq(1)
    }
    getDontHaveAccountButton() {
        return cy.get("a[data-test='signup']")
    }
    getValidationErrorIcon() {
        return cy.get("div[role='alert'] > div").eq(0)
    }
    getValidationErrorMessage() {
        return cy.get("div[role='alert'] > div").eq(1)
    }
    getUsernameMandatoryValidationError() {
        return cy.get("#username-helper-text")
    }
    getPasswordMandatoryValidationError() {
        return cy.get("#password-helper-text")
    }
    getBuildByCypressButton() {
        return cy.get(".MuiBox-root.MuiBox-root-15 > div > p")
    }

    assertUiElements(){
        this.getAppLogo().should("be.visible")
        this.getDontHaveAccountButton().should("be.visible")
        this.getSignInLabel().should("be.visible")
        this.getUsernameField().should("be.visible")
        this.getPasswordField().should("be.visible")
        this.getRememberMeCheckBox().should("be.visible")
        this.getRememberMeButton().should("be.visible")
        this.getSignInButton().should("be.visible")
        this.getBuildByCypressButton().should("be.visible")
    }
}