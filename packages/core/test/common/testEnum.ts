import { Enum } from '../../src';

enum TestEnum {
  a,
  b,
  c,
}
type TestEnumType = keyof typeof TestEnum;

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
  // for (const test of tests) {
  //   console.log(`name : ${test}`);
  // }
  //
  // const test = TestEnum['z' as TestEnumType];
  // console.log(test ?? TestEnum.a);
});

test('Enum.get', () => {
  const values = Object.values(TestEnum);
  console.log(`所有值：${values}`);

  const tests = Enum.get(TestEnum);
  for (const test of tests) {
    console.log(`name : ${test.name}, value: ${test.value}`);
  }
  // expect(TestEnum.a).toBe(0);
  // expect(tests.length).toBe(3);
});
