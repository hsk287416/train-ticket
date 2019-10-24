import React, { useMemo, useContext } from 'react';
import URI from 'urijs';
import { TrainContext } from '../Context';
import dayjs from 'dayjs';

const Channel: React.FC = (props: any) => {
    const { name, desc, type } = props;

    const {
        trainNumber,
        dStation,
        aStation,
        date,
    } = useContext(TrainContext);

    const src = useMemo(() => {
        return new URI('order.html')
            .setSearch('trainNumber', trainNumber)
            .setSearch('dStation', dStation)
            .setSearch('aStation', aStation)
            .setSearch('type', type)
            .setSearch('date', dayjs(date).format('YYYY-MM-DD'))
            .toString();
    }, [trainNumber, dStation, aStation, date, type]);

    return (
        <div className="channel">
            <div className="middle">
                <div className="name">{name}</div>
                <div className="desc">{desc}</div>
            </div>
            <a href={src} className="buy-wrapper">
                <div className="buy">买票</div>
            </a>
        </div>
    )
}

export default Channel;