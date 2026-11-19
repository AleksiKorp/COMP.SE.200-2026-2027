import add from '../src/add'

// Example file
test("add 1 & 2", () => {
    expect(add(1,2)).toBe(3);
});

test('extended', () => {
  expect(2).toBeInteger();
});

test('chain and extended', () => {
  expect([1, 2, 3])
  .toEqual([1, 2, 3])
  .toBeArray()
  .toBeArrayOfSize(3)
  .toIncludeAnyMembers([1, 2]);
});
