describe('User Scenarios - Sauce Demo', () => {

    const url = 'https://www.saucedemo.com/'

    const login = () => {
        cy.visit(url)
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    }

    // 🔹 SCENARIO 1: LOGIN
    it('1. Успішний логін користувача', () => {
        login()
        cy.url().should('include', '/inventory.html')
    })

    // 🔹 SCENARIO 2: ADD TO CART
    it('2. Додавання товару в корзину', () => {
        login()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('contain', '1')
    })

    // 🔹 SCENARIO 3: CHECKOUT PROCESS
    it('3. Оформлення замовлення', () => {
        login()

        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_link').click()

        cy.get('#checkout').click()

        cy.get('#first-name').type('Test')
        cy.get('#last-name').type('User')
        cy.get('#postal-code').type('79000')

        cy.get('#continue').click()
        cy.get('#finish').click()

        cy.contains('Thank you for your order').should('be.visible')
    })

})