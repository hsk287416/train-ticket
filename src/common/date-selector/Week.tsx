import React from 'react';
import { IWeekProps } from '../../interfaces/week-props.interface';
import Day from './Day';

const Week: React.FC<IWeekProps> = (props: IWeekProps) => {
    const {
        days,
        onSelect,
    } = props;
    return (
        <tr className="date-table-days">
            {
                days.map((day: any, index: number) => {
                    return <Day key={index} day={day} onSelect={onSelect}/>
                })
            }
        </tr>
    );
}

export default Week;