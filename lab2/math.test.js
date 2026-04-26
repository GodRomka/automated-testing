const { subtract, multiply, divide } = require('./math')

describe('Функція subtract', () => {
    test('5 - 3 = 2', () => {
        expect(subtract(5, 3)).toBe(2)
    })

    test('0 - 5 = -5', () => {
        expect(subtract(0, 5)).toBe(-5)
    })

    test('-3 - 3 = -6', () => {
        expect(subtract(-3, 3)).toBe(-6)
    })

    test('10 - 0 = 10', () => {
        expect(subtract(10, 0)).toBe(10)
    })

    test('однакові числа', () => {
        expect(subtract(4, 4)).toBe(0)
    })
})