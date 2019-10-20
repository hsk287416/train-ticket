import React, { memo, useCallback } from 'react';
import { IOptionProps } from '../../interfaces/option-props.interface';
import Filter from './Filter';

const Option: React.FC<IOptionProps> = (props: IOptionProps) => {
    const {
        title,
        options,
        checkedMap,
        update,
    } = props;

    const toggle = useCallback((value: string) => {
        const newCheckedMap = JSON.parse(JSON.stringify(checkedMap));
        if (value in checkedMap) {
            delete newCheckedMap[value];
        } else {
            newCheckedMap[value] = true;
        }
        update(newCheckedMap);
    }, [checkedMap, update]);

    return (
        <div className="option">
            <h3>{title}</h3>
            <ul>
                {
                    options.map((option: any) => {
                        return <Filter key={option.value}
                            name={option.name}
                            value={option.value}
                            checked={option.value in checkedMap}
                            toggle={toggle} />
                    })
                }
            </ul>
        </div>
    )
}

export default memo(Option);