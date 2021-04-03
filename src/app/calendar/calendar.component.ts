import { Component, OnInit } from '@angular/core';
import { CalendarBuilder } from './CalendarBuilder';
import { CalendarYear } from './CalendarYear';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    public year: CalendarYear = null;

    constructor() {
        const now = new Date();
        this.year = CalendarBuilder.buildYear(now);
    }

    ngOnInit(): void {
    }

}