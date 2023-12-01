import { DateHelper } from '../../src';

test('UtcNow', () => {
  console.log(DateHelper.UtcNow());
});

test('subtract', () => {
  const fromDate = new Date(Date.UTC(2023, 11, 1, 0));
  const toDate = new Date(Date.UTC(2023, 11, 2, 1));
  const interval = DateHelper.subtract(fromDate, toDate);

  expect(interval.days).toBe(1);
  expect(interval.hours).toBe(1);
  expect(interval.minutes).toBe(0);
  expect(interval.seconds).toBe(0);
  expect(interval.milliseconds).toBe(0);

  expect(interval.totalDays).toBe(1.0416666666666667);
  expect(interval.totalHours).toBe(25);
  expect(interval.totalMinutes).toBe(1500);
  expect(interval.totalSeconds).toBe(90000);
  expect(interval.totalMilliseconds).toBe(90000000);

  // console.log(`days：${interval.days}`);
  // console.log(`hours：${interval.hours}`);
  // console.log(`minutes：${interval.minutes}`);
  // console.log(`seconds：${interval.seconds}`);
  // console.log(`milliseconds：${interval.milliseconds}`);
  //
  // console.log(`totalDays：${interval.totalDays}`);
  // console.log(`totalHours：${interval.totalHours}`);
  // console.log(`totalMinutes：${interval.totalMinutes}`);
  // console.log(`totalSeconds：${interval.totalSeconds}`);
  // console.log(`totalMilliseconds：${interval.totalMilliseconds}`);
});
