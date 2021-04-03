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

    public static daysInMonth(year: number, month: number): number {
        return new Date(year, month, 0).getDate();
    }

    public static dateKey(dt): string {
        var d = new Date(dt),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }
}