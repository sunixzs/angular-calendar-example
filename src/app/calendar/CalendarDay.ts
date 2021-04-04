import { AbstractCalendar } from "./AbstractCalendar";
import { CalendarWeek } from "./CalendarWeek";

/**
 * Class representing a day in calendar.
 */
export class CalendarDay extends AbstractCalendar {
    constructor(dt: Date) {
        super(dt);
    }

    /**
     * When there is a parent it should be a week.
     */
    parent: CalendarWeek = null;

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

    public isCurrentMonth(): boolean {
        if (this.parent && this.parent.parent) {
            return this.dtStart.getMonth() === this.parent.parent.dtStart.getMonth();
        }

        return false;
    }
}
