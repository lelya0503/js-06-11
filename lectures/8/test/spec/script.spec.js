const script = require('../script.js');

describe('Функция sum()', () => {
    it('должна вернуть 5 при аргументах 3 и 2', () => {
        const res = script.sum(3, 2);
        expect(res).toBe(5);
    });
});

describe('Функция pow()', () => {
    it('должна вернуть 9 при аргументах 3 и 2', () => {
        const res = script.pow(3, 2);
        expect(res).toBe(9);
    });

    it('должна вернуть null при аргументах null и 5', () => {
        const res = script.pow(null, 5);
        expect(res).toBe(null);
    });

    it('должна вернуть null при аргументах 5 и null', () => {
        const res = script.pow(5, null);
        expect(res).toBe(null);
    });
});

// Типы тестирования:
// статическое
// unit
// integration 
// end-to-end, e2e, сквозное

