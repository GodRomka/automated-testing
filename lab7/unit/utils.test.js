function sum(a, b) {
    return a + b
}

function multiply(a, b) {
    return a * b
}

describe('Unit tests', () => {

    test('1. sum', () => {
        expect(sum(2, 3)).toBe(5)
    })

    test('2. multiply', () => {
        expect(multiply(2, 3)).toBe(6)
    })

    test('3. sum zero', () => {
        expect(sum(0, 5)).toBe(5)
    })

    test('4. multiply zero', () => {
        expect(multiply(0, 5)).toBe(0)
    })

    test('5. negative numbers', () => {
        expect(sum(-2, -3)).toBe(-5)
    })

})