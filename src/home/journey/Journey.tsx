import React from 'react';
import './Journey.css'
import switchImg from '../../imgs/switch.svg';
import { IJourneyProps } from '../../interfaces/journey-props.interface';

const Journey: React.FC<IJourneyProps> = (props: IJourneyProps) => {
    const {
        from = props.from,
        to = props.to,
        exchangeFromTo = props.exchangeFromTo,
        showCitySelector = props.showCitySelector,
    } = props;
    return (
        <div className="journey">
            <div className="journey-station" onClick={() => showCitySelector(true)}>
                <input type="text" name="from" readOnly value={from} className="journey-input journey-from" />
            </div>
            <div className="journey-switch" onClick={exchangeFromTo}>
            <img src={switchImg} width="70" height="40" alt="switch" />
            </div>
            <div className="journey-station" onClick={() => showCitySelector(false)}>
            <input type="text" name="to" readOnly value={to} className="journey-input journey-to" />
            </div>
        </div>
    );
}

export default Journey;
