const findOddInt = require('../src/findOddInt'); // สมมติว่าฟังก์ชันอยู่ในไฟล์ findOddInt.js

describe('findOddInt', () => {
  test('should find the integer that appears an odd number of times', () => {
    expect(findOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))
      .toBe(4);
  });

  test('should return correct message when there is only one number', () => {
    expect(findOddInt([5]))
      .toBe(5);
  });

  test('should handle negative numbers', () => {
    expect(findOddInt([-1, -1, -1, -2, -2]))
      .toBe(-1);
  });

  test('should return "odd int not found" when no integer appears an odd number of times', () => {
    expect(findOddInt([1, 1, 2, 2, 3, 3, 4, 4]))
      .toBe('odd int not found');
  });

  test('should handle an empty array', () => {
    expect(findOddInt([]))
      .toBe('odd int not found');
  });

  test('should handle large numbers', () => {
    expect(findOddInt([1000000, 1000000, 1000001]))
      .toBe(1000001);
  });
});