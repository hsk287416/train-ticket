import React, { memo } from 'react';
import CitySection from '../city-section/CitySection';
import { ICityListProps } from '../../interfaces/city-list-props.interface';
import './CityList.css';

const CityList: React.FC<ICityListProps> = (props: ICityListProps) => {
    const {
        sections,
        onSelect,
        toAlpha,
    } = props;
    
    const alphaList = Array.from(new Array(26), (_: any, index: number) => {
        return String.fromCharCode(65 + index);
    })

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
            <div className="city-index">
                {
                    alphaList.map((alpha: string) => {
                        return (
                            <i className="city-index-item" key={alpha} onClick={() => toAlpha(alpha)}>{alpha}</i>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default memo(CityList);