import { CalendarItem } from "./CalendarItem";
import { CalendarUtility } from "./CalendarUtility";

export const data: CalendarItem[] = [
    new CalendarItem("foo1", new Date('2021-04-03T08:00:00'), new Date('2021-04-03T10:00:00')),
    new CalendarItem("foo2", new Date('2021-04-02T08:00:00'), new Date('2021-04-04T10:00:00')),
    new CalendarItem("foo3", new Date('2021-04-05T08:00:00'), new Date('2021-04-05T10:00:00')),
    new CalendarItem("bar1", new Date('2021-05-03T08:00:00'), new Date('2021-05-03T10:00:00')),
    new CalendarItem("bar2", new Date('2021-05-02T08:00:00'), new Date('2021-05-04T10:00:00')),
    new CalendarItem("bar3", new Date('2021-05-05T08:00:00'), new Date('2021-05-05T10:00:00')),
    new CalendarItem("baz1", new Date('2021-06-03T08:00:00'), new Date('2021-06-03T10:00:00')),
    new CalendarItem("baz2", new Date('2021-06-02T08:00:00'), new Date('2021-06-04T10:00:00')),
    new CalendarItem("baz3", new Date('2021-06-05T08:00:00'), new Date('2021-06-05T10:00:00')),
];

export const dataByKey: any = {};

for (let i = 0; i < data.length; i++) {
    const item = data[i];

    if (item.dtStart >= item.dtEnd) {
        console.warn("start must be before end!", item);
    }

    let dtIteration = new Date(item.dtStart);
    while (dtIteration < item.dtEnd) {
        const key = CalendarUtility.dateKey(dtIteration);
        if (dataByKey[key] === undefined) {
            dataByKey[key] = [] as CalendarItem[];
        }

        dataByKey[key].push(item);

        dtIteration.setDate(dtIteration.getDate() + 1);
    }
}