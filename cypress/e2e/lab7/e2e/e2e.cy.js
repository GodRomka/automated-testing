describe('E2E сценарій - Sauce Demo', () => {

    const url = 'https://www.saucedemo.com/'

    it('Повний сценарій: логін → товар → корзина → checkout', () => {

        // 1. Відкрити сайт
        cy.visit(url)

        // 2. Логін
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        // 3. Перевірка що зайшли
        cy.url().should('include', '/inventory.html')

        // 4. Додати товар
        cy.get('#add-to-cart-sauce-labs-backpack').click()

        // 5. Перейти в корзину
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', '/cart.html')

        // 6. Checkout
        cy.get('#checkout').click()

        // 7. Заповнення форми
        cy.get('#first-name').type('Test')
        cy.get('#last-name').type('User')
        cy.get('#postal-code').type('79000')

        cy.get('#continue').click()

        // 8. Завершення покупки
        cy.get('#finish').click()

        // 9. Перевірка успіху
        cy.contains('Thank you for your order').should('be.visible')
    })

})