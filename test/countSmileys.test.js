const countSmileys = require('../src/countSmileys');

describe('countSmileys', () => {
    test('should return 2 when input is [":)", ";(", ";}", ":-D"]', () => {
        expect(countSmileys([':)', ';(', ';}', ':-D'])).toBe(2);
    });

    test('should return 3 when input is [";D", ":-(", ":-)", ";~)"]', () => {
        expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toBe(3);
    });

    test('should return 1 when input is [";]", ":[", ";*", ":$", ";-D"]', () => {
        expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
    });

    test('should return 0 when input is an empty array', () => {
        expect(countSmileys([])).toBe(0);
    });

    test('should return 0 when input contains no valid smiley faces', () => {
        expect(countSmileys([':(', ':|', ':}', ':['])).toBe(0);
    });

    test('should return correct count for a mixed array', () => {
        expect(countSmileys([':)', ':D', ':(', ':P', ';-D', ';~)'])).toBe(4);
    });
});