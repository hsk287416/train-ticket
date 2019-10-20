import React, { memo } from 'react';
import { IFilterProp } from '../../interfaces/filter-props.interface';

const Filter: React.FC<IFilterProp> = (props: IFilterProp) => {
    const {
        name,
        checked,
        toggle,
        value,
    } = props;
    return (
        <li className={`${checked ? 'checked' : null}`} onClick={() => {toggle(value)}}>
            {name}
        </li>
    )
}

export default memo(Filter);