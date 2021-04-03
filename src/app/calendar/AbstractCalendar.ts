import { CalendarItem } from "./CalendarItem";
import { CalendarYear } from "./CalendarYear";
import { CalendarMonth } from "./CalendarMonth";
import { CalendarWeek } from "./CalendarWeek";
import { CalendarDay } from "./CalendarDay";

export const TYPE_YEAR = "year";
export const TYPE_MONTH = "month";
export const TYPE_WEEK = "week";
export const TYPE_DAY = "day";

export type CalendarObject = CalendarItem | CalendarYear | CalendarMonth | CalendarWeek | CalendarDay;

export abstract class AbstractCalendar {

    /**
     * either year, month, week or day
     */
    public type: string = "";


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
     * Child objects like month, week, day, entry
     */
    public children: CalendarObject[] = [];

    public parent: CalendarObject = null;

    constructor(dt: Date) {
        this.setType();
        this.dt = dt;
        this.determineDtStart();
        this.determineDtEnd();
    }

    /**
     * abstract methods
     */
    abstract setType(): this
    abstract determineDtStart(): Date
    abstract determineDtEnd(): Date
    abstract getLabel():string

    public setChildren(children: []): this {
        this.children = children;
        return this;
    }

    public addChild(child: CalendarObject): this {
        this.children.push(child);
        return this;
    }
}
