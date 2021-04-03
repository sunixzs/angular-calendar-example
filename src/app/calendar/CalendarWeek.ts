import * as BaseCalendar from "./AbstractCalendar";
import { CalendarUtility } from "./CalendarUtility";


export class CalendarWeek extends BaseCalendar.AbstractCalendar {
    constructor(dt: Date) {
        super(dt);
    }

    /**
     * abstract methods
     */
    setType(): this {
        this.type = BaseCalendar.TYPE_WEEK;
        return this;
    }

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
