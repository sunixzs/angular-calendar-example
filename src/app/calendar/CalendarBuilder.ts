import { CalendarYear } from "./CalendarYear";
import { CalendarMonth } from "./CalendarMonth";
import { CalendarWeek } from "./CalendarWeek";
import { CalendarDay } from "./CalendarDay";
import { CalendarUtility } from "./CalendarUtility";

/**
 * Class to build the calendar structure.
 */
export class CalendarBuilder {

    /**
     * Generates a year including all subtypes like months -> weeks -> days.
     * @param dt A Date object in the year. It always builds the complete year from 1/1 to 12/31.
     * @param dataByKey CalendarItem data which will be transferred to the days.
     * @returns CalendarYear
     */
    public static buildYear(dt: Date, dataByKey: any): CalendarYear {
        let year = new CalendarYear(dt);

        // build months
        let dtIteration = new Date(year.dtStart);

        let i = 0;
        while (dtIteration < year.dtEnd) {
            let month = CalendarBuilder.buildMonth(dtIteration, dataByKey);
            month.parent = year;
            year.addChild(month);
            dtIteration.setDate(dtIteration.getDate() + CalendarUtility.daysInMonth(dtIteration));

            if (i > 12) {
                break;
            }
        }

        return year;
    }

    /**
     * Generates a month including all subtypes like weeks -> days.
     * @param dt A Date object in the month. It always builds the complete month and the days before and after it to complete the weeks from monday to sunday.
     * @param dataByKey CalendarItem data which will be transferred to the days.
     * @returns CalendarMonth
     */
    public static buildMonth(dt: Date, dataByKey: any): CalendarMonth {
        let month = new CalendarMonth(dt);

        // build weeks
        let dtIteration = CalendarUtility.getMondayOfWeek(month.dtStart);
        const dtEnd = CalendarUtility.getSundayOfWeek(month.dtEnd);

        let i = 0;
        while (dtIteration < dtEnd) {
            let week = CalendarBuilder.buildWeek(dtIteration, dataByKey);
            week.parent = month;
            month.addChild(week);
            dtIteration.setDate(dtIteration.getDate() + 7);

            if (i > 5) {
                break;
            }
        }

        return month;
    }

    /**
     * Generates a week including the days.
     * @param dt A Date object in the week. It always builds the complete week from monday to sunday.
     * @param dataByKey CalendarItem data which will be transferred to the days.
     * @returns CalendarWeek
     */
    public static buildWeek(dt: Date, dataByKey: any): CalendarWeek {
        let week = new CalendarWeek(dt);

        // build days
        let dtIteration = new Date(week.dtStart);
        let i = 0;
        while (dtIteration < week.dtEnd) {
            let day = CalendarBuilder.buildDay(new Date(dtIteration), dataByKey);
            day.parent = week;
            week.addChild(day);
            dtIteration.setDate(dtIteration.getDate() + 1);

            if (i > 7) {
                break;
            }
        }

        return week;
    }

    /**
     * Generates a day including the CalendarItems.
     * @param dt A Date object in the day.
     * @param dataByKey CalendarItem data which will be added to the day.
     * @returns CalendarDay
     */
    public static buildDay(dt: Date, dataByKey: any): CalendarDay {
        let day = new CalendarDay(dt);

        const key = CalendarUtility.dateKey(day.dt);
        if (dataByKey[key]) {
            for (let i = 0; i < dataByKey[key].length; i++) {
                day.addChild(dataByKey[key][i]);
            }
        }

        return day;
    }
}