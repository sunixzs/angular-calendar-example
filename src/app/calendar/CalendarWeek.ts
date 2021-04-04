import { AbstractCalendar } from "./AbstractCalendar";
import { CalendarMonth } from "./CalendarMonth";
import { CalendarUtility } from "./CalendarUtility";

/**
 * Class representing a week in calendar.
 */
export class CalendarWeek extends AbstractCalendar {
    constructor(dt: Date) {
        super(dt);
    }

    /**
     * When there is a parent it should be a month.
     */
    parent: CalendarMonth = null;

    /**
     * get first second of monday of this week
     */
    determineDtStart(): Date {
        this.dtStart = CalendarUtility.getMondayOfWeek(this.dt);
        return this.dtStart;
    }

    /**
     * get last second of sunday of this week
     */
    determineDtEnd(): Date {
        this.dtEnd = CalendarUtility.getSundayOfWeek(this.dt);
        return this.dtEnd;
    }

    getLabel(): string {
        return "";
    }
}
