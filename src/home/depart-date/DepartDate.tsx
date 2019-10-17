import React, { useMemo } from 'react';
import './DepartDate.css'
import dayjs from 'dayjs';
import { IDepartDateProps } from '../../interfaces/depart-date-props.interface';
import * as dateUtils from '../../functions/date-utils.func';

const DepartDate: React.FC<IDepartDateProps> = (props: IDepartDateProps) => {
    const {
        time,
        onClick
    } = props;

    const depart = dateUtils.clearTime(time);
    const departDate = new Date(depart);
    const departDateString = useMemo(() => {
        return dayjs(time).format('YYYY-MM-DD')
    }, [depart]);
    const isToday = departDateString === dayjs(new Date()).format('YYYY-MM-DD');
    const weekString = '周' + ['日', '一', '二', '三', '四', '五', '六'][departDate.getDay()] + (isToday ? '（今天）' : '');

    return (
        <div className="depart-date" onClick={() => {onClick()}}>
            <input type="hidden" name="date" value={departDateString} />
            {departDateString} <span className="depart-week">{weekString}</span>
        </div>
    );
}

export default DepartDate;
