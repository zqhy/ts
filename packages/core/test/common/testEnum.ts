import { Enum } from '../../src';

enum TestEnum {
  a,
  b,
  c,
}
test('Enum.getValues', () => {
  const tests = Enum.getValues(TestEnum);
  expect(TestEnum.a).toBe(0);
  expect(tests.length).toBe(3);
  expect(tests[0] === TestEnum.a).toBe(true);
});

test('Enum.getNames', () => {
  const tests = Enum.getNames(TestEnum);
  expect(tests.length).toBe(3);
  expect(tests[1] === 'b').toBe(true);
  for (const test of tests) {
    console.log(`name : ${test}`);
  }
});
