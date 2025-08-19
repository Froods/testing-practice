import {
	capitalize,
	reverseString,
	calculator,
	ceasar,
	analyzeArray,
} from '../funcs';

test('capitalize', () => {
	expect(capitalize('kusse')).toBe('K');
	expect(capitalize('fisse')).toBe('F');
	expect(capitalize('PIK')).toBe('P');
	expect(capitalize('åse')).toBe('Å');
});

test('reverseString', () => {
	expect(reverseString('pik')).toBe('kip');
	expect(reverseString('fisse')).toBe('essif');
});

test('calculator', () => {
	expect(calculator.add(1, 2)).toBe(3);
	expect(calculator.sub(2, 1)).toBe(1);
	expect(calculator.multiply(2, 2)).toBe(4);
	expect(calculator.divide(2, 2)).toBe(1);
});

test('ceasar', () => {
	expect(ceasar('a', 3)).toBe('d');
	expect(ceasar('xyz', 3)).toBe('abc');
	expect(ceasar('xYz', 3)).toBe('aBc');
	expect(ceasar('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('analyze array', () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});
