import { Selector } from 'testcafe'

fixture `TestCafe UI test`
    .page `https://www.saucedemo.com/`

test('Login test', async t => {
    await t
        .typeText('#user-name', 'standard_user')
        .typeText('#password', 'secret_sauce')
        .click('#login-button')
        .expect(Selector('.inventory_list').exists).ok()
})