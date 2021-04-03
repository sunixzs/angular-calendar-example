import * as BaseCalendar from "./AbstractCalendar";


export class CalendarYear extends BaseCalendar.AbstractCalendar {
    constructor(dt: Date) {
        super(dt);
    }

    parent: BaseCalendar.CalendarObject = null;

    /**
     * abstract methods
     */
    setType(): this {
        this.type = BaseCalendar.TYPE_YEAR;
        return this;
    }

    /**
     * first second in year
     */
    determineDtStart(): Date {
        this.dtStart = new Date(this.dt.getFullYear(), 0, 1);
        this.dtStart.setHours(0);
        this.dtStart.setMinutes(0);
        this.dtStart.setSeconds(0);

        return this.dtStart;
    }

    /**
     * last second in year
     */
    determineDtEnd(): Date {
        this.dtEnd = new Date(this.dt.getFullYear(), 11, 31);
        this.dtEnd.setHours(23);
        this.dtEnd.setMinutes(59);
        this.dtEnd.setSeconds(59);

        return this.dtEnd;
    }

    getLabel(): string {
        return this.dtStart.getFullYear().toString();
    }
}
