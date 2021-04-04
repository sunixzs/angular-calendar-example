import { AbstractCalendar } from "./AbstractCalendar";
import { CalendarYear } from "./CalendarYear";

/**
 * Class representing a month in calendar.
 */
export class CalendarMonth extends AbstractCalendar {
    constructor(dt: Date) {
        super(dt);
    }

    /**
     * When there is a parent it should be a year.
     */
    parent: CalendarYear = null;

    /**
     * first second in month
     */
    determineDtStart(): Date {
        this.dtStart = new Date(this.dt.getFullYear(), this.dt.getMonth(), 1);
        this.dtStart.setHours(0);
        this.dtStart.setMinutes(0);
        this.dtStart.setSeconds(0);

        return this.dtStart;
    }

    /**
     * last second in month
     */
    determineDtEnd(): Date {
        this.dtEnd = new Date(this.dt.getFullYear(), this.dt.getMonth() + 1, 0);
        this.dtEnd.setHours(23);
        this.dtEnd.setMinutes(59);
        this.dtEnd.setSeconds(59);

        return this.dtEnd;
    }

    getLabel(): string {
        return this.dtStart.toLocaleString('default', { month: 'long', year: 'numeric' });
    }
}
