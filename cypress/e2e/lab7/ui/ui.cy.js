describe('UI tests - Sauce Demo', () => {

    const url = 'https://www.saucedemo.com/'

    it('1. Login', () => {
        cy.visit(url)
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include', '/inventory.html')
    })

    it('2. Invalid login', () => {
        cy.visit(url)
        cy.get('#user-name').type('wrong')
        cy.get('#password').type('wrong')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('be.visible')
    })

    it('3. Add to cart', () => {
        cy.visit(url)
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('contain', '1')
    })

    it('4. Open cart', () => {
        cy.visit(url)
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', 'cart')
    })

    it('5. Checkout page', () => {
        cy.visit(url)
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.url().should('include', 'checkout')
    })

})