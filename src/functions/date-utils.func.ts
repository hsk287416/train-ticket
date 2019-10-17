/**
 * 获取未来三个月的月份数组
 */
export const getMonthSequence = (): number[] => {
    const now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    now.setDate(1);
    const monthSequence = [now.getTime()];
    now.setMonth(now.getMonth() + 1);
    monthSequence.push(now.getTime());
    now.setMonth(now.getMonth() + 1);
    monthSequence.push(now.getTime());
    return monthSequence;
}

/**
 * 获取指定月的所有日期列表，并以周来分组
 * @param startTimeInMonth 每个月的起始时间
 */
export const getDayListInMonthGroupByWeek = (startTimeInMonth: any): any[][] => {
    const startDay = new Date(startTimeInMonth);
    const currentDay = new Date(startTimeInMonth);
    let days = [];
    while (currentDay.getMonth() === startDay.getMonth()) {
        days.push(currentDay.getTime());
        currentDay.setDate(currentDay.getDate() + 1);
    }
    days = new Array(startDay.getDay() === 0 ? 6 : startDay.getDay() - 1).fill(null).concat(days);
    const lastDay = new Date(days[days.length - 1]);
    days = days.concat(new Array(lastDay.getDay() === 0 ? 0 : 7 - lastDay.getDay()).fill(null));

    const weeks = [];
    for (let row = 0; row < days.length / 7; row++) {
        const week = days.slice(row * 7, (row + 1) * 7);
        weeks.push(week);
    }
    return weeks;
}

export const clearTime = (timestamp: any = Date.now()) => {
    const target = new Date(timestamp);
    target.setHours(0);
    target.setMinutes(0);
    target.setSeconds(0);
    target.setMilliseconds(0);
    return target;
}