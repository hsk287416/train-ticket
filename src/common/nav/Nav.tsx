import React, { useMemo, memo } from 'react';
import './Nav.css';
import { INavProps } from '../../interfaces/nav-props.interface';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import * as dateUtils from '../../functions/date-utils.func';


const Nav: React.FC<INavProps> = (props: INavProps) => {
    const {
        date,
        prev,
        next,
    } = props;

    const isPrevDisabled = useMemo(() => {
        return dateUtils.clearTime(date) <= dateUtils.clearTime();
    }, [date]);

    const isNextDisabled = useMemo(() => {
        return dateUtils.clearTime(date).getTime() - dateUtils.clearTime().getTime() >  20 * 86400 * 1000;
    }, [date]);

    const currentStr = useMemo(() => {
        const d = dayjs(date);
        return d.format('M月D日');
    }, [date]);

    return (
        <div className="nav">
            <span onClick={() => {
                if (!isPrevDisabled) {
                    prev();
                }
            }} className={`nav-prev ${isPrevDisabled ? 'nav-disabled' : null}`}>前一天</span>
            <span className="nav-current">{currentStr}</span>
            <span onClick={() => {
                if (!isNextDisabled) {
                    next();
                }
            }} className={`nav-next ${isNextDisabled ? 'nav-disabled' : null}`}>后一天</span>
        </div>
    )
}

export default memo(Nav);