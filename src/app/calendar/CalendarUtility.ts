export class CalendarUtility {
    public static getMondayOfWeek(dt: Date): Date {
        let tmpDt = new Date(dt);
        tmpDt.setHours(0);
        tmpDt.setMinutes(0);
        tmpDt.setSeconds(0);
        let day = tmpDt.getDay();
        let diff = tmpDt.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        return new Date(tmpDt.setDate(diff));
    }

    public static getSundayOfWeek(dt: Date): Date {
        let tmpDt = CalendarUtility.getMondayOfWeek(dt);
        tmpDt = new Date(tmpDt.setDate(tmpDt.getDate() + 6));
        tmpDt.setHours(23);
        tmpDt.setMinutes(59);
        tmpDt.setSeconds(59);
        return tmpDt;
    }

    /**
     * Determins the number of days in given date.
     */
    public static daysInMonth(dt: Date): number {
        return new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    }

    /**
     * Builds a key in form YYYY-MM-DD from a date object.
     */
    public static dateKey(dt: Date): string {
        return [
            dt.getFullYear(),
            dt.getMonth() + 1 < 10 ? '0' + dt.getMonth() + 1 : dt.getMonth() + 1,
            dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate()
        ].join('-');
    }
}