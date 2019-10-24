import React, { memo, useEffect } from 'react';
import { IScheduleRowProps } from '../../interfaces/schedule-row-props.interface';
import leftPad from 'left-pad';

const ScheduleRow: React.FC<IScheduleRowProps> = (props: IScheduleRowProps) => {
    const {
        index,
        station,
        arriveTime,
        departTime,
        stay,
        isStartStation,
        isEndStation,
        isDepartStation,
        isArriveStation,
        beforeDepartStation,
        afterArriveStation,
    } = props;

    const getRowTitle = () => {
        if (isStartStation) {
            return '出';
        } else if (isArriveStation) {
            return '到';
        }
        return leftPad(index, 2, '0');
    }

    return (
        <li>
            <div className={`icon ${isStartStation || isArriveStation ? 'icon-red' : null}`}>
                { getRowTitle() }
            </div>
            <div className={`row ${beforeDepartStation || afterArriveStation ? 'grey' : null}`}>
                <span className={`station ${isArriveStation || isStartStation ? 'red' : null}`}>{station}</span>
                <span className={`arrtime ${isArriveStation ? 'red' : null}`}>
                    { isStartStation ? '始发站' : arriveTime  }
                </span>
                <span className={`deptime ${isDepartStation ? 'red' : null}`}>
                    { isEndStation ? '终到站' : departTime  }
                </span> 
                <span className="stoptime">
                    { isStartStation || isEndStation ? '-' : stay + "分" }
                </span>
            </div>
        </li>
    )
}

export default memo(ScheduleRow);