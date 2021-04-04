import { CalendarItem } from "./CalendarItem";
import { CalendarYear } from "./CalendarYear";
import { CalendarMonth } from "./CalendarMonth";
import { CalendarWeek } from "./CalendarWeek";
import { CalendarDay } from "./CalendarDay";

/**
 * The possible child and parent types
 */
export type CalendarObject = CalendarItem | CalendarYear | CalendarMonth | CalendarWeek | CalendarDay;

/**
 * Parent of all periods in calendar: CalendarYear, CalendarMonth, CalendarWeek, CalendarDay
 */
export abstract class AbstractCalendar {
    /**
     * date in period to build from
     */
    public dt: Date = null;

    /**
     * first second in this period
     * will be determined by the class itself
     */
    public dtStart: Date = null;

    /**
     * last second in this period
     * will be determined by the class itself
     */
    public dtEnd: Date = null;

    /**
     * Child objects like month, week, day, item
     */
    public children: CalendarObject[] = [];

    /**
     * Parent object like year, month, week, day
     */
    abstract parent: CalendarObject;

    constructor(dt: Date) {
        this.dt = dt;
        this.determineDtStart();
        this.determineDtEnd();
    }

    /**
     * Finds and sets the first second in the period.
     */
    abstract determineDtStart(): Date

    /**
     * Finds and sets the last second in the period.
     */
    abstract determineDtEnd(): Date

    /**
     * A formatted output label of the period.
     */
    abstract getLabel(): string

    public addChild(child: CalendarObject): this {
        this.children.push(child);
        return this;
    }
}
