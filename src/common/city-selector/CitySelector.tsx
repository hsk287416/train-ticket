import React, { useState, useMemo, useEffect, createRef, memo } from 'react';
import './CitySelector.css'
import { ICitySelectorProps } from '../../interfaces/city-selector-props.interface';
import CityList from '../city-list/CityList';

export const CitySelector: React.FC<ICitySelectorProps> = (props: ICitySelectorProps) => {
    const {
        show,
        cityData,
        isLoading,
        onBack,
        loadCityData,
        onSelect,
    } = props;

    const [searchKey, setSearchKey] = useState('');
    const key = useMemo(() => searchKey.trim(), [searchKey]);
    const searchInputRef = createRef<HTMLInputElement>();

    useEffect(() => {
        if (searchInputRef.current && key.length === 0) {
            searchInputRef.current.focus();
        }
    });

    useEffect(() => {
        if (!show || cityData || isLoading) {
            return;
        }
        loadCityData();
    }, [show, cityData, isLoading]);

    const outputCitySections = () => {
        if (isLoading) {
            return <div>loading</div>
        }
        if (cityData) {
            return (
                <CityList sections={cityData.cityList} onSelect={onSelect}/>
            )
        }
        return <div>error</div>
    }

    return (
        <div className={`city-selector ${show ? null : 'hidden'}`}>
            <div className="city-search">
                <div className="search-back" onClick={onBack}>
                    <svg width="42" height="42">
                        <polyline
                            points="25,13 16,21 25,29"
                            stroke="#fff"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>
                <div className="search-input-wrapper">
                    <input type="text" ref={searchInputRef} value={searchKey} onChange={e => setSearchKey(e.target.value)} className="search-input" placeholder="城市、车站的中文或拼音"/>
                </div>
                <i className={`search-clean ${key.length === 0 ? 'hidden' : null}`} onClick={() => setSearchKey('')}>
                    &#xf063;
                </i>
            </div>
            {outputCitySections()}
        </div>
    );
}

export default memo(CitySelector);
