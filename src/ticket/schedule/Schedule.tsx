import React, { memo, useEffect } from 'react';
import './Schedule.css';
import { IScheduleProps } from '../../interfaces/schedule-props.interface';
import dayjs from 'dayjs';
import ScheduleRow from './ScheduleRow';
import { IScheduleInfo } from '../../interfaces/schedule-info.interface';

const Schedule: React.FC<IScheduleProps> = (props: IScheduleProps) => {
    const {
        date,
        trainNumber,
        departStation,
        arriveStation,
        requestSchedule,
        scheduleInfo,
    } = props;

    useEffect(() => {
        requestSchedule({
            'date': dayjs(date).format('YYYY-MM-DD'),
            trainNumber,
            departStation,
            arriveStation,
        })
    }, [date, trainNumber, departStation, arriveStation, requestSchedule])

    return (
        <div className="schedule">
            <div className="dialog">
                <h1>列车时刻表</h1>
                <div className="head">
                    <span className="station">车站</span>
                    <span className="deptime">到达</span>
                    <span className="arrtime">发车</span>
                    <span className="stoptime">停留时间</span>
                </div>
                <ul>
                    {
                        scheduleInfo.map((schedule: IScheduleInfo, index: number) => {
                            return <ScheduleRow key={schedule.station} index={index + 1} {...schedule}/>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default memo(Schedule);