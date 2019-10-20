import React from 'react';
import './Bottom.css';
import { IBottomProps } from '../../interfaces/bottom-props.interface';
import { OrderTypeEnum } from '../../enum/order-type.enum';

const Bottom: React.FC<IBottomProps> = (props: IBottomProps) => {
    const {
        highSpeed,
        orderType,
        onlyTickets,
        isFiltersVisible,
        toggleOrderType,
        setHighSpeed,
        setOnlyTickets,
        setIsFiltersVisible,
    } = props;

    const toogleOrderTypeEvent = () => {
        toggleOrderType();
    }

    const toogleHighSpeedEvent = () => {
        setHighSpeed(!highSpeed);
    }

    const toogletOnlyTickets = () => {
        setOnlyTickets(!onlyTickets);
    }

    const toogletFiltersVisible = () => {
        setIsFiltersVisible(!isFiltersVisible);
    }

    return (
        <div className="bottom">
            <div className="bottom-filters">
                <span className="item" onClick={toogleOrderTypeEvent}>
                    <i className="icon">&#xf065;</i>
                    {orderType === OrderTypeEnum.ORDER_DEPART ? '出发→早晚' : '耗时 短→长'}
                </span>
                <span className={`item ${highSpeed ? 'item-on' : null}`} onClick={toogleHighSpeedEvent}>
                    <i className="icon">{highSpeed ? '\uf43f' : '\uf43e'}</i>
                    只看高铁动车
                </span>
                <span className={`item ${onlyTickets ? 'item-on' : null}`} onClick={toogletOnlyTickets}>
                    <i className="icon">{onlyTickets ? '\uf43d' : '\uf43c'}</i>
                    只看有票
                </span>
                <span className={`item ${isFiltersVisible ? 'item-on' : null}`} onClick={toogletFiltersVisible}>
                    <i className="icon">{isFiltersVisible ? '\uf0f7' : '\uf446'}</i>
                    综合筛选
                </span>
            </div>
        </div>
    )
}

export default Bottom;
