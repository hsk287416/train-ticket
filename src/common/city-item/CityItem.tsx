import React, { memo } from 'react';
import { ICityItemProps } from '../../interfaces/city-item-props.interface';
import './CityItem.css';

const CityItem: React.FC<ICityItemProps> = (props: ICityItemProps) => {
    const {
        onSelect,
        name
    } = props;
    return (
        <li className="city-li" onClick={() => onSelect(name)}>{name}</li>
    )
}

export default memo(CityItem);