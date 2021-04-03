import * as BaseCalendar from "./AbstractCalendar";


export class CalendarDay extends BaseCalendar.AbstractCalendar {
    constructor(dt: Date) {
        super(dt);
    }

    /**
     * abstract methods
     */
    setType(): this {
        this.type = BaseCalendar.TYPE_DAY;
        return this;
    }

    /**
     * first second of day
     */
    determineDtStart(): Date {
        this.dtStart = new Date(this.dt);
        this.dtStart.setHours(0);
        this.dtStart.setMinutes(0);
        this.dtStart.setSeconds(0);

        return this.dtStart;
    }

    /**
     * last second of day
     */
    determineDtEnd(): Date {
        this.dtEnd = new Date(this.dt);
        this.dtEnd.setHours(23);
        this.dtEnd.setMinutes(59);
        this.dtEnd.setSeconds(59);

        return this.dtEnd;
    }

    getLabel(): string {
        return this.dtStart.getDate().toString();
    }
}
