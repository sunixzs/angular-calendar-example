import { Component, OnInit } from '@angular/core';
import { CalendarBuilder } from './CalendarBuilder';
import { CalendarMonth } from './CalendarMonth';
import { CalendarUtility } from './CalendarUtility';
import { CalendarYear } from './CalendarYear';
import { dataByKey } from "./data";

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    public yearDt: Date = null;
    public calendarYear: CalendarYear = null;

    public monthDt: Date = null;
    public calendarMonth: CalendarMonth = null;

    constructor() {
        this.yearDt = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1);
        this.calendarYear = CalendarBuilder.buildYear(this.yearDt, dataByKey);

        this.monthDt = new Date(this.yearDt);
        this.calendarMonth = CalendarBuilder.buildMonth(this.monthDt, dataByKey);
    }

    ngOnInit(): void {
    }

    public previousYear() {
        this.yearDt.setDate(this.monthDt.getDate() - 365);
        this.calendarYear = CalendarBuilder.buildYear(this.yearDt, dataByKey);
    }

    public nextYear() {
        this.yearDt.setDate(this.monthDt.getDate() + 365);
        this.calendarYear = CalendarBuilder.buildYear(this.yearDt, dataByKey);
    }

    public previousMonth() {
        this.monthDt.setDate(this.monthDt.getDate() - CalendarUtility.daysInMonth(this.monthDt.getFullYear(), this.monthDt.getMonth()));
        this.calendarMonth = CalendarBuilder.buildMonth(this.monthDt, dataByKey);
    }

    public nextMonth() {
        this.monthDt.setDate(this.monthDt.getDate() + CalendarUtility.daysInMonth(this.monthDt.getFullYear(), this.monthDt.getMonth() + 1));
        this.calendarMonth = CalendarBuilder.buildMonth(this.monthDt, dataByKey);
    }
}