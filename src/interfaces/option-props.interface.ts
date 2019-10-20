import React from 'react';

export interface IOptionProps {
    title: string;
    options: any[];
    checkedMap: any[];
    update: React.Dispatch<any>;
}