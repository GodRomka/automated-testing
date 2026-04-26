describe('UI Tests - Sauce Demo', () => {

    const url = 'https://www.saucedemo.com/'

    const login = () => {
        cy.visit(url)
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    }

    it('1. Успішний логін', () => {
        login()
        cy.url().should('include', '/inventory.html')
    })

    it('2. Невірний логін', () => {
        cy.visit(url)
        cy.get('#user-name').type('wrong_user')
        cy.get('#password').type('wrong_pass')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('be.visible')
    })

    it('3. Додавання товару в корзину', () => {
        login()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('contain', '1')
    })

    it('4. Перехід у корзину', () => {
        login()
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', 'cart.html')
    })

    it('5. Відкриття checkout', () => {
        login()
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.url().should('include', 'checkout-step-one.html')
    })

})