import { CalendarYear } from "./CalendarYear";
import { CalendarMonth } from "./CalendarMonth";
import { CalendarWeek } from "./CalendarWeek";
import { CalendarDay } from "./CalendarDay";
import { CalendarUtility } from "./CalendarUtility";

export class CalendarBuilder {

    public static buildYear(dt: Date): CalendarYear {
        let year = new CalendarYear(dt);

        // build months
        let dtIteration = new Date(year.dtStart);

        let i = 0;
        while (dtIteration < year.dtEnd) {
            let month = CalendarBuilder.buildMonth(dtIteration);
            month.parent = year;
            year.addChild(month);
            dtIteration.setDate(dtIteration.getDate() + CalendarUtility.daysInMonth(dtIteration.getFullYear(), dtIteration.getMonth() + 1));

            if (i > 12) {
                break;
            }
        }

        return year;
    }

    public static buildMonth(dt: Date): CalendarMonth {
        let month = new CalendarMonth(dt);

        // build weeks
        let dtIteration = CalendarUtility.getMondayOfWeek(month.dtStart);
        const dtEnd = CalendarUtility.getSundayOfWeek(month.dtEnd);

        let i = 0;
        while (dtIteration < dtEnd) {
            let week = CalendarBuilder.buildWeek(dtIteration);
            week.parent = month;
            month.addChild(week);
            dtIteration.setDate(dtIteration.getDate() + 7);

            if (i > 5) {
                break;
            }
        }

        return month;
    }

    public static buildWeek(dt: Date): CalendarWeek {
        let week = new CalendarWeek(dt);

        // build days
        let dtIteration = new Date(week.dtStart);
        let i = 0;
        while (dtIteration < week.dtEnd) {
            let day = CalendarBuilder.buildDay(new Date(dtIteration));
            day.parent = week;
            week.addChild(day);
            dtIteration.setDate(dtIteration.getDate() + 1);

            if (i > 7) {
                break;
            }
        }

        return week;
    }

    public static buildDay(dt: Date): CalendarDay {
        return new CalendarDay(dt);
    }
}