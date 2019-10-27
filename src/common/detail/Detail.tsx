import React, { memo, useMemo } from 'react';
import './Detail.css';
import { IDetail } from '../../interfaces/detail.interface';
import { format } from '../../functions/date-utils.func';

const Detail: React.FC<IDetail> = (props: IDetail) => {
    const {
        departDate,
        arriveDate,
        departTimeStr,
        arriveTimeStr,
        trainNumber,
        departStation,
        arriveStation,
        durationStr,
    } = props;

    const departDateStr = useMemo(() => {
        return format(departDate);
    }, [departDate]);

    const arrivetDateStr = useMemo(() => {
        return format(arriveDate);
    }, [arriveDate]);

    return (
        <div className="detail">
            <div className="content">
                <div className="left">
                    <p className="city">{departStation}</p>
                    <p className="time">{departTimeStr}</p>
                    <p className="date">{departDateStr}</p>
                </div>
                <div className="middle">
                    <p className="train-name">{trainNumber}</p>
                    <p className="train-mid">
                        {props.children}
                    </p>
                    <p className="train-time">耗时{durationStr}</p>
                </div>
                <div className="right">
                    <p className="city">{arriveStation}</p>
                    <p className="time">{arriveTimeStr}</p>
                    <p className="date">{arrivetDateStr}</p>
                </div>
            </div>
        </div>
    )
}

export default memo(Detail);
