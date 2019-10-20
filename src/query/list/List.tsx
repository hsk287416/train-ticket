import React, { memo } from 'react';
import './List.css';
import { IListProps } from '../../interfaces/list-props.interface';
import ListItem from './ListItem';

const List: React.FC<IListProps> = (props: IListProps) => {
    const {
        list,
    } = props;
    return (
        <ul className="list">
            {
                list.map((item: any) => (
                    <ListItem key={item.trainNumber}
                        dTime={item.dTime}
                        aTime={item.aTime}
                        dStation={item.dStation}
                        aStation={item.aStation}
                        trainNumber={item.trainNumber}
                        date={item.date}
                        time={item.time}
                        priceMsg={item.priceMsg}
                        dayAfter={item.dayAfter} />
                ))
            }
        </ul>
    )
}

export default memo(List);
