import React, { memo } from 'react';
import CitySection from '../city-section/CitySection';
import { ICityListProps } from '../../interfaces/city-list-props.interface';

const CityList: React.FC<ICityListProps> = (props: ICityListProps) => {
    const {
        sections,
        onSelect,
    } = props;

    return (
        <div className="city-list">
            <div className="city-cate">
                {
                    sections.map((section: any) => {
                        return (
                            <CitySection key={section.title} title={section.title} cities={section.citys} onSelect={onSelect}/>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default memo(CityList);