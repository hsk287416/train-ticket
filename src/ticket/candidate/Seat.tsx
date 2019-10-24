import React, { memo } from 'react';
import Channel from './Channel';

const Seat: React.FC = (props: any) => {
    const {
        type,
        priceMsg,
        ticketsLeft,
        channels,
        expanded,
        onToggle,
        idx,
    } = props;
    return (
        <li>
            <div className="bar" onClick={() => onToggle(idx)}>
                <span className="seat">{type}</span>
                <span className="price">
                    <i>￥</i>{priceMsg}
                </span>
                <span className="btn">{expanded ? '收起' : '预定'}</span>
                <span className="num">{ticketsLeft}</span>
            </div>
            <div className="channels" style={{height: expanded ? channels.length * 55 : 0}}>
                {
                    channels.map((channel: any) => {
                        return <Channel key={channel.name} {...channel} type={type}/>
                    })
                }
            </div>
        </li>
    )
}

export default memo(Seat);