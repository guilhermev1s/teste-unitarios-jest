const calculadora = require('./calculadora')
describe("Testando calculadora", () => {
    test('1 + 2 = 3', () => { 
        expect(calculadora.somar(1,2)).toBe(3)
     })
})