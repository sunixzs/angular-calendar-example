
/**
 * this class represents and calendar entry
 */
export class CalendarItem {
    public title: string = "";
    public dtStart: Date = null;
    public dtEnd: Date = null;

    constructor(title: string, dtStart: Date, dtEnd: Date) {
        this.title = title;
        this.dtStart = dtStart;
        this.dtEnd = dtEnd;
    }
}
