import React from 'react';
import { IMonthProps } from '../../interfaces/month-props.interface';
import * as dateUtils from '../../functions/date-utils.func';
import Week from './Week';

const Month: React.FC<IMonthProps> = (props: IMonthProps) => {
    const {
        startTimeInMonth,
        onSelect,
    } = props;
    
    const weeks = dateUtils.getDayListInMonthGroupByWeek(startTimeInMonth);
    const startDay = new Date(startTimeInMonth);

    return (
        <table className="date-table">
            <thead>
                <tr>
                    <td colSpan={7}>
                        <h5>{startDay.getFullYear()}年{startDay.getMonth() + 1}月</h5>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr className="date-table-weeks">
                    <th>周一</th>
                    <th>周二</th>
                    <th>周三</th>
                    <th>周四</th>
                    <th>周五</th>
                    <th className="weekend">周六</th>
                    <th className="weekend">周日</th>
                </tr>
                {
                    weeks.map((week: any[], index: number) => {
                        return (
                            <Week key={index} days={week} onSelect={onSelect}/>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default Month;