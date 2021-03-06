import { Component } from '@angular/core';
import { CalendarBuilder } from './CalendarBuilder';
import { CalendarDay } from './CalendarDay';
import { CalendarMonth } from './CalendarMonth';
import { CalendarUtility } from './CalendarUtility';
import { CalendarYear } from './CalendarYear';
import { dataByKey } from "./data";

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

    public yearDt: Date = null;
    public calendarYear: CalendarYear = null;

    public monthDt: Date = null;
    public calendarMonth: CalendarMonth = null;
    public dayDt: Date = null;
    public calendarDay: CalendarDay = null;

    constructor() {
        this.yearDt = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1);
        this.calendarYear = CalendarBuilder.buildYear(this.yearDt, dataByKey);

        this.monthDt = new Date(this.yearDt);
        this.calendarMonth = CalendarBuilder.buildMonth(this.monthDt, dataByKey);

        this.dayDt = new Date(this.yearDt);
        this.calendarDay = CalendarBuilder.buildDay(this.monthDt, dataByKey);
    }

    /**
     * Jump to the previous year.
     * Bind by button in template.
     */
    public previousYear() {
        this.yearDt.setDate(this.monthDt.getDate() - 365);
        this.calendarYear = CalendarBuilder.buildYear(this.yearDt, dataByKey);
    }

    /**
     * Jump to the next year.
     * Bind by button in template.
     */
    public nextYear() {
        this.yearDt.setDate(this.monthDt.getDate() + 365);
        this.calendarYear = CalendarBuilder.buildYear(this.yearDt, dataByKey);
    }

    /**
     * Jump to the previous month.
     * Bind by button in template.
     */
    public previousMonth() {
        this.monthDt.setDate(this.monthDt.getDate() - CalendarUtility.daysInMonth(this.monthDt));
        this.calendarMonth = CalendarBuilder.buildMonth(this.monthDt, dataByKey);
    }

    /**
     * Jump to the next month.
     * Bind by button in template.
     */
    public nextMonth() {
        this.monthDt.setDate(this.monthDt.getDate() + CalendarUtility.daysInMonth(this.monthDt) + 1);
        this.calendarMonth = CalendarBuilder.buildMonth(this.monthDt, dataByKey);
    }
    /**
     * Jump to the previous day.
     * Bind by button in template.
     */
    public previousDay() {
        this.dayDt.setDate(this.dayDt.getDate() - 1);
        this.calendarDay = CalendarBuilder.buildDay(this.dayDt, dataByKey);
    }

    /**
     * Jump to the next day.
     * Bind by button in template.
     */
    public nextDay() {
        this.dayDt.setDate(this.dayDt.getDate() + 1);
        this.calendarDay = CalendarBuilder.buildDay(this.dayDt, dataByKey);
    }
}