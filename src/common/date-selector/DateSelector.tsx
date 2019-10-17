import React from 'react';
import './DateSelector.css';
import { IDateSelectorProps } from '../../interfaces/date-selector-props.interface';
import Header from '../header/Header';
import * as dateUtils from '../../functions/date-utils.func';
import Month from './Month';

const DateSelector: React.FC<IDateSelectorProps> = (props: IDateSelectorProps) => {
    const {
        show,
        onSelect,
        onBack,
    } = props;

    const monthSequence = dateUtils.getMonthSequence();

    return (
        <div className={`date-selector ${show ? null : 'hidden'}`}>
            <Header title="日期选择" onBack={onBack} />
            <div className="date-selector-tables">
                {
                    monthSequence.map((month: number) => {
                        return <Month key={month}
                            startTimeInMonth={month}
                            onSelect={onSelect} />
                    })
                }
            </div>
        </div>
    );
}

export default DateSelector;
