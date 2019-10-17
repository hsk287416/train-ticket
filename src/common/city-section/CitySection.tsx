import React, { memo } from 'react';
import './CitySection.css';
import CityItem from '../city-item/CityItem';
import { ICitySectionProps } from '../../interfaces/city-section-props.interface';

const CitySection: React.FC<ICitySectionProps> = (props: ICitySectionProps) => {
    const {
        title,
        cities = [],
        onSelect,
    } = props;
    return (
        <ul className="city-ul">
            <li className="city-li" data-cate={title}>{title}</li>
            {
                cities.map((city: any) => {
                    return <CityItem key={city.name} name={city.name} onSelect={onSelect}/>
                })
            }
        </ul>
    )
}

export default memo(CitySection);