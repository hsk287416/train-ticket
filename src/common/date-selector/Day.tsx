import React from 'react';
import { IDayProps } from '../../interfaces/day-props.interface';
import * as dateUtils from '../../functions/date-utils.func';
import days from 'dayjs';

const Day: React.FC<IDayProps> = (props: IDayProps) => {
    const {
        day,
        onSelect,
    } = props;

    if (!day) {
        return <td className="null"></td>
    }
    const classes = [];
    const now = dateUtils.clearTime();
    if (day < now) {
        classes.push('disabled');
    }
    if ([6, 0].includes(new Date(day).getDay())) {
        classes.push('weekend');
    }
    const classStr = classes.join(' ');
    const dateStr = days(day).format('YYYYMMDD') === days(now).format('YYYYMMDD') ? '今天' : new Date(day).getDate();

    return (
        <td className={classStr} onClick={() => onSelect(day)}>{dateStr}</td>
    )
}

export default Day;
