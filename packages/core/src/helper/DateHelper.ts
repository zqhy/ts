export class DateHelper {
  static UtcNow() {
    const date = new Date();
    return new Date(
      Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
        date.getUTCMilliseconds()
      )
    );
  }

  static subtract(fromDate: Date | number, toDate: Date | number) {
    return new TimeSpan(+toDate - +fromDate);
  }
}

const ticksPerSecond = 1000;
const ticksPerMinute = 60000;
const ticksPerHour = 3600000;
const ticksPerDay = 86400000;
export class TimeSpan {
  ticks: number;

  constructor(ticks: number) {
    this.ticks = ticks;
  }

  get days() {
    return Math.floor(this.totalDays);
  }
  get hours() {
    return Math.floor(this.totalHours % 24);
  }
  get minutes() {
    return Math.floor(this.totalMinutes % 60);
  }
  get seconds() {
    return Math.floor(this.totalSeconds % 60);
  }
  get milliseconds() {
    return Math.floor(this.totalMilliseconds % 1000);
  }

  get totalDays() {
    return this.ticks / ticksPerDay;
  }
  get totalHours() {
    return this.ticks / ticksPerHour;
  }
  get totalMinutes() {
    return this.ticks / ticksPerMinute;
  }
  get totalSeconds() {
    return this.ticks / ticksPerSecond;
  }
  get totalMilliseconds() {
    return this.ticks;
  }
}
