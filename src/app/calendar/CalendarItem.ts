
/**
 * this class represents and calendar entry
 */
export class CalendarItem {
    public title: string = "";
    public dtStart: Date = null;
    public dtEnd: Date = null;

    protected format: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit' };

    constructor(title: string, dtStart: Date, dtEnd: Date) {
        this.title = title;
        this.dtStart = dtStart;
        this.dtEnd = dtEnd;
    }

    public dtStartFormatted(): string {
        return this.dtStart.toLocaleString('default', this.format);
    }

    public dtEndFormatted(): string {
        return this.dtEnd.toLocaleString('default', this.format);
    }
}
