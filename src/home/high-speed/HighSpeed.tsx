import React from 'react';
import './HighSpeed.css'
import { IHighSpeedProps } from '../../interfaces/high-speed-props.interface';

const HighSpeed: React.FC<IHighSpeedProps> = (props: IHighSpeedProps) => {
    const {
        highSpeed,
        toogle,
    } = props;
    return (
        <div className="high-speed">
            <div className="high-speed-label">只看高铁/动车</div>
            <div className="high-speed-switch" onClick={() => toogle(!highSpeed)}>
                <input type="hidden" name="highSpeed" value={highSpeed} />
                <div className={`high-speed-track ${highSpeed === true ? 'checked' : null}`}>
                    <span className={`high-speed-handle ${highSpeed === true ? 'checked' : null}`}></span>
                </div>
            </div>
        </div>
    );
}

export default HighSpeed;
