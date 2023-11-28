export class DateHelper {
    static UtcNow() {
        const date = new Date();
        return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
            date.getUTCDate(), date.getUTCHours(),
            date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds()));
    }
}