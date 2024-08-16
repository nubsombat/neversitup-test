const permutations = require('../src/permutations');

describe('permutations', () => {
    test('should return correct permutations for "abc"', () => {
        const result = permutations('abc');
        const expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
        expect(result.length).toBe(expected.length);
        expect(new Set(result)).toEqual(new Set(expected));
    });

    test('should handle empty string', () => {
        const result = permutations('');
        expect(result).toEqual(['']);
    });

    test('should handle single character', () => {
        const result = permutations('a');
        expect(result).toEqual(['a']);
    });

    test('should handle string with duplicate characters', () => {
        const result = permutations('aab');
        expect(result).toEqual(['aab', 'aba', 'baa']);
    });

    test('should handle string with duplicate characters case 2', () => {
        const result = permutations('aabcc');
        const expected = [
            'aabcc', 'aacbc', 'aaccb', 'abacc', 'abcac', 'abcca',
            'acabc', 'acbac', 'acbca', 'accab', 'accba', 'acacb',
            'baacc', 'bacac', 'bacca', 'bcaac', 'bcaca', 'bccaa',
            'caabc', 'caacb', 'cabac', 'cabca', 'cacab', 'cacba',
            'cbaac', 'cbaca', 'cbcaa', 'ccaab', 'ccaba', 'ccbaa'
        ]

        expect(result.length).toBe(expected.length);
        expect(new Set(result)).toEqual(new Set(expected));
    });

    test('should handle longer string', () => {
        const result = permutations('abcd');
        expect(result.length).toBe(24);
        expect(new Set(result).size).toBe(24);
    });
});